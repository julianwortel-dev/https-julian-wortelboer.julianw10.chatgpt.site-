import { ArrowDownRight, ArrowLeft, ArrowRight, Check } from 'lucide-react';

const whatsappUrl = 'https://wa.me/13054311700?text=Hi%20Julian%2C%20I%27m%20interested%20in%20a%20padel%20coaching%20session.';
const bookUrl = 'https://www.amazon.com/MASTERING-ART-COACHING-PADEL-Methodology-ebook/dp/B0H8R4336Q/';
const academyUrl = 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation';

const focusAreas = [
  'Court positioning and movement', 'Defense and use of the glass', 'Transition from defense to attack',
  'Net positioning and volleys', 'Bandeja, víbora and overhead development', 'Lob selection and execution',
  'Point construction and shot selection', 'Partner communication', 'Match situations and competitive patterns',
  'Mental discipline and confidence',
];

const playerTypes = [
  ['Beginner players', 'Build the right foundations before bad habits become permanent.'],
  ['Intermediate players', 'Move beyond returning the ball and understand positioning, transitions and point construction.'],
  ['Advanced players', 'Refine tactical patterns, shot selection, movement and decision-making.'],
  ['Competitive players', 'Train specifically for match situations, pressure, opponents and competition.'],
];

export default function CoachingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.julianwortelboer.com/padel-coaching-miami#service',
        name: 'Private Padel Coaching in Miami and Across the USA',
        serviceType: 'Padel coaching, private lessons, clinics, camps and club training',
        description: 'Technical, tactical and competitive padel coaching with Master Coach Julian Wortelboer in Miami, with clinics, camps and club training available across the USA.',
        url: 'https://www.julianwortelboer.com/padel-coaching-miami',
        areaServed: [{ '@type': 'City', name: 'Miami' }, { '@type': 'Country', name: 'United States' }],
        provider: { '@id': 'https://www.julianwortelboer.com/#julian-wortelboer' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.julianwortelboer.com/' },
          { '@type': 'ListItem', position: 2, name: 'Padel Coaching Miami', item: 'https://www.julianwortelboer.com/padel-coaching-miami' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Who is padel coaching with Julian Wortelboer for?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching is adapted for beginner, intermediate, advanced and competitive players who want to understand the game and improve.' } },
          { '@type': 'Question', name: 'Where is Julian Wortelboer available for padel coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Julian offers private padel coaching in Miami and is available for select clinics, camps and club training programs across the United States.' } },
          { '@type': 'Question', name: 'What makes Julian Wortelboer’s padel coaching methodology different?', acceptedAnswer: { '@type': 'Answer', text: 'The methodology develops technical, physical and tactical fundamentals through the 52 Shots of Padel, shot transitions, positioning, decision-making and practical match situations.' } },
        ],
      },
    ],
  };

  return <main className="coaching-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="site-header">
      <a href="/" className="brand" aria-label="Julian Wortelboer home"><img className="wordmark" src="/assets/julian-wordmark.webp" alt="Julian Wortelboer" /></a>
      <nav aria-label="Coaching navigation"><a href="/"><ArrowLeft size={16} /> Home</a><a href="#methodology">Methodology</a><a href="#coaching-options">Coaching options</a><a href="/insights#coaching">Insights</a><a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Request a session <ArrowDownRight size={16} /></a></nav>
      <a className="mobile-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Request a padel coaching session"><ArrowRight size={22} /></a>
    </header>

    <section className="coaching-hero">
      <div className="coaching-hero-copy">
        <p className="eyebrow"><span /> Miami · Coaching across the USA</p>
        <h1>Padel coaching built around the <em>player.</em></h1>
        <p className="coaching-lead">Private padel coaching with Julian Wortelboer, Padel Master Coach and creator of the Padel Smash Academy coaching methodology.</p>
        <p>If you are serious about improving your padel, the goal should be more than hitting more balls. It should be understanding why you win points, why you lose them, where you should be on the court and how to make better decisions under pressure.</p>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Request a coaching session <ArrowRight size={18} /></a>
      </div>
      <div className="coaching-hero-image"><img src="/assets/carousel/coaching-hero-hd.jpg" fetchPriority="high" alt="Julian Wortelboer providing private padel coaching in Miami Florida" /><div className="coaching-stat"><strong>25+</strong><span>Years developing<br />players and coaches</span></div></div>
    </section>

    <section className="section coaching-philosophy" id="methodology">
      <div className="section-label">The coaching philosophy</div>
      <div className="coaching-statement"><h2>Technique gives you options.<br /><em>Tactics tell you which option to use.</em></h2><p>Padel is a game of positioning, percentages, patience, anticipation and teamwork. My coaching integrates technical, physical and tactical development instead of teaching shots in isolation. You should leave the court understanding not only how to execute something, but when, where and why to use it.</p></div>
      <div className="coaching-method-grid">
        <article><span>01</span><h3>Observe</h3><p>Before making corrections, I study movement, positioning, technique, shot selection and what happens when the point becomes uncomfortable.</p></article>
        <article><span>02</span><h3>Diagnose</h3><p>A technical error may begin with positioning, movement or a poor decision. We identify the real cause before trying to fix the symptom.</p></article>
        <article><span>03</span><h3>Apply</h3><p>We test the correction in realistic point patterns so it transfers from the lesson into the match.</p></article>
      </div>
    </section>

    <section className="coaching-system">
      <div className="coaching-system-copy">
        <p className="section-label light">The Padel Smash Academy difference</p>
        <h2>The 52 Shots of Padel.<br /><em>A complete development system.</em></h2>
        <p>I am the co-founder of Padel Smash Academy and the creator of its coaching methodology—the backbone of a global coaching platform with more than 400 certified coaches worldwide.</p>
        <p>Our methodology is built around the 52 Shots of Padel: how to teach each shot correctly, how shots transition into one another, and how technical, physical and tactical fundamentals work together. Without those three foundations, a player cannot develop the game properly.</p>
        <div className="coaching-system-links"><a href={academyUrl} target="_blank" rel="noreferrer">Explore coach certification <ArrowRight size={18} /></a><a href={bookUrl} target="_blank" rel="noreferrer">Discover the methodology in my book <ArrowRight size={18} /></a></div>
      </div>
      <a className="coaching-book" href={bookUrl} target="_blank" rel="noreferrer" aria-label="Purchase Mastering the Art of Coaching Padel"><img src="/assets/resources/mastering-coaching-padel-cover.webp" alt="Mastering the Art of Coaching Padel by Julian Wortelboer" /></a>
    </section>

    <section className="section coaching-options" id="coaching-options">
      <div className="section-label">Private coaching in Miami</div>
      <div className="section-heading"><h2>Make your game<br /><em>work better.</em></h2><p>No two players need the same lesson. Sessions are shaped around your level, objectives and the changes that can make the biggest difference.</p></div>
      <div className="coaching-focus-grid">{focusAreas.map((area) => <div key={area}><Check size={17} /><span>{area}</span></div>)}</div>
      <div className="coaching-format-grid">
        <article><span>01</span><h3>Individual player development</h3><p>Focused work on technique, movement, positioning, weaknesses and the patterns shaping your game.</p></article>
        <article><span>02</span><h3>Tactical and match coaching</h3><p>Learn to construct points, recognize situations earlier and make better decisions with your partner.</p></article>
        <article><span>03</span><h3>Advanced and competitive training</h3><p>Higher-intensity work built around pressure, competitive execution and realistic match situations.</p></article>
        <article><span>04</span><h3>Small groups, clinics and camps</h3><p>Train tactical understanding, communication and live-play patterns in Miami or through select programs across the USA.</p></article>
      </div>
    </section>

    <section className="coaching-levels">
      <div><p className="section-label light">Who this coaching is for</p><h2>What matters is the willingness to <em>learn.</em></h2></div>
      <div>{playerTypes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="section coaching-eye">
      <div className="coaching-eye-image"><img src="/assets/julian-portrait.webp" alt="Julian Wortelboer demonstrating padel technique with a player" /></div>
      <div><p className="section-label">The Coach’s Eye</p><h2>Observe before you <em>correct.</em></h2><p>One of the biggest mistakes in coaching is correcting too quickly. Sometimes the technical mistake you see is being created by poor positioning. Sometimes a positioning problem comes from bad shot selection. Sometimes the player does not need another technical explanation—they need to understand the situation.</p><blockquote>“Good coaching is not about how much the coach knows. It is about how much the player learns.”</blockquote><a className="text-link" href="/insights/the-coachs-eye-observe-before-you-correct">Read The Coach’s Eye <ArrowRight size={17} /></a></div>
    </section>

    <section className="coaching-cta">
      <p className="eyebrow"><span /> Miami · Available for select programs across the USA</p>
      <h2>Ready to understand your game at a deeper level?</h2>
      <p>Tell me your playing level, how long you have played, what you want to improve, and whether your goal is recreational, competitive or tournament play.</p>
      <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Request a coaching session on WhatsApp <ArrowRight size={19} /></a>
    </section>

    <footer><div className="brand footer-wordmark"><img className="wordmark" src="/assets/julian-wordmark-transparent.webp" alt="Julian Wortelboer" /></div><p>Padel Master Coach · Miami · USA</p><div><a href="/">Home</a><a href="/insights">Insights</a><a href="https://www.instagram.com/julianwortelboer/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@padelsmashtv" target="_blank" rel="noreferrer">YouTube</a></div></footer>
  </main>;
}
