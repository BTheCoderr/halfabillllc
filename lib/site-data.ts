function readPublicPaymentUrl(envKey: string): string {
  const value = process.env[envKey]?.trim();
  if (!value || !value.startsWith("https://")) return "#";
  return value;
}

export function isLivePaymentUrl(url: string): boolean {
  return url.startsWith("https://");
}

export const siteConfig = {
  name: "Half A Bil Agency",
  brandLine: "Full Service Half A Bil.",
  tagline: "Websites. CRM. Automation. AI.",
  email: "hello@halfabilagency.com",
  phone: "(401) 217-9799",
  phoneTel: "4012179799",
  /** GoHighLevel booking widget for discovery calls. */
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/hwhx4ZZKDiXfSr3VSgrm",
  /** GoHighLevel booking widget ID, used for the embedded calendar section. */
  bookingWidgetId: "hwhx4ZZKDiXfSr3VSgrm",
  /** Set NEXT_PUBLIC_STRIPE_STARTER_PAYMENT_URL in Netlify env (Stripe Payment Link). */
  starterPaymentUrl: readPublicPaymentUrl("NEXT_PUBLIC_STRIPE_STARTER_PAYMENT_URL"),
  /** Set NEXT_PUBLIC_STRIPE_SYSTEM_PAYMENT_URL in Netlify env (Stripe Payment Link). */
  systemPaymentUrl: readPublicPaymentUrl("NEXT_PUBLIC_STRIPE_SYSTEM_PAYMENT_URL"),
  customQuoteUrl: "#contact",
  social: {
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/** Booking page for discovery calls; falls back to the project form if unset. */
export function getBookingHref(): string {
  return siteConfig.bookingUrl || "#contact";
}

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const problemCards = [
  {
    title: "Outdated Website",
    description:
      "Your site looks old, loads slow, or fails to explain what you do clearly enough to convert visitors into leads.",
    icon: "Globe",
  },
  {
    title: "No Lead System",
    description:
      "Inquiries get lost in DMs, voicemails, and scattered notes instead of one clean intake and follow-up flow.",
    icon: "UserX",
  },
  {
    title: "Manual Follow-Up",
    description:
      "You are copying data, sending the same emails, and chasing customers by hand every single week.",
    icon: "Clock",
  },
  {
    title: "Disconnected Tools",
    description:
      "Booking, payments, CRM, and customer follow-up live in separate tools that do not talk to each other.",
    icon: "Unplug",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
};

export const services: Service[] = [
  {
    title: "Website Design",
    description:
      "A modern, mobile-friendly website that explains what you do, builds trust, and turns visitors into booked jobs.",
    icon: "Layout",
  },
  {
    title: "Website Redesign",
    description:
      "Already have a site but it looks outdated or does not convert? We rebuild it around clarity, speed, and leads.",
    icon: "RefreshCw",
  },
  {
    title: "CRM Setup",
    description:
      "One place to track every lead and customer from first contact to closed job, so nothing falls through the cracks.",
    icon: "Users",
  },
  {
    title: "Business Automation",
    description:
      "Automated follow-ups, reminders, and internal workflows that save you hours of manual admin every week.",
    icon: "Workflow",
  },
  {
    title: "Lead Capture Systems",
    description:
      "Forms, chat widgets, and intake flows built to capture every inquiry and route it straight into your CRM.",
    icon: "Inbox",
  },
  {
    title: "Appointment Booking",
    description:
      "An online calendar that lets customers book themselves in, with automatic reminders to cut down no-shows.",
    icon: "Calendar",
  },
  {
    title: "Google Business Profile",
    description:
      "A fully optimized profile so your business shows up, looks credible, and gets found by local customers searching now.",
    icon: "MapPin",
  },
  {
    title: "SEO Foundations",
    description:
      "The on-page and technical SEO fundamentals that help your website get found in local search results.",
    icon: "Search",
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered intake, support, and admin tools built specifically for local service businesses.",
    icon: "Sparkles",
    comingSoon: true,
  },
];

export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  cadence?: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  href: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Website Build Deposit",
    tagline: "Reserve your project and kick off discovery and design.",
    price: "$500",
    cadence: "one-time",
    features: [
      "Locks in your project slot",
      "Discovery call and project scope",
      "Design direction and site plan",
      "Applied toward your final build cost",
    ],
    ctaLabel: "Pay Deposit",
    href: "https://link.fastpaydirect.com/payment-link/6a558abe6eb859b10b7841c6",
  },
  {
    name: "Starter Plan",
    tagline: "For businesses that just need a solid site that stays online and up to date.",
    price: "$97",
    cadence: "/month",
    features: [
      "Hosting",
      "Security updates",
      "Small website edits",
      "CRM support",
      "Monthly maintenance",
      "Priority support",
    ],
    ctaLabel: "Get Started",
    href: "https://link.fastpaydirect.com/payment-link/6a558c336eb859b10b7841ca",
  },
  {
    name: "Growth Plan",
    tagline: "A complete growth system for businesses ready to generate more leads and automate follow-up.",
    price: "$197",
    cadence: "/month",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Professional website hosting",
      "CRM setup and management",
      "Lead capture forms",
      "Appointment booking integration",
      "Automated email and SMS follow-up",
      "Reputation management setup",
      "Priority support",
    ],
    ctaLabel: "Get Started",
    href: "https://link.fastpaydirect.com/payment-link/6a558d68a655fa0b802a4168",
  },
  {
    name: "AI Receptionist",
    tagline: "Never miss another lead — answers, qualifies, and books appointments 24/7.",
    price: "$297",
    cadence: "/month",
    features: [
      "AI Chat Assistant",
      "Instant Lead Responses",
      "Automated SMS",
      "Missed Call Text Back",
      "Appointment Booking",
      "Lead Qualification",
    ],
    ctaLabel: "Get Started",
    href: "https://link.fastpaydirect.com/payment-link/6a558e092fb6fb8e1dcdf112",
  },
  {
    name: "Business Operating System",
    tagline: "Everything Half A Bil Agency offers, bundled into one all-in-one system.",
    price: "$497",
    cadence: "/month",
    features: [
      "Professional Website",
      "CRM",
      "AI Receptionist",
      "Automations",
      "Reputation Management",
      "Review Requests",
      "Appointment Booking",
      "Missed Call Text Back",
      "Email Marketing",
      "SMS Marketing",
      "Monthly Analytics",
      "Priority Support",
      "AI Employee",
    ],
    ctaLabel: "Get Started",
    href: "https://link.fastpaydirect.com/payment-link/6a558e892fb6fb8e1dcdf114",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your customers, and what is holding your growth back.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We map the website, CRM, and automations you need and give you clear pricing before work starts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design, build, and connect your website, CRM, and automations, keeping you updated the whole way.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We go live, test every form and flow, and make sure leads are landing exactly where they should.",
  },
  {
    step: "05",
    title: "Growth",
    description:
      "We stay on as your ongoing partner, improving the system as your business grows.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Most projects start with a $500 website build deposit, which locks in your slot and is applied toward your final build cost. Final pricing depends on the size and features of the site, and you will always know the full price before any work begins.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Projects typically start with a deposit, and the remaining balance can be split into milestone payments. After launch, our Starter and Growth plans are simple monthly plans instead of one large upfront cost.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites launch within 2 to 4 weeks of the discovery call, depending on scope and how quickly we get content and feedback from you. CRM and automation setups are usually scoped and delivered on a similar timeline.",
  },
  {
    question: "Can you redesign my website?",
    answer:
      "Yes. If your current site looks outdated, loads slowly, or is not converting visitors into leads, we can rebuild it from the ground up while keeping the parts of your brand that already work.",
  },
  {
    question: "Can you automate my business?",
    answer:
      "Yes. We build practical automations for lead follow-up, appointment reminders, review requests, and internal notifications, so less of your day goes to manual admin work.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "Our core focus is websites, CRM, and automation for local service businesses. For businesses that need a dedicated mobile app or MVP, reach out and we will scope it with you on a discovery call.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You are not left on your own after launch. Our Starter and Growth plans include hosting, maintenance, and support so your site and systems keep running, and we are on call as your ongoing technology partner.",
  },
];
