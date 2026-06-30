import { Clock, Globe, Unplug, UserX } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemCards } from "@/lib/site-data";

const iconMap = {
  Globe,
  UserX,
  Clock,
  Unplug,
} as const;

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="Your Business Should Not Be Held Back by Bad Digital Systems"
          subtitle="Most businesses do not need more random tools. They need the right website, app, form, CRM, booking flow, or automation built around how they actually work."
          align="left"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <GlassCard key={card.title}>
                <div className="mb-5 inline-flex rounded-xl bg-brand-orange/10 p-3 ring-1 ring-brand-orange/20">
                  <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
