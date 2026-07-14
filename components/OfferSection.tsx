import { Check } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/lib/site-data";

export function OfferSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="Start With the Plan Your Business Needs Most"
          subtitle="Clear, upfront pricing. You will always know the cost before work starts."
          eyebrow="Pricing"
        />

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pricingPlans.map((plan, index) => (
            <FadeInSection key={plan.name} delay={index * 60} className="h-full">
              <GlassCard
                className={`relative flex h-full flex-col ${
                  plan.highlighted
                    ? "gradient-border ring-1 ring-brand-gold/30 shadow-xl shadow-brand-gold/10"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#050505]">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{plan.tagline}</p>

                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-gold">
                    {plan.price}
                  </span>
                  {plan.cadence && (
                    <span className="text-sm font-medium text-zinc-500">
                      {plan.cadence}
                    </span>
                  )}
                </p>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Includes
                </p>

                <ul className="mt-4 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.href}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </GlassCard>
            </FadeInSection>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          Pricing depends on scope. You will know the price before work starts.
        </p>
      </div>
    </section>
  );
}
