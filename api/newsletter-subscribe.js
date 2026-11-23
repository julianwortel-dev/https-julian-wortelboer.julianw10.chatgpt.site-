// Vercel server-side endpoint. Never place Kit API credentials in client code.
const TOPICS = Object.freeze({
  padel: 'Padel News & Community',
  management: 'Padel Club Management',
  investment: 'Padel Club Development & Investment',
  coaching_tips: 'Padel Coaching Tips',
  certification: 'Padel Coach Education & Certification',
  player: 'Player Improvement',
  ai: 'AI & Technology in Padel Clubs',
});
const clean = value => typeof value === 'string' ? value.trim() : '';
function resultPage(title, message, retry = true) {
  // All output is authored static text; never interpolate submitted information.
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | The Padel Playbook</title><style>body{font:17px/1.6 Arial,sans-serif;background:#f5f2eb;color:#171717;padding:8vh 20px}main{background:white;border-top:6px solid #ffc638;max-width:620px;margin:auto;padding:40px}h1{font-size:clamp(32px,5vw,50px);line-height:1.08}a{display:inline-block;background:#171717;color:#fff;padding:12px 20px;text-decoration:none}</style></head><body><main><p>THE PADEL PLAYBOOK</p><h1>' + title + '</h1><p>' + message + '</p><a href="/newsletter">' + (retry ? 'Return to signup' : 'Back to newsletter') + '</a></main></body></html>';
}
const keyHeaders = key => ({ 'X-Kit-Api-Key': key, 'Content-Type': 'application/json', Accept: 'application/json' });
async function kitRequest(path, key, payload) {
  const response = await fetch('https://api.kit.com/v4' + path, {
    method: 'POST',
    headers: keyHeaders(key),
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(9000),
  });
  if (!response.ok) throw new Error('Kit endpoint ' + path.replace(/\/\d+/g, '/:id') + ' failed with HTTP ' + response.status);
  return response.json();
}
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') return res.status(405).send(resultPage('Use the signup form', 'Please sign up through our newsletter page.'));
  // Require browser submissions from this website. An Origin header is not a substitute for rate limiting.
  const origin = clean(req.headers.origin);
  const allowed = new Set(['https://www.julianwortelboer.com', 'https://julianwortelboer.com']);
  // Preview origins may be explicitly configured in Vercel; do not allow arbitrary origins.
  if (process.env.NEWSLETTER_PREVIEW_ORIGIN) allowed.add(process.env.NEWSLETTER_PREVIEW_ORIGIN);
  if (origin && !allowed.has(origin)) return res.status(403).send(resultPage('Unable to subscribe', 'Please use the newsletter page on our website.'));
  let body = req.body;
  if (typeof body === 'string') body = Object.fromEntries(new URLSearchParams(body));
  if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};
  if (clean(body.website)) return res.status(200).send(resultPage('Thank you', 'Please check your inbox.', false));
  const fullName = clean(body.full_name);
  const email = clean(body.email).toLowerCase();
  const city = clean(body.city);
  const region = clean(body.state_province);
  const country = clean(body.country);
  const selected = Object.entries(TOPICS).filter(([id]) => body['interest_' + id] === 'yes');
  if (fullName.length < 2 || fullName.length > 120 ||
      email.length < 5 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      city.length < 1 || city.length > 100 || region.length > 100 ||
      country.length < 1 || country.length > 100 || !selected.length ||
      clean(body.consent) !== 'yes') {
    return res.status(400).send(resultPage('Please check your details', 'Complete your name, email, city, country, at least one interest and your consent.'));
  }

  const key = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!key || !/^\d+$/.test(formId || '')) {
    return res.status(503).send(resultPage('Signups are being prepared', 'We are finishing the newsletter setup. Please try again soon.'));
  }
  try {
    const created = await kitRequest('/subscribers', key, {
      email_address: email,
      first_name: fullName.split(/\s+/)[0],
      fields: {
        full_name: fullName, city, state_province: region, country,
        interests: selected.map(([, label]) => label).join(' | '),
        signup_source: 'julianwortelboer.com/newsletter',
      },
    });
    const id = created?.subscriber?.id;
    if (!Number.isSafeInteger(id)) throw new Error('Kit did not return a subscriber ID');
    // Kit form controls the confirmation email; keep double opt-in enabled in Kit settings.
    await kitRequest('/forms/' + formId + '/subscribers/' + id, key, {
      referrer: 'https://www.julianwortelboer.com/newsletter',
    });
    // Optional per-topic Kit tags for segmentation, configured server-side only.
    // Fail visibly in logs if a tag fails; the subscriber has already joined the form.
    const tags = JSON.parse(process.env.KIT_TOPIC_TAG_IDS || '{}');
    for (const [topic] of selected) {
      const tagId = tags[topic];
      if (tagId && /^\d+$/.test(String(tagId))) {
        try { await kitRequest('/tags/' + tagId + '/subscribers/' + id, key, {}); }
        catch (tagError) { console.error('Failed to apply newsletter tag:', topic, tagError.message); }
      }
    }
    return res.status(200).send(resultPage('Check your inbox', 'Thank you for joining The Padel Playbook. Please click the confirmation link in the email we send you.', false));
  } catch (error) {
    // Never log subscriber PII or API credentials.
    console.error('Newsletter signup failed:', error.message);
    return res.status(502).send(resultPage('Please try again', 'Your subscription could not be completed right now. Please try later.'));
  }
}
