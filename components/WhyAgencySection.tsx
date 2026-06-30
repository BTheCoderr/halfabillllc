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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyAgencyCards.map((card, index) => (
            <FadeInSection key={card.title} delay={index * 60}>
              <GlassCard className="h-full">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </GlassCard>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
