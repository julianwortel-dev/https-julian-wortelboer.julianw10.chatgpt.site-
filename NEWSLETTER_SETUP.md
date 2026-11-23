# The Padel Playbook — Custom Newsletter Launch Checklist

## Status
A custom signup page with seven multi-select interests, international location fields, and explicit consent is coded on branch `feature/padel-playbook-newsletter`. GitHub review: https://github.com/julianwortel-dev/https-julian-wortelboer.julianw10.chatgpt.site-/pull/1

**Do not merge to main until the Kit connection and complete confirmation flow are tested.**

## Fields on the website
Required: full name, email, city, country, at least one topic of interest, and opt-in consent.
Optional: state/province.

Interests (select any combination):
1. Padel News & Community
2. Padel Club Management
3. Padel Club Development & Investment
4. Padel Coaching Tips
5. Padel Coach Education & Certification
6. Player Improvement
7. AI & Technology in Padel Clubs

Backend stores all selections in a Kit subscriber custom field named `interests`, separated by ` | `. Optionally tags each interest for segmentation using `KIT_TOPIC_TAG_IDS`.

## Secure setup by site owner
1. Kit form **The Padel Playbook – Website Signup** already exists. In Kit, check **Send confirmation email** enabled; **Auto-confirm** disabled. Subject: **Confirm your subscription to The Padel Playbook**. Verify that API-created subscribers added to this form receive the same confirmation behavior.
2. In Kit, ensure these subscriber custom field **keys** exist (exact spellings): `full_name`, `city`, `state_province`, `country`, `interests`, `signup_source`. Confirm actual Kit field keys; the visual labels alone are not enough.
3. Find the **numeric form ID** in Kit's form URL or API (different from the public embed UID `80d927b05e`). Do not put a secret into GitHub or this conversation.
4. Create a Kit **v4 API key** under Kit's developer settings. In the Vercel project, add the following **server-side environment variables**:
   - `KIT_API_KEY` — the secret Kit v4 API key (never share in chat).
   - `KIT_FORM_ID` — the numeric form ID.
   - `KIT_TOPIC_TAG_IDS` — optional JSON object mapping topic IDs to numeric Kit tag IDs, e.g. `{"management":123,"player":456}`. Create Kit tags first. Without this, all interest selections still go into the `interests` custom field but there are no per-topic tags.
   - `NEWSLETTER_PREVIEW_ORIGIN` — optional *exact* Vercel preview site origin for preview submissions, e.g. `https://example-branch.vercel.app`.
5. Redeploy the Vercel preview after adding variables. Never expose `KIT_API_KEY` in client-side builds or browser scripts.

## Test before launch
- Verify both desktop and phone layouts.
- Submit an **authorized** test signup with two or more topics; verify Kit stores all values in `interests` and the corresponding subscriber profile.
- Verify Kit's confirmation email arrives, link works, and unconfirmed subscribers do not start receiving broadcasts before confirming.
- Test invalid/missing input, repeat subscription, unsubscribing, and back-end error behavior.
- Check the proper numeric Kit form ID and any tag associations.
- Check homepage, Insights page, article CTA links and `/newsletter`.
- Add an appropriate privacy notice/policy covering newsletter data and location capture.
- Only after all checks pass, merge PR #1 and verify the public deployment.

## Operational notes
The custom endpoint is `POST /api/newsletter-subscribe` (server-side Vercel function); it creates a Kit subscriber and adds them to the existing Kit form. It does not expose the API key in the website. A honeypot reduces some bot submissions, but **stronger production anti-abuse controls such as request rate limiting and/or managed bot challenge are recommended before scale**.

The earlier Kit embed snippet remains useful as a fallback, but the new form does not use it. The full custom form replaces it.

Suggested email schedule after approval: Tuesdays at 8:00 AM Eastern. Suggested metrics: weekly confirmed signups, subscription confirmation rate, most popular interests, geographic distribution, click-throughs to Insights, and consulting leads.
