# The Padel Playbook — Newsletter launch checklist

## Site readiness
Review PR: https://github.com/julianwortel-dev/https-julian-wortelboer.julianw10.chatgpt.site-/pull/1
Preview branch: `feature/padel-playbook-newsletter`.
Public route after merge and deployment: https://www.julianwortelboer.com/newsletter

The owner created and published a Kit inline form named **The Padel Playbook – Website Signup**.
The public embed snippet supplied by the owner is:
```html
<script async data-uid="80d927b05e" src="https://julian-wortelboer.kit.com/80d927b05e/index.js"></script>
```
The newsletter React page uses this code through `src/NewsletterSignup.tsx`. The embed runs on the statically rendered newsletter page and Kit directly collects subscribers. No API key, separate backend, or form ID is required for this chosen embed implementation.

## Required before going live
1. In Kit, open **The Padel Playbook – Website Signup**. Check that **Send confirmation email** is enabled and **Auto-confirm new subscribers** is disabled. The owner set the subject to **Confirm your subscription to The Padel Playbook**.
2. Configure the Kit-hosted form to collect: **Full name** (required), **Email** (required), **City** (required), **State/Province** (optional), **Country** (required), and interest topics (multiple selections permitted). The default form template may not contain these fields; they must be added and verified in Kit. Kit's native form builder and plan may constrain multi-select behavior; verify before promising that all selections are captured. If necessary, build a custom form plus a secure backend in a separate reviewed change.
3. Seven interests requested:
   - Padel News & Community
   - Padel Club Management
   - Padel Club Development & Investment
   - Padel Coaching Tips
   - Padel Coach Education & Certification
   - Player Improvement
   - AI & Technology in Padel Clubs
4. In Kit, Save & Publish the customized form.
5. On a Vercel preview deployment, inspect desktop and mobile views. Submit a consented test subscription, check the Kit email confirmation link, verify the subscriber profile contains all required location and interest fields, and verify unsubscribe works.
6. Review the GitHub pull request build checks; merge only once the form works as intended. Check `/newsletter`, the homepage, `/insights`, and article CTAs after deployment.
7. Consider a clear privacy policy link and explicit consent wording before launch. Use Kit's own confirmed subscriber reporting.

## Weekly newsletter
- Proposed name: **The Padel Playbook**.
- Proposed timing: Tuesdays at 8 AM Eastern, once sender identity and first issue have been approved.
- Structure: a featured Insight, one practical coaching/club operations tip, one additional resource, and a relevant invitation.
- Metrics: newsletter sign-ups, confirmed subscribers, most popular subjects, location mix, clicked Insights, and qualified consulting inquiries.

## Important limitation
The form is committed to a GitHub review branch, but has **not** been merged, deployed, or tested on the live site. The embedding code by itself does **not** guarantee the custom fields and interests exist in Kit. Do not imply full newsletter integration is operational until a real test subscription confirms it.
