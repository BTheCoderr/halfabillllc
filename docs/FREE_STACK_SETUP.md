# INTERNAL ONLY — HalfABilAgency Free Stack Setup

> **Not for the public website.** Operator setup guide only.

---

## Public website (what visitors see)

The live site at **HalfABilAgency** should only expose:

- Services
- Process
- Systems
- Pricing
- **Start a Project** (GoHighLevel embedded form)
- **Book a Free Call** (GoHighLevel booking widget — configure link below)
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

### 1. Website + hosting — Netlify + Next.js

- **Site:** Deployed from GitHub (`halfabillllc`)
- **Form:** GoHighLevel embedded form ("Website Project Request", id `uGyIDWHvy0skHNNheTW8`) rendered directly in `components/ContactSection.tsx` via `<iframe>` + `form_embed.js`
- **Submissions:** Land directly in GoHighLevel — configure lead notifications and pipeline routing in GoHighLevel, not Netlify

### 2. CRM — HubSpot Free

- Sign up: [hubspot.com](https://www.hubspot.com/products/crm)
- Use **Sales Hub Free** / CRM free tier
- Configure pipeline per [CRM_SETUP.md](./CRM_SETUP.md)
- **Internal only** — no embed on public site

### 3. Raw call list — Google Sheets

- One spreadsheet: **HalfABilAgency — Call List**
- Columns per [COLD_CALL_SYSTEM.md](./COLD_CALL_SYSTEM.md)
- Share only with operator account

### 4. Booking — GoHighLevel calendar

- Create calendar: **Free Discovery Call** (15–30 min) in GoHighLevel → Settings → Calendars
- Set availability and buffer times
- Copy the booking widget link
- **Public site:** `bookingUrl` → `https://api.leadconnectorhq.com/widget/booking/hwhx4ZZKDiXfSr3VSgrm`

### 5. Payments — Stripe Payment Links

- Stripe account → **Payment Links**
- Create two links:
  - **Starter Website Deposit** — $250
  - **Business System Deposit** — $500
- Copy each link into Netlify env vars (redeploy required):

| Netlify variable | Value |
|---|---|
| `NEXT_PUBLIC_STRIPE_STARTER_PAYMENT_URL` | `https://buy.stripe.com/...` |
| `NEXT_PUBLIC_STRIPE_SYSTEM_PAYMENT_URL` | `https://buy.stripe.com/...` |

- Local dev: copy `.env.example` → `.env.local` and paste the same URLs
- Until env vars are set, deposit buttons on the public site route to **#contact** with “Request deposit” labels
- Send custom deposit links **only after** proposal is accepted when scope is non-standard
- Mark deal **Payment Link Sent** → **Deposit Paid** in HubSpot

### 6. Automation — Manual first, Make/Zapier later

| Step | Manual process |
|---|---|
| Form submitted | GoHighLevel notify → create HubSpot contact/deal |
| Call booked | Update HubSpot stage + sheet |
| Proposal sent | Email PDF/link, update stage |
| Deposit paid | Stripe notification → update stage |

**Later only after manual flow works:** Make.com free plan or Zapier — GoHighLevel → HubSpot, etc. Do not automate before the manual process is reliable.

### 7. Phone

- **Display:** (401) 217-9799
- **Tel link:** `tel:4012179799`
- **Public placement:** Near project form only ("Prefer to talk first?")
- **Not in footer** as a contact directory — form is primary CTA

---

## Environment variables (when ready)

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Booking link is set directly in lib/site-data.ts (bookingUrl)
```

Do not commit secrets. Stripe secret keys stay in Stripe Dashboard only.

---

## Security & privacy

- Internal docs live in `/docs` — **not** served as public routes by Next.js
- Never commit HubSpot API keys in the repo
- Never expose call list URLs publicly
- Form spam protection is handled by GoHighLevel

---

## Quick reference

| Visitor action | Operator action |
|---|---|
| Submits project form | GoHighLevel notify → HubSpot lead |
| Books a call (GoHighLevel) | Stage: Discovery Booked |
| Receives proposal | Stage: Proposal Sent |
| Pays Stripe link | Stage: Deposit Paid |
| Project starts | Stage: Build In Progress |

---

## Related internal docs

- [CRM_SETUP.md](./CRM_SETUP.md)
- [COLD_CALL_SYSTEM.md](./COLD_CALL_SYSTEM.md)
