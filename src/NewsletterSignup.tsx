/**
 * Inline Kit form. Kit owns subscriber storage, confirmation and the form's fields.
 * The UID and script URL are public embed details supplied by the site owner.
 * Update fields and checkbox interest tags in the Kit editor, then Save & Publish.
 */
export default function NewsletterSignup() {
  return (
    <section className="newsletter-signup" aria-labelledby="newsletter-signup-heading">
      <div className="newsletter-signup-intro">
        <p className="section-label">A free weekly newsletter by Julian Wortelboer</p>
        <h2 id="newsletter-signup-heading">Better clubs. Better coaches.<br /><em>A stronger padel community.</em></h2>
        <p>After more than 25 years developing players, coaches, and racquet-sports clubs, I believe the best lessons are meant to be shared. Each week, I'll send you practical ideas you can apply on and off the court.</p>
        <p className="newsletter-note">One thoughtful email each week. No spam. Unsubscribe at any time.</p>
      </div>
      <div className="newsletter-kit-form" aria-label="Subscribe to The Padel Playbook">
        <script async data-uid="80d927b05e" src="https://julian-wortelboer.kit.com/80d927b05e/index.js"></script>
        <noscript>Please enable JavaScript to use the newsletter signup form.</noscript>
      </div>
    </section>
  );
}
