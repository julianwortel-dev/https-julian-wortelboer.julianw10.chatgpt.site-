import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header">
        <a href="/" className="brand" aria-label="Julian Wortelboer home">
          <img className="wordmark" src="/assets/julian-wordmark.jpg" alt="Julian Wortelboer" />
        </a>
        <nav aria-label="Contact navigation">
          <a className="contact-back" href="/"><ArrowLeft size={17} /> Back to homepage</a>
        </nav>
        <a className="mobile-contact contact-back" href="/" aria-label="Back to homepage"><ArrowLeft size={22} /></a>
      </header>

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h1>Let’s build something <em>exceptional.</em></h1>
          <p className="contact-lead">Have a padel club, program or coaching project in mind? Tell me where you are today and what you want to create.</p>
          <div className="contact-card">
            <p className="contact-card-label">Email Julian directly</p>
            <a className="contact-email" href="mailto:julianwortel@gmail.com?subject=Padel%20club%20project%20inquiry">
              <Mail size={24} /> julianwortel@gmail.com <ArrowRight size={22} />
            </a>
            <p>I welcome select consulting, development and coach education opportunities worldwide.</p>
          </div>
        </div>
        <div className="contact-visual">
          <img src="/assets/carousel/julian-pointing.jpg" alt="Julian Wortelboer coaching on a padel court" />
          <div className="contact-location">Miami · Available worldwide</div>
        </div>
      </section>

      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.png" alt="Julian Wortelboer" /></div>
        <p>Padel strategy · Operations · Leadership</p>
        <div><a href="https://www.linkedin.com/in/julianwortelboer" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a><a href="/">Homepage</a></div>
      </footer>
    </main>
  );
}
