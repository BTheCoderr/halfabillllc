# INTERNAL ONLY — HalfABilAgency Cold Call System

> **Not for the public website.** This document is for the owner/operator only.  
> Do not create public routes like `/outreach-system` or `/crm-setup`.

---

## Purpose

Google Sheets is the **raw call list** for outbound cold calling. When a lead is interested, move them into **HubSpot** (see [CRM_SETUP.md](./CRM_SETUP.md)). Customers never see this sheet.

---

## Google Sheet structure

Create one sheet named **Call List** with these columns:

| Column | Description |
|---|---|
| Business Name | Company or brand name |
| Contact Name | Person you spoke with or asked for |
| Phone | Direct or main line |
| Email | If available |
| Website | URL or "none" |
| Industry | Restaurant, salon, contractor, etc. |
| City | Local market |
| Source | Where the lead came from (Google Maps, referral, walk-in, etc.) |
| Google Rating | If applicable |
| Service Pitch | What you offered (website, automation, app, etc.) |
| Call Status | Current outreach state (see below) |
| Call Outcome | Result of last call |
| Pain Point | What they said is broken or missing |
| Next Follow-Up Date | When to call back |
| Booking Link Sent | Yes / No |
| Stripe Link Sent | Yes / No |
| HubSpot Deal Created | Yes / No |
| Notes | Free text |

---

## Call status values

Use the same language as the HubSpot pipeline for consistency:

- To Call
- Called - No Answer
- Callback Needed
- Interested
- Discovery Booked
- Proposal Sent
- Payment Link Sent
- Deposit Paid
- Build In Progress
- Won
- Lost / Not Now

---

## Daily call workflow

1. Filter sheet for **To Call** and **Callback Needed** (due today or overdue).
2. Call from owner phone: **(401) 217-9799**.
3. Update **Call Status**, **Call Outcome**, and **Notes** after every attempt.
4. If **Interested**:
   - Set **HubSpot Deal Created** = Yes
   - Create contact + deal in HubSpot (same business name)
   - Send booking link → mark **Booking Link Sent** = Yes
5. If **No Answer** → **Called - No Answer**, set **Next Follow-Up Date**.
6. If **Not interested now** → **Lost / Not Now**, add reason in Notes.

---

## Sample call outcome notes

- "No answer — left VM"
- "Spoke with owner — wants website quote"
- "Wrong number"
- "Already has agency — not now"
- "Booked discovery — booking link sent"

---

## Handoff to HubSpot

When **Interested** or better:

1. Do not delete the row — keep it for history.
2. Create HubSpot contact with phone, email, business name.
3. Create deal in matching pipeline stage.
4. Sheet becomes reference; HubSpot becomes source of truth for active deals.

---

## What NOT to put on the public website

- Call lists or lead spreadsheets
- Pipeline stage names as a sales page
- Internal tracking fields (Call Outcome, HubSpot Deal Created, etc.)
- Cold call scripts tied to internal ops (keep scripts in this doc or a private note)

---

## Related internal docs

- [CRM_SETUP.md](./CRM_SETUP.md) — HubSpot pipeline
- [FREE_STACK_SETUP.md](./FREE_STACK_SETUP.md) — Tool links and setup
