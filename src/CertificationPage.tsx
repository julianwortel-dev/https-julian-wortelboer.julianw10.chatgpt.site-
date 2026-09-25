const course = 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation';
export default function CertificationPage() {
  const schema = {'@context':'https://schema.org','@type':'Course',name:'Level 1 Padel Coach Certification',description:'Online padel coach education from Padel Smash Academy, based on Julian Wortelboer’s coaching methodology.',url:course,provider:{'@type':'Organization',name:'Padel Smash Academy',url:'https://www.padelsmashacademy.com/'}};
  return <main className="article-page certification-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <header className="site-header"><a className="brand" href="/">Julian Wortelboer</a><nav aria-label="Primary navigation"><a href="/padel-coaching-miami">Coaching</a><a href="/padel-coach-certification" aria-current="page">Coach Certification</a><a href="/insights">Insights</a><a href="/contact">Contact Julian</a></nav><a className="mobile-contact" href="/contact">Contact</a></header>
    <header className="article-header"><p className="eyebrow">Padel Smash Academy · Coach education</p><h1>Being a good player doesn’t automatically make you a great coach.</h1><p>Develop your ability to teach—not just demonstrate—with Padel Smash Academy’s Level 1 padel coach certification.</p><p><strong>400+ coaches certified worldwide.</strong></p><a className="button" href={course}>Become a Certified Padel Coach →</a></header>
    <article className="article-body certification-body">
      <h2>A methodology built around the player</h2><p>I developed the Padel Smash Academy coaching certification around a simple belief: knowing how to hit a shot is only the beginning. A coach needs to understand the player, explain clearly and turn practice into progress.</p><p>Based on my book, <em>Mastering the Art of Coaching Padel</em>, the certification brings that approach into coach education. Together with PSA co-founder Cesc Caceres, I help coaches connect technical knowledge with the everyday work of teaching people.</p>
      <h2>A sneak peek inside the PSA coaching certification</h2>
      <p>You’ll learn the Padel Smash Academy coaching methodology—not just what to teach, but how to teach it. Every lesson should have a purpose, and every coach should understand the player in front of them.</p>
      <ul>
        <li><strong>The 52 shots of padel and shot transitions:</strong> learn how to teach the shots and the transitions between them, connecting technique with the situations players face on court.</li>
        <li><strong>The 9 panels of padel:</strong> develop your understanding of the nine-panel system and how to teach it to your players.</li>
        <li><strong>The art of precise ball feeding:</strong> work toward mastering the perfect feed, with the control and consistency to make each exercise serve its purpose.</li>
        <li><strong>The physical, mental and tactical game:</strong> understand these connected aspects of padel and how to teach them properly, alongside technical development.</li>
        <li><strong>The identity of a padel coach:</strong> develop your communication, body language and court presence. How you carry yourself and connect with people matters as much as what you know.</li>
        <li><strong>The P.A.D.E.L framework:</strong> learn the framework stage by stage and how to apply it in your coaching.</li>
        <li><strong>Session architecture and lesson planning:</strong> structure your sessions and plan every lesson with purpose, rather than filling time with disconnected drills.</li>
        <li><strong>The 6-level player system and diagnostic assessment:</strong> learn to assess a player’s current level, identify development needs and plan the next steps.</li>
      </ul>
      <p>This is just a sneak peek at what you’ll learn. The full certification goes further, helping you observe, assess, teach and adapt—not simply demonstrate a shot.</p>
      <h2>Build confidence in your coaching</h2><p>The online course includes 11 chapters and 125 lessons, with self-paced access, live Q&A opportunities and a coach community. Explore the full curriculum and current enrollment details on the PSA course page.</p><p>Whether you are starting your coaching journey, bringing experience from another racquet sport or looking for more structure in your lessons, the goal is the same: become more intentional about how you help players learn.</p>
      <h2>The book behind the methodology</h2><div className="certification-book"><img src="/assets/resources/mastering-coaching-padel-cover.webp" width="1066" height="1600" loading="lazy" alt="Mastering the Art of Coaching Padel by Julian Wortelboer" /><div><p>My book connects player development, coach education and the growth of padel. The certification puts that teaching philosophy into a structured learning path.</p><p><a href="https://www.amazon.com/MASTERING-ART-COACHING-PADEL-Methodology-ebook/dp/B0H8R4336Q/">Explore the book →</a></p><p><a href="/insights">Read my coaching insights →</a></p></div></div>
      <h2>Questions before you begin</h2><h3>Is the certification online?</h3><p>Yes. The Level 1 course is online and self-paced. PSA also offers on-site certification options for clubs; contact us to discuss your team.</p><h3>Does a certificate make someone a great coach?</h3><p>A certificate is a step, not the finish line. Great coaching takes practice, observation, feedback and a commitment to keep improving. What matters is how you apply what you learn with real players.</p><h3>Can my club train its coaching team?</h3><p>Yes. <a href="/contact">Talk to me about coach development for your club</a> and the available PSA training options.</p>
      <section aria-labelledby="global-coaching-community">
        <h2 id="global-coaching-community">Different countries. One commitment to better coaching.</h2>
        <p>Without great coaches, padel cannot grow the way it should. Padel Smash Academy is committed to growing padel worldwide by developing the coaches who will teach its next generation of players.</p>
        <p>Our community includes more than 400 certified coaches worldwide—from the USA and India to Indonesia and other parts of Southeast Asia, the Middle East and beyond.</p>
        <p>For me, growing padel means developing coaches who can help people learn, enjoy the game and keep coming back. Wherever you coach, that responsibility is the same. Bring your experience, learn from others and help us raise the standard of coaching.</p>
        <a className="button" href={course}>Join Our Global Coaching Community →</a>
        <p>Start with the Padel Smash Academy coaching certification.</p>
      </section>
      <p><a href="/padel-coaching-miami">Explore coaching with Julian</a> · <a href="/">Back to home</a></p>
    </article>
  </main>;
}
