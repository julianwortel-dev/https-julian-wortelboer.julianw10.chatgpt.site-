# The Padel Playbook — Launch checklist

Site branch: `feature/padel-playbook-newsletter`.
URL after publish: https://www.julianwortelboer.com/newsletter

## Required Kit setup (owner access)

1. Create the Kit account at https://app.kit.com.
2. Under **Grow > Landing Pages & Forms**, create a form called **The Padel Playbook — Website Signup**.
3. Keep the Kit **confirmation email / double opt-in enabled**. Customize its subject and copy for Julian.
4. Create Kit custom fields with exact API keys: `full_name`, `city`, `state_province`, `country`, `interests`, and `source`. These fields must exist before using the Kit API. In Kit you can add them from a subscriber profile > Custom Fields or through the form builder.
5. Under Kit Settings > Developer, create/locate an API key. In **Vercel project settings > Environment Variables** add `KIT_API_KEY` and `KIT_FORM_ID` (numeric form ID from Kit). **Never share secrets in ChatGPT, GitHub, screenshots, or public files.** The owner should enter them directly in Vercel.
6. Redeploy Vercel after environment variables are configured.
7. Before publishing the new signup page, submit a test subscriber, confirm the email, and verify all custom fields including multiple topic interests in Kit.
8. Only then merge the newsletter branch into `main` and verify the public page is accessible and collecting emails.

## Newsletter structure
- Weekly: **The Padel Playbook**
- Intended schedule: Tuesday at 8:00 AM Eastern, to be scheduled inside Kit after sender verification.
- Segments: Padel News & Community; Padel Club Management; Padel Club Development & Investment; Padel Coaching Tips; Padel Coach Education & Certification; Player Improvement; AI & Technology in Padel Clubs.
- Metrics: confirmed new subscribers/week, signup conversion, subscriber topic mix and location, click-through to Insights and consulting requests.
- Send a welcome email after confirmation. Do not send any broadcast until sender domain and newsletter copy are approved.
- Readers can choose multiple interests; topics are stored as a pipe-delimited custom field for reporting.

## Important limitations
- GitHub/Vercel hold website code. **Kit** holds the subscriber list. No subscriber data goes to the frontend or GitHub.
- Without `KIT_API_KEY` and `KIT_FORM_ID`, the form displays a service-not-ready message and does not save any data.
- Custom field keys must be verified in Kit, and the endpoint should be tested in a Vercel preview environment before going live.
