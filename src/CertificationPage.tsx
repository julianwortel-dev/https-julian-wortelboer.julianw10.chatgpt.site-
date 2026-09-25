const course = 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation';
export default function CertificationPage() {
  const pageUrl = 'https://www.julianwortelboer.com/padel-coach-certification';
  const academyId = 'https://www.padelsmashacademy.com/#organization';
  const personId = 'https://www.julianwortelboer.com/#julian-wortelboer';
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':pageUrl+'#webpage',url:pageUrl,name:'Padel Coach Certification | Padel Smash Academy',description:'Explore Padel Smash Academy coaching certification and Julian Wortelboer’s 25+ years of coaching and club experience.',inLanguage:'en',mainEntity:{'@id':course+'#course'},author:{'@id':personId},about:{'@id':academyId},breadcrumb:{'@id':pageUrl+'#breadcrumb'}},
    {'@type':'Organization','@id':academyId,name:'Padel Smash Academy',alternateName:'PSA',url:'https://www.padelsmashacademy.com/',founder:[{'@id':personId},{'@type':'Person',name:'Cesc Caceres'}]},
    {'@type':'Person','@id':personId,name:'Julian Wortelboer',url:'https://www.julianwortelboer.com/about-julian-wortelboer',jobTitle:'Padel Master Coach'},
    {'@type':'Course','@id':course+'#course',name:'Level 1 Padel Coach Certification',description:'Online, self-paced padel coach education from Padel Smash Academy, led by Julian Wortelboer and Cesc Caceres.',url:course,provider:{'@id':academyId},inLanguage:'en',educationalLevel:'Level 1'},
    {'@type':'BreadcrumbList','@id':pageUrl+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.julianwortelboer.com/'},{'@type':'ListItem',position:2,name:'Padel Coach Certification',item:pageUrl}]}
  ]};
  return <main className="article-page certification-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <header className="site-header"><a className="brand" href="/">Julian Wortelboer</a><nav aria-label="Primary navigation"><a href="/padel-coaching-miami">Coaching</a><a href="/padel-coach-certification" aria-current="page">Coach Certification</a><a href="/insights">Insights</a><a href="/contact">Contact Julian</a></nav><a className="mobile-contact" href="/contact">Contact</a></header>
    <header className="article-header"><p className="eyebrow">Padel Smash Academy · Coach education</p><h1>Being a good player doesn’t automatically make you a great coach.</h1><p>Develop your ability to teach—not just demonstrate—with Padel Smash Academy’s Level 1 padel coach certification.</p><p><strong>400+ coaches certified worldwide.</strong></p><a className="button" href={course}>Become a Certified Padel Coach →</a></header>
    <article className="article-body certification-body">
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / Padel Coach Certification</nav>
      <h2>Padel Smash Academy coach certification: a methodology built around the player</h2>
      <p><a href="https://www.padelsmashacademy.com/">Padel Smash Academy (PSA)</a> provides padel coach education and certification. Co-founded by Julian Wortelboer and Cesc Caceres, PSA has certified more than 400 coaches worldwide. The online Level 1 certification introduces coaches to its player-centered teaching approach.</p>
      <p>We developed the Padel Smash Academy coaching certification around a simple belief: knowing how to hit a shot is only the beginning. A coach needs to understand the player, explain clearly and turn practice into progress.</p>
      <p>The methodology draws on my book, <em>Mastering the Art of Coaching Padel</em>, and more than 25 years of hands-on experience coaching players, developing coaches, running padel academies and managing clubs. It brings together what I have learned on court and inside the operation—not just theory, but the everyday work of helping players, coaches and programs succeed.</p>
      <p>Together with PSA co-founder Cesc Caceres, we have brought that experience into a practical coaching formula: teach padel with purpose, develop the player and help grow the sport worldwide.</p>
      <h2>A coaching pathway that grows with you</h2>
      <p>The Padel Smash Academy methodology is organized into different levels. It starts with the foundations of teaching padel and extends into the business of coaching, academy leadership and club operations.</p>
      <p>Across those levels, coaches learn how to:</p>
      <ul>
        <li><strong>Run a padel academy:</strong> connect coaching quality, player development and the day-to-day organization of an academy.</li>
        <li><strong>Understand the business of padel:</strong> develop the knowledge needed to contribute to running a club, beyond delivering lessons.</li>
        <li><strong>Market themselves and their club:</strong> communicate their value as a coach and help players discover what the club offers.</li>
        <li><strong>Create new padel drills:</strong> design purposeful exercises around the needs of the players, rather than repeat drills without a clear objective.</li>
        <li><strong>Build successful padel programs:</strong> connect the right coaching, structure and player experience to create programs people want to join and return to.</li>
      </ul>
      <p>And much more. The aim is to develop coaches who can teach well, lead programs and contribute to the growth of their academy, their club and padel itself. The linked Level 1 course is the starting point; check the PSA course details or <a href="/contact">contact us about the different levels</a> to find the right next step.</p>
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
