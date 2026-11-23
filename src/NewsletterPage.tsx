import NewsletterSignup from './NewsletterSignup';

export default function NewsletterPage() {
  return (
    <main className="newsletter-page">
      <header className="site-header">
        <a href="/" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.webp" alt="Julian Wortelboer" /></a>
        <nav aria-label="Newsletter navigation"><a href="/">Home</a><a href="/insights">Insights</a><a href="/padel-coaching-miami">Coaching</a><a className="nav-cta" href="/contact">Work with Julian</a></nav>
        <a className="mobile-contact" href="/" aria-label="Back to homepage">←</a>
      </header>
      <section className="newsletter-intro">
        <p className="eyebrow"><span /> Weekly insights by Julian Wortelboer</p>
        <h1>The Padel <em>Playbook.</em></h1>
        <p>Ideas from the court and the business of padel, written for club owners, investors, operators, coaches, and players who want to move the sport forward.</p>
      </section>
      <NewsletterSignup />
      <section className="newsletter-bottom">
        <h2>Knowledge grows when we share it.</h2>
        <p>My Insights remain free for everyone. Subscribe to receive a weekly perspective, a practical tip, and a link to the full article—directly from me.</p>
        <a href="/insights">Explore the Insights →</a>
      </section>
      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.webp" alt="Julian Wortelboer" /></div><p>Develop the player. Empower the person. Grow the sport.</p>
        <div><a href="/">Home</a><a href="/insights">Insights</a><a href="/contact">Contact</a></div>
      </footer>
    </main>
  );
}
