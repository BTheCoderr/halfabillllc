import {
  Bot,
  CheckCircle2,
  Code2,
  GitBranch,
  Globe,
  LayoutDashboard,
  Rocket,
  Users,
} from "lucide-react";

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
    label: "Launch Status",
    status: "Ready",
    progress: 100,
    icon: Rocket,
    detail: "Deploy · QA passed",
  },
];

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-none lg:justify-self-end">
      <div className="absolute -inset-4 rounded-3xl bg-brand-orange/10 blur-3xl animate-pulse-glow" />

      <div className="gradient-border relative overflow-hidden rounded-2xl glass-card shadow-2xl shadow-black/60">
        <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4 text-brand-orange" />
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Project Command Center
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
          {buildItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/8 bg-black/40 p-4 transition-colors hover:border-brand-orange/25"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-brand-orange/10 p-2">
                      <Icon className="h-4 w-4 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-zinc-500">{item.detail}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-[10px] font-medium text-brand-orange">
                    {item.status}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-700"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 bg-white/[0.02] px-5 py-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            <span>All systems operational · Last sync 2m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
