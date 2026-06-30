# INTERNAL ONLY — Half A Bil Agency Free Stack Setup

> **Not for the public website.** Operator setup guide only.

---

## Public website (what visitors see)

The live site at **Half A Bil Agency** should only expose:

- Services
- Process
- Systems
- Pricing
- **Start a Project** (Netlify form → `project-request`)
- **Book a Free Call** (Calendly — configure link below)
- Payment/deposit **only** via a polished Stripe link sent privately after a proposal — not as internal ops UI

**Navigation (public):**

- Services · Process · Systems · Pricing · Start a Project
- CTA button: Book a Free Call

**Do not publish:**

- `/crm-setup`
- `/outreach-system`
- Internal pipeline docs, call lists, or HubSpot screens

---

## Tool setup

### 1. Website + forms — Netlify + Next.js

- **Site:** Deployed from GitHub (`halfabillllc`)
- **Form name:** `project-request` (Netlify Forms)
- **Detection:** `public/netlify-form.html` + `NetlifyFormBootstrap` in layout
- **Submit:** URL-encoded POST to **`/netlify-form.html`** (not `/`) → redirect `/thank-you`
- **Why:** Next.js on Netlify intercepts POST to `/`; static path is required ([Netlify + Next.js forms](https://opennext.js.org/netlify/forms))
- **Notifications:** Netlify → Project configuration → Notifications → Form submission → **project-request** → your email (see [NETLIFY_FORM_EMAIL.md](./NETLIFY_FORM_EMAIL.md))

### 2. CRM — HubSpot Free

- Sign up: [hubspot.com](https://www.hubspot.com/products/crm)
- Use **Sales Hub Free** / CRM free tier
- Configure pipeline per [CRM_SETUP.md](./CRM_SETUP.md)
- **Internal only** — no embed on public site

### 3. Raw call list — Google Sheets

- One spreadsheet: **Half A Bil — Call List**
- Columns per [COLD_CALL_SYSTEM.md](./COLD_CALL_SYSTEM.md)
- Share only with operator account

### 4. Booking — Calendly Free

- Create event: **Free Discovery Call** (15–30 min)
- Set availability and buffer times
- Copy booking link
- **Public site:** `bookingUrl` → `https://calendly.com/bferrell514`

### 5. Payments — Stripe Payment Links

- Stripe account → **Payment Links**
- Create link for standard deposit amount (e.g. Starter Website deposit)
- Send link **only after** proposal is accepted — email or text from operator
- Mark deal **Payment Link Sent** → **Deposit Paid** in HubSpot

### 6. Automation — Manual first, Make/Zapier later

| Step | Manual process |
|---|---|
| Form submitted | Netlify email → create HubSpot contact/deal |
| Call booked | Update HubSpot stage + sheet |
| Proposal sent | Email PDF/link, update stage |
| Deposit paid | Stripe notification → update stage |

**Later only after manual flow works:** Make.com free plan or Zapier — Netlify webhook → HubSpot, Calendly → HubSpot, etc. Do not automate before the manual process is reliable.

### 7. Phone

- **Display:** (401) 217-9799
- **Tel link:** `tel:4012179799`
- **Public placement:** Near project form only ("Prefer to talk first?")
- **Not in footer** as a contact directory — form is primary CTA

---

## Environment variables (when ready)

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
```

Do not commit secrets. Stripe secret keys stay in Stripe Dashboard only.

---

## Security & privacy

- Internal docs live in `/docs` — **not** served as public routes by Next.js
- Never commit HubSpot API keys in the repo
- Never expose call list URLs publicly
- Form spam: Netlify honeypot `bot-field` enabled

---

## Quick reference

| Visitor action | Operator action |
|---|---|
| Submits project form | Netlify notify → HubSpot lead |
| Books Calendly | Stage: Discovery Booked |
| Receives proposal | Stage: Proposal Sent |
| Pays Stripe link | Stage: Deposit Paid |
| Project starts | Stage: Build In Progress |

---

## Related internal docs

- [CRM_SETUP.md](./CRM_SETUP.md)
- [COLD_CALL_SYSTEM.md](./COLD_CALL_SYSTEM.md)
