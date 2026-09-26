import { readFile, access, writeFile } from 'node:fs/promises';
const origin = 'https://www.julianwortelboer.com';
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
const routes = [['/', 'index.html'], ...config.rewrites.map(r => [r.source, r.destination.slice(1)])];
const live = process.argv.includes('--live');
const sitemap = live ? await (await fetch(origin + '/sitemap.xml')).text() : await readFile('dist/sitemap.xml', 'utf8');
const findings = [], pages = [], titles = new Set(), descriptions = new Set();
for (const [path, file] of routes) {
  const response = live ? await fetch(origin + path) : null;
  const html = response ? await response.text() : await readFile('dist/' + file, 'utf8');
  const issues = [];
  const meta = key => html.match(new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]+content="([^"]*)"`))?.[1];
  const noindex = /noindex/i.test(meta('robots') || '');
  if (response && response.status !== 200) issues.push(`HTTP ${response.status}`);
  if (response?.headers.get('x-robots-tag')?.includes('noindex') && !noindex) issues.push('Unexpected noindex header');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = meta('description');
  for (const [name, value, seen] of [['title', title, titles], ['description', description, descriptions]]) {
    if (!value) issues.push(`Missing ${name}`);
    else if (seen.has(value)) issues.push(`Duplicate ${name}`);
    else seen.add(value);
  }
  if ((html.match(/<h1[ >]/g) || []).length !== 1) issues.push('Expected one H1');
  if (!html.includes(`rel="canonical" href="${origin}${path}"`)) issues.push('Canonical mismatch');
  if (!noindex && !sitemap.includes(`<loc>${origin}${path}</loc>`)) issues.push('Missing from sitemap');
  if (noindex && sitemap.includes(`<loc>${origin}${path}</loc>`)) issues.push('Noindex URL in sitemap');
  for (const field of ['og:title','og:description','og:url','og:image','twitter:card','twitter:title','twitter:description','twitter:image']) if (!meta(field)) issues.push(`Missing ${field}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!noindex && !schemas.length) issues.push('No structured data');
  for (const [,json] of schemas) { try { JSON.parse(json); } catch { issues.push('Invalid JSON-LD'); } }
  for (const img of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="[^"]*"/.test(img[0])) issues.push('Image missing alt');
  for (const [,src] of html.matchAll(/(?:src|content)="((?:https:\/\/www\.julianwortelboer\.com)?\/assets\/[^" ]+)"/g)) {
    try { await access('dist' + src.replace(origin, '')); } catch { issues.push(`Missing image ${src}`); }
  }
  pages.push({path,status:response?.status || 'local',indexable:!noindex,issues});
  findings.push(...issues.map(issue => `${path}: ${issue}`));
}
const report = {mode:live?'live':'build',checkedAt:new Date().toISOString(),pageCount:pages.length,indexableCount:pages.filter(p=>p.indexable).length,findings,pages};
// Keep the report outside public output so it is not deployed as website content.
await writeFile('seo-audit-report.json', JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(findings.length) process.exitCode=1;
