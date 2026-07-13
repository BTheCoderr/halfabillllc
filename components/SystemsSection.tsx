import {
  Calendar,
  Filter,
  Inbox,
  Send,
  Users,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { systemSteps } from "@/lib/site-data";

const iconMap = {
  Inbox,
  Filter,
  Calendar,
  Send,
  Users,
  Zap,
} as const;

export function SystemsSection() {
  return (
    <section id="systems" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="We Do Not Just Build Pages. We Build Business Systems."
          eyebrow="Systems"
        />

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {systemSteps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <div key={step.label} className="relative">
                  {index < systemSteps.length - 1 && (
                    <div
                      className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 bg-brand-gold/50 xl:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="glass-card glass-card-hover flex h-full flex-col items-center rounded-2xl p-5 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 ring-2 ring-brand-gold/30">
                      <Icon className="h-5 w-5 text-brand-gold" />
                    </div>
                    <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      Step {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-snug text-white">
                      {step.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 font-mono text-xs sm:p-8">
          <div className="mb-4 flex items-center gap-2 text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
            <span>automation.workflow</span>
          </div>
          <pre className="overflow-x-auto text-zinc-400">
            <code>{`lead.captured → qualify.intent → schedule.call → send.followup → track.customer → automate.next`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
