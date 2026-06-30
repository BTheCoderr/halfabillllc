# INTERNAL ONLY — Half A Bil Agency CRM Setup

> **Not for the public website.** This document is for the owner/operator only.  
> Do not link this from navigation, footers, or any customer-facing page.

---

## Purpose

HubSpot Free CRM is the internal system of record for deals, follow-ups, and pipeline status after a lead shows interest. Visitors use the **project request form** and **Calendly** on the public site — they never see HubSpot.

---

## Free stack (operator tools)

| Tool | Role | Cost |
|---|---|---|
| **HubSpot Free CRM** | Deals, contacts, pipeline | Free |
| **Google Sheets** | Raw cold call list | Free |
| **Netlify Forms** | Website project requests | Free (with site) |
| **Calendly Free** | Discovery call booking | Free |
| **Stripe Payment Links** | Deposits after proposal | Pay per transaction |
| **Make.com** | Automation (later) | Free plan when ready |

**Owner phone:** (401) 217-9799 · `tel:4012179799`

---

## HubSpot pipeline stages

Create a deal pipeline with these stages (in order):

1. **To Call**
2. **Called - No Answer**
3. **Callback Needed**
4. **Interested**
5. **Discovery Booked**
6. **Proposal Sent**
7. **Payment Link Sent**
8. **Deposit Paid**
9. **Build In Progress**
10. **Won**
11. **Lost / Not Now**

---

## Operator workflow

```
Cold call lead (Google Sheets)
        ↓
   Interested?
        ↓ yes
Add/update contact + deal in HubSpot
        ↓
Send Calendly link → Discovery Booked
        ↓
Send proposal → Proposal Sent
        ↓
Send Stripe deposit link → Payment Link Sent
        ↓
Deposit received → Deposit Paid
        ↓
Work begins → Build In Progress
        ↓
Project complete → Won
```

**Website form submissions:** When Netlify Forms delivers a `project-request`, create or update a HubSpot contact/deal manually (or automate later with Make.com).

---

## HubSpot setup checklist

- [ ] Create free HubSpot account
- [ ] Create deal pipeline with stages above
- [ ] Create contact properties: Business Name, Industry, City, Source, Website, Google Rating
- [ ] Create deal properties: Service Pitch, Pain Point, Call Status, Call Outcome, Next Follow-Up Date
- [ ] Add checkboxes or notes: Calendly Link Sent, Stripe Link Sent
- [ ] Set email notifications for new form submissions (via Netlify, not HubSpot form)
- [ ] Bookmark HubSpot dashboard — do not expose URL on public site

---

## What customers see vs. what you see

| Customer (public site) | Operator (internal) |
|---|---|
| Project request form | Netlify Forms inbox + HubSpot deal |
| Book a Free Call (Calendly) | Pipeline → Discovery Booked |
| Pay deposit (Stripe link sent privately) | Pipeline → Deposit Paid |
| Services, pricing, process | Google Sheets call list |

---

## Related internal docs

- [COLD_CALL_SYSTEM.md](./COLD_CALL_SYSTEM.md) — Google Sheets call list
- [FREE_STACK_SETUP.md](./FREE_STACK_SETUP.md) — Full tool setup
