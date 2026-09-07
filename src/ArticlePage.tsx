import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articleBySlug, articles } from './articleData';

const bookUrl = 'https://www.amazon.com/MASTERING-ART-COACHING-PADEL-Methodology-ebook/dp/B0H8R4336Q/';
const bookTitle = 'Mastering the Art of Coaching Padel';
const coachingCertificationUrl = 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation';

function BookLinkedText({ text }: { text: string }) {
  const parts = text.split(bookTitle);
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <a className="inline-book-link" href={bookUrl} target="_blank" rel="noreferrer">{bookTitle}</a>}</span>)}</>;
}

export default function ArticlePage() {
  const slug = window.location.pathname.split('/').filter(Boolean).pop() || '';
  const article = articleBySlug[slug];

  if (!article) return <main className="article-not-found"><h1>Insight not found.</h1><a href="/insights">Return to Insights</a></main>;

  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);
  const categoryAnchor = article.category === 'Club Strategy & Operations' ? 'club-strategy' : article.category === 'Coaching & Player Development' ? 'coaching' : 'industry';
  const promoteBlueprint = article.category === 'Club Strategy & Operations';
  const articleUrl = `https://www.julianwortelboer.com/insights/${article.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.intro[0],
    articleSection: article.category,
    datePublished: '2026-09-06',
    dateModified: '2026-09-06',
    inLanguage: 'en-US',
    image: 'https://www.julianwortelboer.com/assets/julian-hero.jpg',
    mainEntityOfPage: articleUrl,
    isPartOf: { '@id': 'https://www.julianwortelboer.com/insights#collection' },
    author: article.author
      ? article.author.split(' & ').map((name) => ({ '@type': 'Person', name }))
      : { '@id': 'https://www.julianwortelboer.com/#julian-wortelboer' },
    publisher: { '@id': 'https://www.julianwortelboer.com/#julian-wortelboer' },
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a href="/" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.jpg" alt="Julian Wortelboer" /></a>
        <nav aria-label="Article navigation"><a href="/insights"><ArrowLeft size={16} /> All insights</a><a className="nav-cta" href="/contact">Work with Julian <ArrowRight size={16} /></a></nav>
        <a className="mobile-contact contact-back" href="/insights" aria-label="Back to Insights"><ArrowLeft size={22} /></a>
      </header>

      <article>
        <header className="article-header">
          <a className="article-category" href={`/insights#${categoryAnchor}`}>{article.category}</a>
          <h1>{article.title}</h1>
          <div className="article-meta"><span>By {article.author || 'Julian Wortelboer'}</span><time dateTime="2026-09-06">{article.date}</time><span>{article.readTime}</span></div>
        </header>

        <div className="article-layout">
          <aside><p>Insights from</p><a className="aside-book-link" href={bookUrl} target="_blank" rel="noreferrer"><strong>Mastering the Art<br />of Coaching Padel</strong><ArrowRight size={16} /></a><p className="author-experience">Julian draws on more than 25 years of experience running padel and racquet clubs. He also developed the Padel Club Blueprint, a practical manual for operational success.</p></aside>
          <div className="article-body">
            <div className="article-intro">{article.intro.map((paragraph) => <p key={paragraph}><BookLinkedText text={paragraph} /></p>)}</div>
            {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
            <p className="article-source"><em><BookLinkedText text={article.source} /></em></p>
            {(article.category === 'Coaching & Player Development' || article.academyUrl) && <a className="text-link article-academy-link" href={article.academyUrl || coachingCertificationUrl} target="_blank" rel="noreferrer">Explore Padel Coach Certification <ArrowRight size={17} /></a>}
            <div className="article-social-links" aria-label="Follow Julian Wortelboer">
              <span>Follow Julian</span>
              <a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram <ArrowRight size={15} /></a>
              <a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube <ArrowRight size={15} /></a>
            </div>
            {promoteBlueprint ? (
              <div className="article-resource-cta">
                <a className="article-resource-cover" href="/contact"><img src="/assets/resources/padel-club-blueprint-cover.jpg" alt="The Complete Padel Club Blueprint operating manual for padel club owners" width="1231" height="1600" loading="lazy" /></a>
                <div><p className="article-resource-label">For club owners and operators</p><h2>The Complete Padel Club Blueprint</h2><p className="article-resource-description">A comprehensive operating manual provided to consulting clients—covering pre-opening, launch, daily operations, programming, and scalable growth.</p><a className="button button-light" href="/contact">Work with PSA and Julian <ArrowRight size={18} /></a></div>
              </div>
            ) : (
              <div className="article-resource-cta">
                <a className="article-resource-cover" href={bookUrl} target="_blank" rel="noreferrer"><img src="/assets/resources/mastering-coaching-padel-cover.jpg" alt="Mastering the Art of Coaching Padel book by Julian Wortelboer" width="1066" height="1600" loading="lazy" /></a>
                <div><p className="article-resource-label">Take your coaching skills to the next level</p><h2>Master the Art of Coaching Padel</h2><p className="article-resource-description">A global methodology for developing players, empowering coaches and growing the sport.</p><a className="button button-light" href={bookUrl} target="_blank" rel="noreferrer">Purchase the book <ArrowRight size={18} /></a></div>
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && <section className="related-insights"><div className="section-label">Continue reading</div>{related.map((item) => <a href={`/insights/${item.slug}`} key={item.slug}><span>{item.title}</span><ArrowRight size={20} /></a>)}</section>}

      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.png" alt="Julian Wortelboer" /></div><p>Padel strategy · Operations · Leadership</p>
        <div><a href="/insights">Insights</a><a href="https://www.linkedin.com/in/julianwortelboer" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a></div>
      </footer>
    </main>
  );
}
