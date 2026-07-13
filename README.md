# Half A Bil Agency

**Full Service Half A Bil.**

Marketing site for Half A Bil Agency — websites, CRM setup, business automation, lead capture, appointment booking, and AI solutions built for local service businesses. Built with [Next.js](https://nextjs.org), React, TypeScript, Tailwind CSS, and Framer Motion, deployed on Netlify.

## Site Structure

The homepage (`app/page.tsx`) is a single conversion-focused funnel:

1. **Hero** — headline, subheadline, and primary CTAs (Book a Free Strategy Call / Start Your Project)
2. **Problem** — the pain points local businesses run into with outdated systems
3. **Why Us** — three reasons to work with Half A Bil Agency
4. **Services** — the nine services offered (Website Design through AI Solutions)
5. **Portfolio** — founder-built projects with live demos and code
6. **Process** — the five-step delivery process
7. **Pricing** — the four pricing tiers, including the $500 deposit and monthly plans
8. **FAQ** — answers to common sales objections
9. **Booking** — embedded GoHighLevel calendar for free strategy calls
10. **Contact** — embedded GoHighLevel project request form

Legal pages live at `/privacy` and `/terms`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other useful scripts:

```bash
npm run lint    # ESLint
npm run build   # production build
npm run start   # serve the production build
```

## Key Content & Config Files

- `lib/site-data.ts` — brand config, nav/footer links, services, pricing plans, process steps, and FAQ content
- `lib/brand.ts` — brand colors and logo copy
- `lib/agency-content.ts` — "Why Us" card content
- `lib/intake.ts` — portfolio project data
- `components/ContactSection.tsx` / `components/BookingSection.tsx` — GoHighLevel form and booking embeds

## Deployment

This project deploys to Netlify. Push to `main` to trigger a build and deploy.
