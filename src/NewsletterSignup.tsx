const interests = [
  ['padel', 'Padel News & Community'],
  ['management', 'Padel Club Management'],
  ['investment', 'Padel Club Development & Investment'],
  ['coaching_tips', 'Padel Coaching Tips'],
  ['certification', 'Padel Coach Education & Certification'],
  ['player', 'Player Improvement'],
  ['ai', 'AI & Technology in Padel Clubs'],
] as const;

export default function NewsletterSignup() {
  return (
    <section className="newsletter-signup" aria-labelledby="newsletter-signup-heading">
      <div className="newsletter-signup-intro">
        <p className="section-label">A free weekly newsletter by Julian Wortelboer</p>
        <h2 id="newsletter-signup-heading">Better clubs. Better coaches.<br /><em>A stronger padel community.</em></h2>
        <p>After more than 25 years developing players, coaches, and racquet-sports clubs, I believe the best lessons are meant to be shared. Each week, I'll send you practical ideas you can apply on and off the court.</p>
        <p className="newsletter-note">One practical email each week. No spam. Unsubscribe at any time.</p>
      </div>
      <form className="newsletter-form" method="post" action="/api/newsletter-subscribe" aria-label="Subscribe to The Padel Playbook">
        <div className="newsletter-fields">
          <label>Full name <input name="full_name" type="text" autoComplete="name" maxLength={120} minLength={2} required placeholder="Your full name" /></label>
          <label>Email address <input name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" /></label>
          <label>City <input name="city" type="text" autoComplete="address-level2" maxLength={100} required placeholder="City" /></label>
          <label>State / Province <span className="newsletter-optional">(optional)</span><input name="state_province" type="text" autoComplete="address-level1" maxLength={100} placeholder="State / Province" /></label>
          <label className="newsletter-country">Country <input name="country" type="text" autoComplete="country-name" maxLength={100} required placeholder="Country" /></label>
        </div>
        <fieldset className="newsletter-interests">
          <legend>What topics interest you? <span>(select as many as you like)</span></legend>
          <div className="newsletter-topic-grid">
            {interests.map(([id, title]) => <label key={id}><input type="checkbox" name={'interest_' + id} value="yes" /><span>{title}</span></label>)}
          </div>
        </fieldset>
        <label className="newsletter-consent"><input type="checkbox" name="consent" value="yes" required /> <span>Yes, send me The Padel Playbook weekly newsletter. I understand I can unsubscribe at any time.</span></label>
        <div className="newsletter-honeypot" aria-hidden="true"><label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <button className="button button-primary" type="submit">Join The Padel Playbook →</button>
        <p className="newsletter-privacy">We use your information to send the newsletter and understand our readership. We do not sell subscriber information.</p>
      </form>
    </section>
  );
}
