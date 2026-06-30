import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Calendar,
  CreditCard,
  FileSpreadsheet,
  Globe,
  LayoutDashboard,
  LayoutTemplate,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

export type ProofSystem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

export const proofSystems: ProofSystem[] = [
  {
    title: "Business Website System",
    description:
      "A modern service-business website with clear offers, lead capture, booking, and follow-up flow.",
    icon: Globe,
    tag: "Example system",
  },
  {
    title: "AI Workflow System",
    description:
      "A practical automation flow for intake, summaries, customer follow-up, and internal task routing.",
    icon: Bot,
    tag: "Founder-built",
  },
  {
    title: "Mobile App MVP",
    description:
      "A mobile-first app concept with onboarding, dashboard, user flows, and launch-ready structure.",
    icon: Smartphone,
    tag: "Example system",
  },
  {
    title: "Lead Capture Funnel",
    description:
      "Landing page, Netlify form, CRM-ready lead capture, Calendly booking, and Stripe payment link path.",
    icon: Workflow,
    tag: "Example system",
  },
  {
    title: "Internal Dashboard",
    description:
      "A clean admin-style dashboard for tracking leads, jobs, payments, customer status, and next actions.",
    icon: LayoutDashboard,
    tag: "Founder-built",
  },
];

export type StackNode = {
  label: string;
  icon: LucideIcon;
};

export const liveStackNodes: StackNode[] = [
  { label: "Website", icon: Globe },
  { label: "Netlify Forms", icon: LayoutTemplate },
  { label: "HubSpot CRM", icon: Users },
  { label: "Calendly Booking", icon: Calendar },
  { label: "Stripe Payment Links", icon: CreditCard },
  { label: "Google Sheets Call Tracker", icon: FileSpreadsheet },
];

export type BuildCaseStudy = {
  title: string;
  problem: string;
  build: string;
  outcome: string;
};

export const buildCaseStudies: BuildCaseStudy[] = [
  {
    title: "Local Service Business",
    problem: "Outdated website and missed leads.",
    build: "Website, contact form, booking CTA, follow-up system.",
    outcome:
      "Typical outcome: a cleaner path from visitor to booked call.",
  },
  {
    title: "Startup / MVP",
    problem: "Idea needs a real product flow.",
    build: "Landing page, MVP screens, user journey, app dashboard.",
    outcome:
      "Typical outcome: a launchable first version to test demand.",
  },
  {
    title: "Operations / Automation",
    problem: "Too much manual work.",
    build: "Forms, CRM workflow, reminders, payment link process.",
    outcome:
      "Typical outcome: less admin work and a more organized sales process.",
  },
];

export const techCapabilities = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Netlify",
  "Stripe",
  "HubSpot",
  "Calendly",
  "AI workflow tools",
  "Automation tools",
  "APIs",
  "Dashboards",
  "Mobile-first design",
] as const;

export type WhyCard = {
  title: string;
  description: string;
};

export const whyAgencyCards: WhyCard[] = [
  {
    title: "Built by a real builder",
    description:
      "Founder-built projects across websites, apps, and automations — not outsourced pitch decks.",
  },
  {
    title: "Practical systems, not tech theater",
    description:
      "Every build ties back to leads, bookings, follow-up, or operations that actually run.",
  },
  {
    title: "Clear pricing before work starts",
    description:
      "Starter packages and scoped deposits so you know the path before committing.",
  },
  {
    title: "Fast launch path",
    description:
      "Focused MVPs and website systems designed to ship, test, and improve — not stall in planning.",
  },
  {
    title: "Website + app + automation thinking",
    description:
      "One partner for the site, the product flow, and the workflows behind the business.",
  },
  {
    title: "Lead capture to payment flow",
    description:
      "Forms, CRM handoff, Calendly booking, and Stripe deposit links wired into one system.",
  },
];
