# INTERNAL — Netlify Form Email Troubleshooting

> Form name: **project-request**  
> Static submit path: **`/netlify-form.html`** (required for Next.js on Netlify)

---

## Why emails were not arriving

On **Next.js + Netlify**, posting to `/` is handled by Next.js — **Netlify never receives the submission**. The thank-you page can still load, but nothing hits Forms.

**Fix:** POST url-encoded data to the static file `/netlify-form.html`, then redirect to `/thank-you`.

---

## After every deploy — verify in 2 minutes

### 1. Submission reaches Netlify (not just thank-you page)

1. Open your **live site** (not localhost).
2. Submit the project request form with a test message.
3. Netlify Dashboard → **Forms** → **project-request**
4. Confirm a new **verified submission** appears (not only spam).

If nothing appears → redeploy with latest code; confirm `public/netlify-form.html` exists on the deploy.

### 2. Email notifications are turned on

Netlify does **not** email you automatically.

1. Netlify Dashboard → your site
2. **Project configuration** → **Notifications** → **Form submission notifications**
3. Click **Add notification** → **Email**
4. Select form: **project-request**
5. Enter your email (e.g. the address you check daily)
6. Save

Also check: **Forms** → **project-request** → **Settings** → notifications.

### 3. Check spam

- Gmail: Spam + Promotions + Updates
- Search: `from:netlify.com` or `form submission`

### 4. Check spam folder in Netlify

**Forms** → **project-request** → filter **Spam submissions**. False positives happen with honeypot or rapid tests.

---

## Test the static form file directly

Visit: `https://YOUR-SITE.netlify.app/netlify-form.html`

You should see a blank/minimal page (form is hidden). If you get a Next.js 404, the static file did not deploy.

---

## Local development

`localhost` **will not** send Netlify emails. Always test on the deployed Netlify URL.

---

## Field names (must match)

`name`, `email`, `phone`, `businessName`, `service`, `budget`, `timeline`, `message`, `bot-field`, `form-name`

---

## Still broken?

1. **Clear cache and redeploy** on Netlify
2. Confirm **Forms** are enabled (Site settings → Forms)
3. Try a different notification email
4. Use the GoHighLevel booking link + phone as backup until form email works
