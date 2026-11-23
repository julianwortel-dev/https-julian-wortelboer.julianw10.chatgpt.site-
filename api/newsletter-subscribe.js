// Subscribe form for Vercel. Keep KIT_API_KEY in Vercel environment variables,
// not in the browser, not in GitHub and never in any public website code.
const TOPICS = [
  ['padel', 'Padel News & Community'],
  ['management', 'Padel Club Management'],
  ['investment', 'Padel Club Development & Investment'],
  ['coaching_tips', 'Padel Coaching Tips'],
  ['certification', 'Padel Coach Education & Certification'],
  ['player', 'Player Improvement'],
  ['ai', 'AI & Technology in Padel Clubs'],
];

function landing(title, message) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} | The Padel Playbook</title><style>body{margin:0;padding:8vh 24px;background:#f5f2eb;color:#171717;font-family:Arial,Helvetica,sans-serif}main{max-width:650px;margin:auto;padding:clamp(25px,5vw,55px);background:#fff;border-top:7px solid #ffc638}h1{font-size:clamp(36px,7vw,60px);line-height:1.02;letter-spacing:-.05em}p{font-size:18px;line-height:1.65}a{display:inline-block;background:#171717;color:#fff;padding:15px 22px;text-decoration:none;font-weight:bold}</style></head><body><main><small>THE PADEL PLAYBOOK</small><h1>${title}</h1><p>${message}</p><a href="/newsletter">Back to the newsletter</a></main></body></html>`;
}
const read = (value) => typeof value === 'string' ? value.trim() : '';
const headers = key => ({ 'X-Kit-Api-Key': key, 'Content-Type': 'application/json', 'Accept': 'application/json' });

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.method !== 'POST') return res.status(405).send(landing('Method not allowed', 'Please use the newsletter signup form.'));

  let body = req.body;
  if (typeof body === 'string') body = Object.fromEntries(new URLSearchParams(body).entries());
  if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};
  // A hidden field reduces automatic bot submissions.
  if (read(body.website)) return res.status(200).send(landing('Thank you', 'Please check your inbox.'));
  const name = read(body.full_name);
  const email = read(body.email).toLowerCase();
  const city = read(body.city);
  const region = read(body.state_province);
  const country = read(body.country);
  const selected = TOPICS.filter(([id]) => body['interest_' + id] === 'yes').map(([, title]) => title);

  if (name.length < 2 || name.length > 120 || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      city.length < 1 || city.length > 100 || region.length > 100 ||
      country.length < 1 || country.length > 100 ||
      !selected.length || read(body.consent) !== 'yes') {
    return res.status(400).send(landing('Please complete the form', 'Full name, email, city, country, at least one topic, and consent are required.'));
  }
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !/^\d+$/.test(formId || '')) {
    return res.status(503).send(landing('Signup opening soon', 'Our newsletter provider has not been connected yet. Please try again later.'));
  }

  try {
    const create = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: headers(apiKey),
      body: JSON.stringify({
        email_address: email,
        first_name: name.split(/\s+/)[0],
        fields: {
          full_name: name,
          city: city,
          state_province: region,
          country: country,
          interests: selected.join(' | '),
          source: 'JulianWortelboer.com newsletter'
        }
      })
    });
    if (!create.ok) throw new Error('Kit subscriber create HTTP ' + create.status);
    const data = await create.json();
    const id = data?.subscriber?.id;
    if (!id) throw new Error('Kit did not return subscriber id');
    const join = await fetch('https://api.kit.com/v4/forms/' + formId + '/subscribers/' + encodeURIComponent(id), {
      method: 'POST',
      headers: headers(apiKey),
      body: JSON.stringify({referrer:'https://www.julianwortelboer.com/newsletter'})
    });
    if (!join.ok) throw new Error('Kit form subscription HTTP ' + join.status);
    return res.status(200).send(landing('Check your inbox', 'Thanks for joining! Please follow the confirmation email from The Padel Playbook to complete your subscription.'));
  } catch (error) {
    console.error('Newsletter subscription error:', error.message);
    return res.status(502).send(landing('Please try again', 'Your subscription could not be confirmed. Please try again later.'));
  }
}
