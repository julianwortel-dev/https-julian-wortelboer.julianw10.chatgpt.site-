import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articleBySlug, articles } from './articleData';

const bookUrl = 'https://www.amazon.com/MASTERING-ART-COACHING-PADEL-Methodology-ebook/dp/B0H8R4336Q/';
const bookTitle = 'Mastering the Art of Coaching Padel';
const coachingCertificationUrl = 'https://padelsmashgroup.com/';

function BookLinkedText({ text }: { text: string }) {
  const parts = text.split(bookTitle);
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <a className="inline-book-link" href={bookUrl} target="_blank" rel="noreferrer">{bookTitle}</a>}</span>)}</>;
}

export default function ArticlePage({ pathname = typeof window === 'undefined' ? '' : window.location.pathname }: { pathname?: string } = {}) {
  const slug = pathname.split('/').filter(Boolean).pop() || '';
  const article = articleBySlug[slug];

  if (!article) return <main className="article-not-found"><h1>Insight not found.</h1><a href="/insights">Return to Insights</a></main>;

  const tacticalSeries = [
    'tactical-pillar-of-padel-development',
    'padel-court-zones-and-net-rule',
    'padel-shot-selection',
    'padel-placement-and-targeting',
    'padel-point-construction-patterns',
    'padel-partnership-play',
    'padel-momentum-and-pressure',
    'reading-padel-opponents',
  ];
  const tacticalIndex = tacticalSeries.indexOf(article.slug);
  const tacticalRelated = tacticalIndex >= 0
    ? [tacticalSeries[tacticalIndex - 1], tacticalSeries[tacticalIndex + 1]].filter(Boolean).map((itemSlug) => articleBySlug[itemSlug])
    : [];
  const technicalSeries = [
    'technical-pillar-of-padel-development',
    'padel-technical-foundations-grip-preparation-contact',
    'sixteen-padel-groundstrokes',
    'four-padel-volleys-net-game',
    'ten-padel-overhead-shots',
    'six-types-of-padel-lobs',
    'eight-padel-serve-return-variations',
    'eight-padel-specialty-shots',
    'padel-spin-touch-feel-power-control',
  ];
  const technicalIndex = technicalSeries.indexOf(article.slug);
  const technicalRelated = technicalIndex >= 0
    ? [technicalSeries[technicalIndex - 1], technicalSeries[technicalIndex + 1]].filter(Boolean).map((itemSlug) => articleBySlug[itemSlug])
    : [];
  const authoritySeries = [
    'three-pillars-60-minute-padel-lesson',
    'explain-observe-diagnose-correct-padel-coaching-system',
    'twenty-quality-repetitions-padel-practice',
    'padel-coach-certification-checklist',
    'three-pillars-psa-52-shots-system',
    'club-director-evaluate-padel-coach-three-pillars',
  ];
  const authorityIndex = authoritySeries.indexOf(article.slug);
  const authorityRelated = authorityIndex >= 0
    ? [authoritySeries[authorityIndex - 1], authoritySeries[authorityIndex + 1]].filter(Boolean).map((itemSlug) => articleBySlug[itemSlug])
    : [];
  const seriesRelated = tacticalRelated.length > 0 ? tacticalRelated : technicalRelated.length > 0 ? technicalRelated : authorityRelated;
  const related = seriesRelated.length > 0
    ? seriesRelated
    : articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);
  const categoryAnchor = article.category === 'Club Strategy & Operations' ? 'club-strategy' : article.category === 'Coaching & Player Development' ? 'coaching' : 'industry';
  const promoteBlueprint = article.category === 'Club Strategy & Operations';
  const articleUrl = `https://www.julianwortelboer.com/insights/${article.slug}`;
  const published = new Date(article.date + ' 12:00:00 UTC').toISOString().slice(0, 10);
  const wordCount = [...article.intro, ...article.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets || [])])]
    .join(' ').trim().split(/\s+/).length;
  const isCoachingArticle = article.category === 'Coaching & Player Development';
  const isCoachHiringArticle = article.slug === 'how-to-hire-a-padel-coach';
  const semanticTopics = isCoachHiringArticle
    ? ['how to hire a padel coach', 'padel coach hiring scorecard', 'padel coach evaluation', 'on-court coaching audition', '52 Shots of Padel', 'padel coach certification', 'Padel Smash Group', 'Julian Wortelboer']
    : isCoachingArticle
      ? ['padel coaching', 'padel player development', 'physical development', 'tactical development', 'padel technique', 'coach education', 'Julian Wortelboer']
      : ['padel club operations', 'customer service', 'member experience', 'padel business', 'Julian Wortelboer'];
  const aboutTopics = isCoachHiringArticle
    ? [
        { '@type': 'Thing', name: 'Padel coach hiring' },
        { '@type': 'Thing', name: 'Coach evaluation' },
        { '@type': 'Thing', name: 'Padel club operations' },
      ]
    : isCoachingArticle
      ? [
          { '@type': 'Thing', name: 'Padel coaching' },
          { '@type': 'Thing', name: 'Player development' },
          { '@type': 'Thing', name: 'Coach education' },
        ]
      : [
        { '@type': 'Thing', name: 'Padel club operations' },
        { '@type': 'Thing', name: 'Customer service' },
        { '@type': 'Thing', name: 'Member experience' },
      ];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.intro[0],
    articleSection: article.category,
    keywords: [article.category, ...semanticTopics],
    about: aboutTopics,
    wordCount,
    datePublished: published,
    dateModified: article.updatedDate ? new Date(article.updatedDate + ' 12:00:00 UTC').toISOString().slice(0, 10) : published,
    inLanguage: 'en-US',
    image: `https://www.julianwortelboer.com${article.image || '/assets/julian-hero.webp'}`,
    mainEntityOfPage: articleUrl,
    isPartOf: { '@id': 'https://www.julianwortelboer.com/insights#collection' },
    author: article.author
      ? article.author.split(' & ').map((name) => ({ '@type': 'Person', name, ...(name === 'Julian Wortelboer' ? { url: 'https://www.julianwortelboer.com/about-julian-wortelboer' } : {}) }))
      : { '@type': 'Person', name: 'Julian Wortelboer', url: 'https://www.julianwortelboer.com/about-julian-wortelboer', sameAs: ['https://www.linkedin.com/in/julianwortelboer', 'https://www.instagram.com/julianwortelboer/', 'https://www.youtube.com/@padelsmashtv'] },
    publisher: { '@type': 'Person', name: 'Julian Wortelboer', url: 'https://www.julianwortelboer.com/', image: 'https://www.julianwortelboer.com/assets/julian-portrait.webp' },
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a href="/" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.webp" alt="Julian Wortelboer" /></a>
        <nav aria-label="Article navigation"><a href="/insights"><ArrowLeft size={16} /> All insights</a><a className="nav-cta" href="/contact">Work with Julian <ArrowRight size={16} /></a></nav>
        <a className="mobile-contact contact-back" href="/insights" aria-label="Back to Insights"><ArrowLeft size={22} /></a>
      </header>

      <article>
        <header className="article-header">
          <a className="article-category" href={`/insights#${categoryAnchor}`}>{article.category}</a>
          <h1>{article.title}</h1>
          <div className="article-meta"><span>By {article.author || 'Julian Wortelboer'} · <a href="/about-julian-wortelboer">About Julian</a></span><time dateTime={published}>{article.date}</time><span>{article.readTime}</span></div>
        </header>

        <div className="article-layout">
          <aside><p>Insights from</p><a className="aside-book-link" href={bookUrl} target="_blank" rel="noreferrer"><strong>Mastering the Art<br />of Coaching Padel</strong><ArrowRight size={16} /></a><p className="author-experience">Julian draws on more than 25 years of experience running padel and racquet clubs. He also developed the Padel Club Blueprint, a practical manual for operational success.</p></aside>
          <div className="article-body">
            <div className="article-intro">{article.intro.map((paragraph) => <p key={paragraph}><BookLinkedText text={paragraph} /></p>)}</div>
            {article.image && <figure className="article-visual"><img src={article.image} alt={article.imageAlt || article.title} width="746" height="1164" loading="eager" />{article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}</figure>}
            {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{article.slug === 'how-to-hire-a-padel-coach' && section.heading === 'The 100-point padel coach hiring scorecard' && <figure className="article-scorecard"><a href="/assets/scorecards/padel-coach-hiring-scorecard.png" target="_blank" rel="noreferrer"><img src="/assets/scorecards/padel-coach-hiring-scorecard.png" alt="100-point padel coach hiring scorecard with five evaluation categories and observable evidence standards" width="1600" height="2000" loading="lazy" /></a><figcaption>Open the full-resolution scorecard to print or use during a live coaching audition.</figcaption></figure>}</section>)}
            <p className="article-source"><em><BookLinkedText text={article.source} /></em></p>
            {article.slug === 'how-to-hire-a-padel-coach'
              ? <a className="text-link article-academy-link" href="https://padelsmashgroup.com/" target="_blank" rel="noreferrer">Visit Padel Smash Group <ArrowRight size={17} /></a>
              : (article.category === 'Coaching & Player Development' || article.academyUrl) && <a className="text-link article-academy-link" href={article.academyUrl || coachingCertificationUrl} target="_blank" rel="noreferrer">Explore Padel Coach Certification <ArrowRight size={17} /></a>}
            <div className="article-social-links" aria-label="Follow Julian Wortelboer">
              <span>Follow Julian</span>
              <a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram <ArrowRight size={15} /></a>
              <a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube <ArrowRight size={15} /></a>
            </div>
            {promoteBlueprint ? (
              <div className="article-resource-cta">
                <a className="article-resource-cover" href="/contact"><img src="/assets/resources/padel-club-blueprint-cover.webp" alt="The Complete Padel Club Blueprint operating manual for padel club owners" width="1231" height="1600" loading="lazy" /></a>
                <div><p className="article-resource-label">For club owners and operators</p><h2>The Complete Padel Club Blueprint</h2><p className="article-resource-description">A comprehensive operating manual provided to consulting clients—covering pre-opening, launch, daily operations, programming, and scalable growth.</p><a className="button button-light" href="/contact">Work with PSA and Julian <ArrowRight size={18} /></a></div>
              </div>
            ) : (
              <div className="article-resource-cta">
                <a className="article-resource-cover" href={bookUrl} target="_blank" rel="noreferrer"><img src="/assets/resources/mastering-coaching-padel-cover.webp" alt="Mastering the Art of Coaching Padel book by Julian Wortelboer" width="1066" height="1600" loading="lazy" /></a>
                <div><p className="article-resource-label">Take your coaching skills to the next level</p><h2>Master the Art of Coaching Padel</h2><p className="article-resource-description">A global methodology for developing players, empowering coaches and growing the sport.</p><a className="button button-light" href={bookUrl} target="_blank" rel="noreferrer">Purchase the book <ArrowRight size={18} /></a></div>
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && <section className="related-insights"><div className="section-label">Continue reading</div>{related.map((item) => <a href={`/insights/${item.slug}`} key={item.slug}><span>{item.title}</span><ArrowRight size={20} /></a>)}</section>}

      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.webp" alt="Julian Wortelboer" /></div><p>Padel strategy · Operations · Leadership</p>
        <div><a href="/padel-coach-certification">Coach Certification</a><a href="/padel-club-growth-roadmap">Club Roadmap</a><a href="https://ai360.julianwortelboer.com/" target="_blank" rel="noopener noreferrer">Padel AI 360</a><a href="/insights">Insights</a><a href="https://www.linkedin.com/in/julianwortelboer" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a></div>
      </footer>
    </main>
  );
}
