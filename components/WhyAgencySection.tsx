import { FadeInSection } from "@/components/FadeInSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";
import { whyAgencyCards } from "@/lib/agency-content";

export function WhyAgencySection() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Why Us"
            title={`Why ${siteConfig.name}`}
            subtitle="Credibility without fake testimonials — just how we work and what you can expect."
          />
        </FadeInSection>

        <div className="grid gap-6 sm:grid-cols-3">
          {whyAgencyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeInSection key={card.title} delay={index * 80}>
                <GlassCard className="h-full text-center sm:text-left">
                  <div className="mx-auto inline-flex rounded-xl bg-brand-gold/10 p-3 ring-1 ring-brand-gold/20 sm:mx-0">
                    <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {card.description}
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
