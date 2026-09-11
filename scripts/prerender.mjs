import { createServer } from 'vite';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

const origin = 'https://www.julianwortelboer.com';
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const rssLink = '<link rel="alternate" type="application/rss+xml" title="Julian Wortelboer Padel Insights" href="https://www.julianwortelboer.com/feed.xml">';
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
    html = html.replace('</head>', `${rssLink}</head>`);
    await writeFile(`dist/${file}`, html);
  }
  const { default: About } = await server.ssrLoadModule('/src/AboutPage.tsx');
  const home = await readFile('dist/index.html', 'utf8');
  const css = home.match(/<link rel="stylesheet"[^>]*>/g).join('');
  const title = 'About Julian Wortelboer | Padel Club Consultant & Master Coach';
  const description = 'Meet Julian Wortelboer: 25+ years of padel and racquet club experience, Padel Smash Academy co-founder, consultant and author.';
  const aboutSchema = { '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': origin + '/about-julian-wortelboer#profile-page', url: origin + '/about-julian-wortelboer', name: title, description, dateModified: '2026-09-11', inLanguage: 'en-US', isPartOf: { '@id': origin + '/#website' }, mainEntity: { '@type': 'Person', '@id': origin + '/#julian-wortelboer', name: 'Julian Wortelboer', url: origin + '/about-julian-wortelboer', image: origin + '/assets/julian-portrait.webp', description, jobTitle: ['Padel Club Consultant', 'Padel Master Coach', 'Racquet Sports Director'], knowsAbout: ['Padel club development', 'Padel club operations', 'Padel programming', 'Padel coaching', 'Coach development', 'Racquet sports leadership'], sameAs: ['https://www.linkedin.com/in/julianwortelboer', 'https://www.instagram.com/julianwortelboer/', 'https://www.youtube.com/@padelsmashtv'] } };
  const aboutImage = origin + '/assets/julian-hero.jpg';
  await writeFile('dist/about.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${escape(description)}"><meta name="author" content="Julian Wortelboer"><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"><link rel="canonical" href="${origin}/about-julian-wortelboer"><link rel="icon" href="/assets/jw-logo.webp" type="image/webp"><meta property="og:type" content="profile"><meta property="og:site_name" content="Julian Wortelboer"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${origin}/about-julian-wortelboer"><meta property="og:image" content="${aboutImage}"><meta property="og:image:alt" content="Julian Wortelboer coaching on a padel court"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${aboutImage}">${rssLink}${css}<script type="application/ld+json">${JSON.stringify(aboutSchema)}</script></head><body>${renderToString(createElement(About))}</body></html>`);
  routes.set('/about-julian-wortelboer', 'about.html');

  const { articles } = await server.ssrLoadModule('/src/articleData.ts');
  const items = articles.map((article) => {
    const url = `${origin}/insights/${article.slug}`;
    return `<item><title>${escape(article.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escape(article.intro[0])}</description><pubDate>${new Date(article.date + ' 12:00:00 UTC').toUTCString()}</pubDate><category>${escape(article.category)}</category></item>`;
  }).join('');
  await writeFile('dist/feed.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Julian Wortelboer Padel Insights</title><link>${origin}/insights</link><description>Practical insights on padel club strategy, operations, coaching, player development and leadership.</description><language>en-us</language><lastBuildDate>${new Date('2026-09-11T12:00:00Z').toUTCString()}</lastBuildDate>${items}</channel></rss>`);
  for (const [path, file] of routes) {
    const html = await readFile(`dist/${file}`, 'utf8');
    if ((html.match(/<h1[ >]/g) || []).length !== 1) throw Error(`Expected one H1: ${path}`);
    if (!html.includes(`href="${origin}${path}"`)) throw Error(`Missing canonical: ${path}`);
    for (const required of ['<title>', 'name="description"', 'name="robots"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'property="og:image"', 'name="twitter:card"']) if (!html.includes(required)) throw Error(`Missing ${required}: ${path}`);
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
    for (const [, href] of html.matchAll(/href="(\/[^"#]*)/g)) {
      if (href.startsWith('/assets/')) continue;
      if (!routes.has(href)) throw Error(`Broken internal link ${href} in ${path}`);
    }
  }
  console.log(`Validated ${routes.size} fully rendered pages, canonical URLs, internal links and JSON-LD.`);
} finally { await server.close(); }
