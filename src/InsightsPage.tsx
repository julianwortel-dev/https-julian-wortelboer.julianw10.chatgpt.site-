import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articles } from './articleData';

const categories = [
  {
    id: 'club-strategy',
    number: '01',
    title: <>Club Strategy<br />& Operations</>,
    category: 'Club Strategy & Operations',
    description: 'Practical guidance for investors and operators—from positioning, planning and opening a club to programming, member experience and sustainable performance.',
  },
  {
    id: 'coaching',
    number: '02',
    title: <>Coaching & Player<br />Development</>,
    category: 'Coaching & Player Development',
    description: 'Methods, teaching principles and on-court ideas that help coaches communicate better, develop stronger players and create more meaningful learning experiences.',
  },
  {
    id: 'industry',
    number: '03',
    title: <>Padel Industry<br />& Leadership</>,
    category: 'Padel Industry & Leadership',
    description: 'Perspectives on where padel is going, what the sport needs next and how thoughtful leadership can build stronger clubs, teams and communities.',
  },
];

export default function InsightsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.julianwortelboer.com/insights#collection',
    name: 'Padel Insights by Julian Wortelboer',
    url: 'https://www.julianwortelboer.com/insights',
    inLanguage: 'en-US',
    author: { '@id': 'https://www.julianwortelboer.com/#julian-wortelboer' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: `https://www.julianwortelboer.com/insights/${article.slug}`,
      })),
    },
  };

  return (
    <main className="insights-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a href="/" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.jpg" alt="Julian Wortelboer" /></a>
        <nav aria-label="Insights navigation"><a href="/">Home</a><a href="/#expertise">Expertise</a><a href="/#work">Work</a><a className="nav-cta" href="/contact">Work with Julian <ArrowRight size={16} /></a></nav>
        <a className="mobile-contact contact-back" href="/" aria-label="Back to homepage"><ArrowLeft size={22} /></a>
      </header>

      <section className="insights-intro">
        <p className="eyebrow"><span /> Insights by Julian Wortelboer</p>
        <h1>Ideas to move padel <em>forward.</em></h1>
        <p className="insights-lead">Lessons from decades on the court and inside the business—created for club owners, operators, coaches and people building the future of padel.</p>
        <p className="experience-note">Drawing on more than 25 years of experience running padel and racquet clubs—and creator of the Padel Club Blueprint, a practical manual for operational success.</p>
      </section>

      <section className="insights-list" aria-label="Insight categories">
        {categories.map((category) => (
          <article className="insights-category" id={category.id} key={category.id}>
            <span className="insights-number">{category.number}</span>
            <h2>{category.title}</h2>
            <div className="insights-category-copy">
              <p>{category.description}</p>
              <div className="article-links">
                {articles.filter((article) => article.category === category.category).map((article) => (
                  <a href={`/insights/${article.slug}`} key={article.slug}>
                    <span><small>{article.readTime}</small>{article.title}</span><ArrowRight size={18} />
                  </a>
                ))}
                {!articles.some((article) => article.category === category.category) && <span className="insights-coming">Articles coming soon</span>}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="insights-cta">
        <h2>Have a topic you’d like<br />Julian to explore?</h2>
        <a className="button button-light" href="mailto:julianwortel@gmail.com?subject=Insights%20topic%20suggestion">Suggest a topic <ArrowRight size={18} /></a>
      </section>

      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.png" alt="Julian Wortelboer" /></div><p>Padel strategy · Operations · Leadership</p>
        <div><a href="https://www.linkedin.com/in/julianwortelboer" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a><a href="/">Homepage</a></div>
      </footer>
    </main>
  );
}
