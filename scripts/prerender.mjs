import { createServer } from 'vite';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

const origin = 'https://www.julianwortelboer.com';
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
try {
  const routes = new Map([['/', 'index.html']]);
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  for (const route of config.rewrites) routes.set(route.source, route.destination.slice(1));
  for (const [path, file] of routes) {
    if (path === '/about-julian-wortelboer') continue;
    let html = await readFile(`dist/${file}`, 'utf8');
    const module = path === '/' ? 'App' : path === '/contact' ? 'ContactPage' : path === '/insights' ? 'InsightsPage' : 'ArticlePage';
    const { default: Component } = await server.ssrLoadModule(`/src/${module}.tsx`);
    const body = renderToString(createElement(Component, { pathname: path }));
    if (path !== '/') html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    // These pages have no stateful controls: full HTML and CSS provide all functionality.
    // Avoid re-rendering the same content and downloading the entire article collection.
    html = html.replace(/<script type="module"[^>]*>[\s\S]*?<\/script>/g, '').replace(/<link rel="modulepreload"[^>]*>/g, '');
    if (path.startsWith('/insights/')) {
      const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin + '/' }, { '@type': 'ListItem', position: 2, name: 'Insights', item: origin + '/insights' }, { '@type': 'ListItem', position: 3, name: body.match(/<h1>(.*?)<\/h1>/)?.[1], item: origin + path }] };
      html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head>`);
    }
    await writeFile(`dist/${file}`, html);
  }
  const { default: About } = await server.ssrLoadModule('/src/AboutPage.tsx');
  const home = await readFile('dist/index.html', 'utf8');
  const css = home.match(/<link rel="stylesheet"[^>]*>/g).join('');
  const title = 'About Julian Wortelboer | Padel Club Consultant & Master Coach';
  const description = 'Meet Julian Wortelboer: 25+ years of padel and racquet club experience, Padel Smash Academy co-founder, consultant and author.';
  const aboutSchema = { '@context': 'https://schema.org', '@type': 'ProfilePage', url: origin + '/about-julian-wortelboer', mainEntity: { '@type': 'Person', '@id': origin + '/#julian-wortelboer', name: 'Julian Wortelboer', url: origin + '/about-julian-wortelboer', description, jobTitle: ['Padel Club Consultant', 'Padel Master Coach'], sameAs: ['https://www.linkedin.com/in/julianwortelboer', 'https://www.instagram.com/julianwortelboer/'] } };
  await writeFile('dist/about.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${origin}/about-julian-wortelboer"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${origin}/about-julian-wortelboer">${css}<script type="application/ld+json">${JSON.stringify(aboutSchema)}</script></head><body>${renderToString(createElement(About))}</body></html>`);
  routes.set('/about-julian-wortelboer', 'about.html');
  for (const [path, file] of routes) {
    const html = await readFile(`dist/${file}`, 'utf8');
    if ((html.match(/<h1[ >]/g) || []).length !== 1) throw Error(`Expected one H1: ${path}`);
    if (!html.includes(`href="${origin}${path}"`)) throw Error(`Missing canonical: ${path}`);
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
    for (const [, href] of html.matchAll(/href="(\/[^"#]*)/g)) {
      if (href.startsWith('/assets/')) continue;
      if (!routes.has(href)) throw Error(`Broken internal link ${href} in ${path}`);
    }
  }
  console.log(`Validated ${routes.size} fully rendered pages, canonical URLs, internal links and JSON-LD.`);
} finally { await server.close(); }
