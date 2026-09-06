import { ArrowDownRight, ArrowRight, Check, Menu } from 'lucide-react';
import type { CSSProperties } from 'react';

const projects = [
  { name: 'ICON Padel Club', place: 'Miami, Florida', number: '01', note: 'Luxury club operations & development', url: 'https://iconpadelclub.com/' },
  { name: 'Unico Club', place: 'Weston, Florida', number: '02', note: 'Club Consultant & Developer', url: 'https://www.unico.club/' },
  { name: 'Ultra Padel Club', place: 'Miami, Florida', number: '03', note: 'Chief Padel Officer · Club & Program Developer', url: 'https://ultrapadelclub.com/' },
  { name: 'Park Padel', place: 'San Francisco, California', number: '04', note: 'Club strategy & operating model', url: 'https://parkpadel.com/' },
  { name: 'Wynwood Padel Club', place: 'Miami, Florida', number: '05', note: 'Program Director & Academy Developer', url: '#contact' },
  { name: 'Padel Club Maracaibo', place: 'Maracaibo, Venezuela', number: '06', note: 'Club Consultant & Program Developer', url: 'https://www.padelclubmcbo.com/' },
  { name: 'The Ocean Club', place: 'Key Biscayne, Florida', number: '07', note: 'Director of Racquet Sports', url: 'https://oceanclubkeybiscayne.org/home' },
];

const services = [
  ['01', 'Club strategy & development', 'From market positioning and feasibility to facility planning and launch strategy.'],
  ['02', 'Operations & programming', 'Build the systems, programs and member experience that make a club perform.'],
  ['03', 'Leadership & coach development', 'Recruit, train and develop the people who turn a facility into a community.'],
];

const carouselPhotos = [
  ['/assets/carousel/coaching-wide.jpg', 'Julian coaching on a padel court'],
  ['/assets/carousel/julian-pointing.jpg', 'Julian Wortelboer with a padel racket'],
  ['/assets/carousel/ball-on-racket.jpg', 'A padel ball balanced on Julian’s racket'],
  ['/assets/carousel/action-volley.jpg', 'Julian demonstrating a controlled volley'],
  ['/assets/carousel/backhand.jpg', 'Julian preparing a two-handed backhand'],
  ['/assets/carousel/forehand.jpg', 'Julian moving into a forehand shot'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.jpg" alt="Julian Wortelboer" /></a>
        <nav aria-label="Primary navigation">
          <a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#about">About</a>
          <a className="nav-cta" href="#contact">Work with Julian <ArrowDownRight size={16} /></a>
        </nav>
        <a className="mobile-contact" href="#contact" aria-label="Contact Julian"><Menu size={22} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Padel strategy · Operations · Leadership</p>
          <h1>Building the next generation of <em>iconic</em> padel clubs and coaches.</h1>
          <p className="hero-intro">I help investors and operators turn ambitious padel concepts into distinctive, profitable clubs—built to perform and succeed from day one.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <ArrowRight size={18} /></a>
            <a className="text-link" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="hero-visual">
            <video autoPlay muted loop playsInline preload="metadata" poster="/assets/julian-hero.jpg" aria-label="Julian Wortelboer at Ultra Padel">
              <source src="/assets/ultra-padel-hero.mp4" type="video/mp4" />
            </video>
          <div className="court-line" aria-hidden="true" />
          <div className="hero-note"><strong>25+</strong><span>Years shaping<br />racquet sports</span></div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 05</div>
      </section>

      <section className="proof" aria-label="Experience highlights">
        <p>Trusted experience across</p>
        <div><strong>Club development</strong><strong>High-performance coaching</strong><strong>Operations</strong><strong>Global media</strong></div>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-label">How I create value</div>
        <div className="section-heading">
          <h2>Build more than a club.<br /><em>Build an experience players return to.</em></h2>
          <p>Great padel clubs succeed at the intersection of smart strategy, disciplined operations and magnetic community. I help align all three.</p>
        </div>
        <div className="service-grid">
          {services.map(([num, title, body]) => (
            <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p><a href="#contact">Learn more <ArrowRight size={17} /></a></article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-top">
          <div className="section-label light">Selected work</div>
          <h2>A track record built<br />on the court and <em>beyond it.</em></h2>
          <p>From early-stage concepts to category-defining destinations, every engagement starts with a clear commercial vision and ends with an experience players want to return to.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel={project.url.startsWith('http') ? 'noreferrer' : undefined} className="project" key={project.name}><span>{project.number}</span><div><h3>{project.name}</h3><p>{project.note}</p></div><p>{project.place}</p><ArrowDownRight size={26} /></a>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-photo">
          <img src="/assets/julian-portrait.jpg" alt="Julian Wortelboer demonstrating padel technique with a player" />
          <div className="photo-tag">Master coach<br />Club operator<br />Global advisor</div>
        </div>
        <div className="about-copy">
          <div className="section-label">Meet Julian</div><h2>Performance, with <em>purpose.</em></h2>
          <p className="lead">Julian Wortelboer is a padel club strategist, operator and Master Coach helping shape the professional future of the sport.</p>
          <p>His perspective combines decades in elite racquet sports with hands-on experience in club development, financial planning, programming, brand building and team leadership.</p>
          <blockquote>“Develop the club. Empower the coach. Grow padel.”</blockquote>
          <div className="checks">
            <span><Check size={16} /> Club development & operations</span><span><Check size={16} /> Padel Master Coach</span>
            <span><Check size={16} /> Author & educator</span><span><Check size={16} /> Padel Smash co-founder</span>
          </div>
        </div>
      </section>

      <section className="media">
        <div className="media-image photo-carousel" aria-label="Julian Wortelboer padel photo gallery">
          {carouselPhotos.map(([src, alt], index) => <img key={src} src={src} alt={alt} style={{ '--slide': index } as CSSProperties} />)}
          <div className="carousel-count" aria-hidden="true">01 — 06</div>
        </div>
        <div className="media-copy">
          <div className="section-label light">Ideas that move the sport</div><h2>Teaching at <em>global scale.</em></h2>
          <p>Through Padel Smash Academy, books, certification and media, Julian shares the frameworks that help players, coaches and operators raise their game. Certifying padel coaches worldwide is one of the most important parts of this work.</p>
          <div className="media-links"><a href="https://www.padelsmashacademy.com/" target="_blank" rel="noreferrer">Padel Smash Academy <ArrowDownRight size={19} /></a><a href="https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation" target="_blank" rel="noreferrer">The Leading Padel Coaching Certification Worldwide — Register <ArrowDownRight size={19} /></a><a href="https://www.amazon.com/MASTERING-ART-COACHING-PADEL-Methodology-ebook/dp/B0H8R4336Q/" target="_blank" rel="noreferrer">Mastering the Art of Coaching Padel <ArrowDownRight size={19} /></a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">Padel Smash TV — #1 Padel Channel Worldwide · 1M+ Subscribers <ArrowDownRight size={19} /></a></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> Miami · Available for select projects worldwide</p>
        <h2>Ready to build a club<br />people talk about?</h2>
        <p>Whether you are validating an idea, preparing to launch or improving an existing operation, let’s discuss where I can create the most value.</p>
        <a className="button button-light" href="https://www.julianwortelboer.com/contact" target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={19} /></a>
      </section>

      <footer>
        <div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.png" alt="Julian Wortelboer" /></div><p>Padel strategy · Operations · Leadership</p>
        <div><a href="https://www.linkedin.com/in/julianwortelboer" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
