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
      "Landing page, GoHighLevel form, CRM-ready lead capture, booking, and Stripe payment link path.",
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
  { label: "GoHighLevel Forms", icon: LayoutTemplate },
  { label: "HubSpot CRM", icon: Users },
  { label: "GoHighLevel Booking", icon: Calendar },
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
  "GoHighLevel",
  "AI workflow tools",
  "Automation tools",
  "APIs",
  "Dashboards",
  "Mobile-first design",
] as const;

export type WhyCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyAgencyCards: WhyCard[] = [
  {
    title: "Built for Local Businesses",
    description:
      "We build specifically for dog groomers, contractors, cleaning companies, HVAC, restaurants, law firms, and other local service businesses — not generic tech theater.",
    icon: Users,
  },
  {
    title: "One Partner",
    description:
      "Your website, CRM, automation, and AI tools all come from one team, so nothing falls into the gap between vendors who do not talk to each other.",
    icon: Workflow,
  },
  {
    title: "Growth Focused",
    description:
      "Every build is measured by one thing: does it help you capture more leads, book more jobs, and save you time. Not how it looks in a portfolio.",
    icon: LayoutDashboard,
  },
];
