import {
  Layout,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-data";

const iconMap = {
  Layout,
  Smartphone,
  Workflow,
  Sparkles,
  Rocket,
  Wrench,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="What We Build" eyebrow="Services" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <GlassCard key={service.title} className="group">
                <div className="mb-5 inline-flex rounded-xl bg-brand-gold/10 p-3 ring-1 ring-brand-gold/20 transition-all group-hover:bg-brand-gold/15">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
