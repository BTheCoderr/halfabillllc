"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Calendar,
  CheckCircle2,
  Code2,
  CreditCard,
  GitBranch,
  Globe,
  LayoutDashboard,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";

const statCards = [
  { label: "New Leads", value: "24", delta: "+6 today", icon: TrendingUp },
  { label: "Booked Calls", value: "8", delta: "3 this week", icon: Calendar },
  { label: "Deposits", value: "$1.2k", delta: "2 pending", icon: CreditCard },
  { label: "Pipeline", value: "12", delta: "active deals", icon: Users },
];

const buildItems = [
  {
    label: "Website Build",
    status: "Live",
    progress: 100,
    icon: Globe,
    detail: "12 pages · SEO ready",
  },
  {
    label: "App Build",
    status: "In Progress",
    progress: 72,
    icon: Code2,
    detail: "MVP · 4 modules",
  },
  {
    label: "Automation Flow",
    status: "Active",
    progress: 88,
    icon: GitBranch,
    detail: "6 triggers · 14 actions",
  },
  {
    label: "AI Workflow",
    status: "Running",
    progress: 95,
    icon: Bot,
    detail: "Intake · Support · Admin",
  },
  {
    label: "Lead System",
    status: "Connected",
    progress: 100,
    icon: Users,
    detail: "CRM · Forms · Routing",
  },
  {
    label: "Booking System",
    status: "Synced",
    progress: 100,
    icon: Calendar,
    detail: "Calendly · Reminders",
  },
  {
    label: "Payment Link",
    status: "Ready",
    progress: 100,
    icon: CreditCard,
    detail: "Stripe · Deposits",
  },
  {
    label: "Launch Status",
    status: "Ready",
    progress: 100,
    icon: Rocket,
    detail: "Deploy · QA passed",
  },
];

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-xl lg:max-w-none lg:justify-self-end"
    >
      <div className="absolute -inset-4 rounded-3xl bg-brand-orange/10 blur-3xl animate-pulse-glow" />

      <div
        className={`gradient-border relative overflow-hidden rounded-2xl glass-card shadow-2xl shadow-black/60 transition-all duration-700 ${
          animated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4 text-brand-orange" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 sm:text-xs">
                Project Command Center
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400 sm:inline">
                Live
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                <span className="h-2 w-2 rounded-full bg-green-500/80" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-b border-white/10 bg-black/30 p-3 sm:grid-cols-4 sm:gap-3 sm:p-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5 transition-colors hover:border-brand-orange/25 sm:p-3"
                style={{
                  opacity: animated ? 1 : 0,
                  transitionDelay: animated ? `${index * 60}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-3.5 w-3.5 text-brand-orange/80" aria-hidden="true" />
                  <span className="text-[9px] text-zinc-600 sm:text-[10px]">{stat.delta}</span>
                </div>
                <p className="mt-1 text-base font-bold text-white sm:text-lg">{stat.value}</p>
                <p className="text-[10px] text-zinc-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-2.5 p-3 sm:grid-cols-2 sm:gap-3 sm:p-4">
          {buildItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hovered === item.label;

            return (
              <div
                key={item.label}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className={`rounded-xl border bg-black/40 p-3 transition-all duration-300 sm:p-3.5 ${
                  isHovered
                    ? "border-brand-orange/40 bg-brand-orange/[0.06] shadow-lg shadow-brand-orange/5"
                    : "border-white/8 hover:border-brand-orange/25"
                }`}
                style={{
                  transitionDelay: animated ? `${index * 50}ms` : "0ms",
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div className="mb-2.5 flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <div
                      className={`shrink-0 rounded-lg p-1.5 transition-colors ${
                        isHovered ? "bg-brand-orange/20" : "bg-brand-orange/10"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 text-brand-orange" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-white sm:text-sm">
                        {item.label}
                      </p>
                      <p className="truncate text-[10px] text-zinc-500">{item.detail}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-orange/10 px-1.5 py-0.5 text-[9px] font-medium text-brand-orange sm:text-[10px]">
                    {item.status}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${item.progress}%` : "0%",
                      transitionDelay: animated ? `${180 + index * 80}ms` : "0ms",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 bg-white/[0.02] px-4 py-2.5 sm:px-5 sm:py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 sm:text-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>All systems operational</span>
            </div>
            <p className="font-mono text-[10px] text-zinc-600 sm:text-[11px]">
              form → CRM → book → pay → launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
