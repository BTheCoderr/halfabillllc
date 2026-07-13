function readPublicPaymentUrl(envKey: string): string {
  const value = process.env[envKey]?.trim();
  if (!value || !value.startsWith("https://")) return "#";
  return value;
}

export function isLivePaymentUrl(url: string): boolean {
  return url.startsWith("https://");
}

export const siteConfig = {
  name: "HalfABilAgency",
  brandLine: "Full Service Half A Bil.",
  tagline: "Websites. Apps. Automations.",
  email: "hello@halfabilagency.com",
  phone: "(401) 217-9799",
  phoneTel: "4012179799",
  /** GoHighLevel booking widget for discovery calls. */
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/hwhx4ZZKDiXfSr3VSgrm",
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
  { label: "Proof", href: "#proof" },
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Pricing", href: "#pricing" },
  { label: "Start a Project", href: "#contact" },
];

/** Booking page for discovery calls; falls back to the project form if unset. */
export function getBookingHref(): string {
  return siteConfig.bookingUrl || "#contact";
}

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Pricing", href: "#pricing" },
  { label: "Start a Project", href: "#contact" },
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

export const services = [
  {
    title: "Website Design",
    description:
      "Modern websites that help businesses look credible, explain what they do, and convert visitors into leads.",
    icon: "Layout",
  },
  {
    title: "Apps and MVPs",
    description:
      "Web and mobile apps for startup ideas, customer portals, internal tools, booking platforms, and dashboards.",
    icon: "Smartphone",
  },
  {
    title: "Business Automations",
    description:
      "Systems that handle forms, reminders, lead routing, emails, task updates, spreadsheets, and follow-ups automatically.",
    icon: "Workflow",
  },
  {
    title: "AI Workflow Setup",
    description:
      "Practical AI systems for intake, support, admin work, content, research, summaries, and business operations.",
    icon: "Sparkles",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for ads, events, services, products, music, launches, and local business campaigns.",
    icon: "Rocket",
  },
  {
    title: "Digital Cleanup",
    description:
      "We fix messy tech stacks, broken forms, confusing workflows, bad websites, and disconnected tools.",
    icon: "Wrench",
  },
];

export const systemSteps = [
  { label: "Capture the lead", icon: "Inbox" },
  { label: "Qualify the request", icon: "Filter" },
  { label: "Book the call", icon: "Calendar" },
  { label: "Send the follow-up", icon: "Send" },
  { label: "Track the customer", icon: "Users" },
  { label: "Automate the next step", icon: "Zap" },
];

export const packages = [
  {
    name: "Starter Website",
    tagline: "For businesses that need a credible online presence fast.",
    price: "Starting at $500",
    features: [
      "One-page website",
      "Mobile-friendly design",
      "Contact form",
      "Clear calls to action",
      "Basic SEO setup",
      "Launch support",
    ],
    highlighted: false,
  },
  {
    name: "Business System Build",
    tagline:
      "For businesses that need a website plus booking, forms, payments, or automation.",
    price: "Starting at $1,500",
    features: [
      "Multi-section website or landing page",
      "Intake form",
      "Booking or payment setup",
      "CRM or spreadsheet workflow",
      "Automated email follow-up",
      "Launch support",
    ],
    highlighted: true,
  },
  {
    name: "Custom App or Automation",
    tagline:
      "For businesses that need a custom app, portal, dashboard, internal tool, or advanced automation.",
    price: "Quote after consultation",
    features: [
      "Discovery call",
      "Workflow mapping",
      "Custom build",
      "Testing",
      "Launch support",
    ],
    highlighted: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn what you need, what is broken, and what the business goal is.",
  },
  {
    step: "02",
    title: "Map",
    description:
      "We map the website, app, automation, or workflow before building.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, build, test, and keep the project moving.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We help you go live and make sure the system works in the real world.",
  },
];

export const useCases = [
  "Restaurant website with online ordering links",
  "Contractor lead form with instant follow-up",
  "Salon booking page with reminders",
  "Nonprofit intake and volunteer system",
  "Creator or artist landing page",
  "Startup MVP app",
  "AI customer intake assistant",
  "Internal dashboard for leads and jobs",
  "Payment and booking flow",
  "Automated email and text follow-up system",
];

export const budgetOptions = [
  "Under $500",
  "$500 to $1,500",
  "$1,500 to $5,000",
  "$5,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP",
  "This month",
  "Next 30 to 60 days",
  "Still planning",
];
