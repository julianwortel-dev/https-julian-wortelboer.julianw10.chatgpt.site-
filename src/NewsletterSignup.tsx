const interests = [
  { id: 'padel', label: 'Padel News & Community' },
  { id: 'management', label: 'Padel Club Management' },
  { id: 'investment', label: 'Padel Club Development & Investment' },
  { id: 'coaching_tips', label: 'Padel Coaching Tips' },
  { id: 'certification', label: 'Padel Coach Education & Certification' },
  { id: 'player', label: 'Player Improvement' },
  { id: 'ai', label: 'AI & Technology in Padel Clubs' },
];

export default function NewsletterSignup() {
  return (
    <section className="newsletter-signup" aria-labelledby="newsletter-signup-heading">
      <div className="newsletter-signup-intro">
        <p className="section-label">A free weekly newsletter by Julian Wortelboer</p>
        <h2 id="newsletter-signup-heading">Better clubs. Better coaches.<br /><em>A stronger padel community.</em></h2>
        <p>After more than 25 years developing players, coaches, and racquet-sports clubs, I believe the best lessons are meant to be shared. Each week, I'll send you practical ideas you can apply on and off the court.</p>
        <p className="newsletter-note">One thoughtful email each week. No spam. Unsubscribe at any time.</p>
      </div>
      <form className="newsletter-form" action="/api/newsletter-subscribe" method="post">
        <div className="newsletter-fields">
          <label>Full name <input type="text" name="full_name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Full name" /></label>
          <label>Email address <input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
          <label>City <input type="text" name="city" autoComplete="address-level2" required maxLength={100} placeholder="City" /></label>
          <label>State / Province <span className="newsletter-optional">(optional)</span><input type="text" name="state_province" autoComplete="address-level1" maxLength={100} placeholder="State or province" /></label>
          <label className="newsletter-country">Country <input type="text" name="country" autoComplete="country-name" required maxLength={100} placeholder="Country" /></label>
        </div>
        <fieldset className="newsletter-interests">
          <legend>Topics of interest <span>(select one or more)</span></legend>
          <div className="newsletter-topic-grid">
            {interests.map(({id,label}) =>
              <label key={id}><input type="checkbox" name={'interest_' + id} value="yes" /><span>{label}</span></label>
            )}
          </div>
        </fieldset>
        <label className="newsletter-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to receive the weekly Padel Playbook newsletter by email. I understand that I can unsubscribe at any time.</span></label>
        <div className="newsletter-honeypot" aria-hidden="true"><label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <button className="button button-primary" type="submit">Join The Padel Playbook →</button>
        <p className="newsletter-privacy">Your information is used to deliver the newsletter and understand our international readership. We will not sell your information.</p>
      </form>
    </section>
  );
}
