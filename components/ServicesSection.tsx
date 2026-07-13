import {
  Calendar,
  Inbox,
  Layout,
  MapPin,
  RefreshCw,
  Search,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-data";

const iconMap = {
  Layout,
  RefreshCw,
  Users,
  Workflow,
  Inbox,
  Calendar,
  MapPin,
  Search,
  Sparkles,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="What We Build"
          eyebrow="Services"
          subtitle="Everything a local service business needs to look credible, capture leads, and run without the manual busywork."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeInSection key={service.title} delay={index * 50}>
                <GlassCard
                  className={`group relative h-full ${
                    service.comingSoon ? "opacity-80" : ""
                  }`}
                >
                  {service.comingSoon && (
                    <span className="absolute right-5 top-5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                      Coming Soon
                    </span>
                  )}
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
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
