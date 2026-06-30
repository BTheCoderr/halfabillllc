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

export type ProjectType =
  | "Website"
  | "App"
  | "Automation"
  | "AI Tool"
  | "MVP";

export type ProjectStatus = "Live" | "Demo" | "Founder-built";

export type MockupTheme =
  | "legal"
  | "healthcare"
  | "delivery"
  | "journal"
  | "property"
  | "agency";

export type PortfolioProject = {
  title: string;
  tagline: string;
  type: ProjectType;
  stack: string[];
  problem: string;
  build: string;
  status: ProjectStatus;
  imageSrc?: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  mockupTheme: MockupTheme;
};

/** @deprecated use PortfolioProject */
export type RecentBuild = PortfolioProject;

export const githubProfileUrl = "https://github.com/BTheCoderr";

export const builtSystemsFlow = [
  { label: "Visitor", hint: "Lands on site", icon: "UserRound" as const },
  { label: "Lead Form", hint: "Captures intent", icon: "FileInput" as const },
  { label: "Booking", hint: "Schedules call", icon: "Calendar" as const },
  { label: "CRM", hint: "Tracks deal", icon: "Users" as const },
  { label: "Payment Link", hint: "Collects deposit", icon: "CreditCard" as const },
  { label: "Project Launch", hint: "Ships build", icon: "Rocket" as const },
];

export const visualTechStack = [
  { name: "React", color: "from-cyan-500/20 to-cyan-500/5" },
  { name: "Next.js", color: "from-white/10 to-white/5" },
  { name: "TypeScript", color: "from-blue-500/20 to-blue-500/5" },
  { name: "Tailwind", color: "from-teal-500/20 to-teal-500/5" },
  { name: "Supabase", color: "from-emerald-500/20 to-emerald-500/5" },
  { name: "Netlify", color: "from-teal-400/15 to-teal-400/5" },
  { name: "Stripe", color: "from-violet-500/20 to-violet-500/5" },
  { name: "HubSpot", color: "from-orange-500/20 to-orange-500/5" },
  { name: "Calendly", color: "from-blue-400/15 to-blue-400/5" },
  { name: "Python", color: "from-yellow-500/15 to-yellow-500/5" },
  { name: "APIs", color: "from-brand-orange/20 to-brand-orange/5" },
  { name: "Automation Tools", color: "from-zinc-500/20 to-zinc-500/5" },
] as const;

/** Founder-built projects — live demos and repos, no invented metrics. */
export const recentBuilds: PortfolioProject[] = [
  {
    title: "SmartProBono",
    tagline: "Free legal services platform with AI guidance and document tools.",
    type: "AI Tool",
    stack: ["Python", "React", "Netlify", "OpenAI"],
    problem: "Legal help needed a trusted digital front door and intake path.",
    build: "AI guidance platform, document tools, resource hub, and contact flows.",
    status: "Live",
    imageSrc: "/work/smartprobono.png",
    imageAlt: "SmartProBono legal services platform preview",
    liveUrl: "https://www.smartprobono.org",
    githubUrl: "https://github.com/BTheCoderr/SmartProBonoAPP",
    mockupTheme: "legal",
  },
  {
    title: "Klubhouse Therapy Services",
    tagline: "ABA therapy site with intake forms and family-focused service flow.",
    type: "Website",
    stack: ["Next.js", "TypeScript", "Tailwind", "Netlify Forms"],
    problem: "Therapy practice needed credible presence and patient intake online.",
    build: "Service site, intake forms, insurance section, and contact paths.",
    status: "Live",
    imageSrc: "/work/klubhouse-therapy.png",
    imageAlt: "Klubhouse Therapy Services website preview",
    liveUrl: "https://klubhousetherapyservices.com",
    githubUrl: "https://github.com/BTheCoderr/Klubhouse-Therapy-Services",
    mockupTheme: "healthcare",
  },
  {
    title: "APC LLC",
    tagline: "Cargo-van delivery site built for service calls and lead capture.",
    type: "Website",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    problem: "Delivery business needed a professional site that converts inquiries.",
    build: "Service pages, motion design, lead capture, and contact flow.",
    status: "Live",
    imageSrc: "/work/apcllc.png",
    imageAlt: "APC LLC delivery services website preview",
    liveUrl: "https://apcllc.co",
    githubUrl: "https://github.com/BTheCoderr/APCLLC",
    mockupTheme: "delivery",
  },
  {
    title: "DeenNotes AI",
    tagline: "Islamic reflection journal with notes, duas, and weekly actions.",
    type: "AI Tool",
    stack: ["TypeScript", "Netlify", "AI workflows"],
    problem: "Users needed a structured journal for lectures and weekly actions.",
    build: "Reflection app, note capture, action steps, and mobile-friendly UI.",
    status: "Live",
    imageSrc: "/work/deennotesai.png",
    imageAlt: "DeenNotes AI reflection journal preview",
    liveUrl: "https://deennotesai.netlify.app",
    githubUrl: "https://github.com/BTheCoderr/DeenNotesAI",
    mockupTheme: "journal",
  },
  {
    title: "Refined Spaces",
    tagline: "Boutique property management site for owners and guest inquiries.",
    type: "Website",
    stack: ["React", "Vite", "Tailwind", "Netlify Forms"],
    problem: "Property brand needed a premium owner-facing digital presence.",
    build: "Guest/owner sections, inquiry forms, brand system, and deploy pipeline.",
    status: "Live",
    imageSrc: "/work/refined-spaces.png",
    imageAlt: "Refined Spaces property management website preview",
    liveUrl: "https://refinedspacesne.com",
    githubUrl: "https://github.com/BTheCoderr/refined-spaces",
    mockupTheme: "property",
  },
  {
    title: "Half A Bil Agency",
    tagline: "Agency site with intake, booking, and deposit-ready project flow.",
    type: "Website",
    stack: ["Next.js", "TypeScript", "Tailwind", "Netlify"],
    problem: "Agency needed intake, booking, and deposit path on one site.",
    build: "Landing page, project form, Calendly booking, and payment section.",
    status: "Founder-built",
    imageSrc: "/work/half-a-bil-agency.png",
    imageAlt: "Half A Bil Agency website homepage preview",
    liveUrl: "https://halfabilagency.netlify.app",
    githubUrl: "https://github.com/BTheCoderr/halfabillllc",
    mockupTheme: "agency",
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
