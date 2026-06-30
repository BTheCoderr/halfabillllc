import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Layout,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import type { serviceOptions } from "@/lib/brand";

export const SERVICE_PREFILL_KEY = "hab-prefill-service";
export const BUDGET_PREFILL_KEY = "hab-prefill-budget";
export const MESSAGE_PREFILL_KEY = "hab-prefill-message";

type ServiceOption = (typeof serviceOptions)[number];

export type ConfiguratorOption = {
  id: string;
  label: string;
  service: ServiceOption;
  budget?: string;
  hint: string;
  message: string;
  icon: LucideIcon;
};

export const configuratorOptions: ConfiguratorOption[] = [
  {
    id: "website",
    label: "Website",
    service: "Website Design",
    budget: "$500 to $1,500",
    hint: "From $500",
    message:
      "I need a new website that explains what we do and turns visitors into leads.",
    icon: Layout,
  },
  {
    id: "app",
    label: "App or MVP",
    service: "App or MVP",
    budget: "$1,500 to $5,000",
    hint: "Scoped MVP",
    message:
      "I need an app or MVP built so we can test the idea with real users.",
    icon: Smartphone,
  },
  {
    id: "automation",
    label: "Automation",
    service: "Business Automation",
    budget: "$500 to $1,500",
    hint: "Workflow setup",
    message:
      "I need business automations to cut manual follow-up and admin work.",
    icon: Workflow,
  },
  {
    id: "ai",
    label: "AI Workflow",
    service: "AI Workflow Setup",
    budget: "$500 to $1,500",
    hint: "Intake & support",
    message:
      "I want AI workflows for intake, support, or internal admin tasks.",
    icon: Bot,
  },
  {
    id: "landing",
    label: "Landing Page",
    service: "Landing Page",
    budget: "Under $500",
    hint: "Fast launch",
    message: "I need a focused landing page for a campaign or offer.",
    icon: Rocket,
  },
  {
    id: "cleanup",
    label: "Digital Cleanup",
    service: "Digital Cleanup",
    budget: "Under $500",
    hint: "Fix & polish",
    message:
      "I need help cleaning up an existing site, form, or workflow that is not working.",
    icon: Wrench,
  },
  {
    id: "unsure",
    label: "Not Sure Yet",
    service: "Not Sure Yet",
    hint: "We will map it",
    message:
      "I am not sure exactly what I need yet, but I know something in our digital setup needs to be fixed or built.",
    icon: Sparkles,
  },
];

export type RecentBuild = {
  title: string;
  category: string;
  description: string;
  /** Path under public/, e.g. /work/example.png */
  imageSrc?: string;
  imageAlt: string;
  placeholder?: boolean;
};

export const recentBuilds: RecentBuild[] = [
  {
    title: "Half A Bil Agency",
    category: "Website · Forms · Booking",
    description:
      "Agency site with project intake, Calendly discovery calls, and deposit checkout flow.",
    imageSrc: "/work/half-a-bil-agency.png",
    imageAlt: "Half A Bil Agency website homepage preview",
    placeholder: false,
  },
  {
    title: "Your build here",
    category: "Screenshot slot",
    description:
      "Add a PNG to public/work/ and set imageSrc in lib/intake.ts when you have a live project to showcase.",
    imageAlt: "Client project screenshot placeholder",
    placeholder: true,
  },
  {
    title: "Your build here",
    category: "Screenshot slot",
    description:
      "Real screenshots only — no fake metrics. Swap this card when the next project ships.",
    imageAlt: "Client project screenshot placeholder",
    placeholder: true,
  },
];

export const toolsWeUse = [
  "HubSpot",
  "Stripe",
  "Calendly",
  "Netlify",
  "Google Sheets",
  "Make",
  "OpenAI",
  "Supabase",
] as const;
