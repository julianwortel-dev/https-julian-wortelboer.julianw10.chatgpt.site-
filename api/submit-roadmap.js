const json=(body,status=200)=>new Response(JSON.stringify(body),{
  status,
  headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}
});

const escapeHtml=value=>String(value??'')
  .replaceAll('&','&amp;')
  .replaceAll('<','&lt;')
  .replaceAll('>','&gt;')
  .replaceAll('"','&quot;')
  .replaceAll("'",'&#039;');

const allowedOrigin=origin=>{
  if(!origin)return true;
  try{
    const {hostname}=new URL(origin);
    return hostname==='julianwortelboer.com'||hostname==='www.julianwortelboer.com'||hostname.endsWith('.vercel.app')||hostname==='localhost'||hostname==='127.0.0.1';
  }catch{return false;}
};

async function sendEmail(apiKey,payload,idempotencyKey){
  const response=await fetch('https://api.resend.com/emails',{
    method:'POST',
    headers:{
      Authorization:`Bearer ${apiKey}`,
      'Content-Type':'application/json',
      'Idempotency-Key':idempotencyKey
    },
    body:JSON.stringify(payload)
  });
  if(!response.ok)throw new Error(`Email provider returned ${response.status}`);
  return response.json();
}

export async function POST(request){
  if(!allowedOrigin(request.headers.get('origin')))return json({message:'This submission source is not permitted.'},403);
  const contentLength=Number(request.headers.get('content-length')||0);
  if(contentLength>100000)return json({message:'The submission is too large.'},413);

  let data;
  try{data=await request.json();}catch{return json({message:'The submission could not be read.'},400);}

  if(data.companyWebsite)return json({ok:true});
  const required=['submissionId','name','email','phone','role','club','location','trackName','resultText'];
  if(!data.consent||required.some(key=>!String(data[key]||'').trim()))return json({message:'Required submission information is missing.'},400);
  if(!/^\S+@\S+\.\S+$/.test(data.email)||data.email.length>254)return json({message:'Please provide a valid email address.'},400);
  if(String(data.resultText).length>60000)return json({message:'The questionnaire response is too large.'},413);

  const apiKey=process.env.RESEND_API_KEY;
  if(!apiKey)return json({message:'Secure email delivery is being configured. Please try again shortly.'},503);

  const reviewEmail=process.env.ROADMAP_REVIEW_EMAIL||'julianwortel@gmail.com';
  const fromEmail=process.env.ROADMAP_FROM_EMAIL||'Padel Club Growth Roadmap <roadmap@julianwortelboer.com>';
  const club=escapeHtml(data.club);
  const name=escapeHtml(data.name);
  const email=escapeHtml(data.email);
  const phone=escapeHtml(data.phone);
  const role=escapeHtml(data.role);
  const location=escapeHtml(data.location);
  const score=Math.max(0,Math.min(100,Number(data.overall)||0));
  const status=escapeHtml(data.status);
  const submittedAt=escapeHtml(data.submittedAt||new Date().toISOString());
  const domains=Array.isArray(data.domains)?data.domains.slice(0,12):[];
  const domainRows=domains.map(domain=>`<tr><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(domain.name)}</td><td style="padding:8px;border-bottom:1px solid #ddd;text-align:right"><strong>${Math.max(0,Math.min(100,Number(domain.percent)||0))}%</strong></td></tr>`).join('');
  const resultText=escapeHtml(data.resultText);
  const baseStyle='font-family:Arial,sans-serif;color:#11110f;line-height:1.55;max-width:720px;margin:auto';

  const ownerHtml=`<div style="${baseStyle}"><div style="background:#f1cf3c;padding:22px"><strong style="font-size:12px;letter-spacing:1px">NEW PADEL CLUB GROWTH ROADMAP</strong><h1 style="margin:8px 0 0;font-size:28px">${club}</h1></div><div style="padding:24px;border:1px solid #ddd"><p><strong>${name}</strong> completed the ${escapeHtml(data.trackName)} questionnaire.</p><table style="width:100%;border-collapse:collapse"><tr><td style="padding:7px 0">Overall score</td><td style="text-align:right"><strong>${score}% — ${status}</strong></td></tr><tr><td style="padding:7px 0">Email</td><td style="text-align:right">${email}</td></tr><tr><td style="padding:7px 0">Phone / WhatsApp</td><td style="text-align:right">${phone}</td></tr><tr><td style="padding:7px 0">Role</td><td style="text-align:right">${role}</td></tr><tr><td style="padding:7px 0">Location</td><td style="text-align:right">${location}</td></tr><tr><td style="padding:7px 0">Submitted</td><td style="text-align:right">${submittedAt}</td></tr></table><h2 style="margin-top:28px">Full confidential submission</h2><pre style="white-space:pre-wrap;background:#f3f0e8;padding:18px;font:12px/1.55 monospace">${resultText}</pre></div></div>`;
  const customerHtml=`<div style="${baseStyle}"><div style="background:#f1cf3c;padding:22px"><strong style="font-size:12px;letter-spacing:1px">PADEL CLUB GROWTH ROADMAP</strong><h1 style="margin:8px 0 0;font-size:28px">Your Roadmap has been received</h1></div><div style="padding:24px;border:1px solid #ddd"><p>Hi ${name},</p><p>Thank you for completing the Padel Club Growth Roadmap for <strong>${club}</strong>. Julian has received your contact information, answers and preliminary results for confidential expert review.</p><div style="background:#11110f;color:#fff;padding:22px;margin:24px 0"><div style="font-size:12px;letter-spacing:1px">PRELIMINARY OVERALL SCORE</div><div style="font-size:38px;font-weight:700;margin-top:5px">${score}%</div><div>${status}</div></div><table style="width:100%;border-collapse:collapse">${domainRows}</table><h2 style="margin-top:30px">What happens next</h2><ol><li>Julian reviews the full questionnaire and operating context.</li><li>If the club is a fit for an Expert Review, you will be contacted to arrange a focused conversation.</li><li>Recommendations are made only after the answers and priorities have been examined together.</li></ol><p style="margin-top:28px">This score is a preliminary diagnostic snapshot, not a consulting recommendation.</p><p>Julian Wortelboer<br>Padel Club Strategy · Operations · Leadership</p></div></div>`;

  try{
    await Promise.all([
      sendEmail(apiKey,{from:fromEmail,to:[reviewEmail],reply_to:data.email,subject:`New Roadmap: ${data.club} — ${score}%`,html:ownerHtml},`roadmap-owner-${data.submissionId}`),
      sendEmail(apiKey,{from:fromEmail,to:[data.email],reply_to:reviewEmail,subject:`Your Padel Club Growth Roadmap — ${data.club}`,html:customerHtml},`roadmap-customer-${data.submissionId}`)
    ]);
    return json({ok:true});
  }catch{
    return json({message:'We could not send the confirmation emails. Please retry the secure submission.'},502);
  }
}

export function GET(){
  return json({ok:true,service:'Padel Club Growth Roadmap submissions'});
}
