import { FadeInSection } from "@/components/FadeInSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proofSystems } from "@/lib/agency-content";

export function ProofOfWorkSection() {
  return (
    <section id="proof" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Founder-Built Systems"
            title="Proof of Work, Not Just Promises"
            subtitle="HalfABilAgency is built around practical systems: websites, apps, automations, forms, dashboards, booking flows, and payment-ready funnels."
          />
        </FadeInSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proofSystems.map((system, index) => {
            const Icon = system.icon;
            return (
              <FadeInSection key={system.title} delay={index * 70}>
                <GlassCard className="group h-full">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-brand-gold/10 p-3 ring-1 ring-brand-gold/20 transition-all group-hover:bg-brand-gold/15 group-hover:ring-brand-gold/35">
                      <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      {system.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{system.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {system.description}
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
