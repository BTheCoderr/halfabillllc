import { Check } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { isLivePaymentUrl, pricingPlans, siteConfig } from "@/lib/site-data";

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

        <div className="grid gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => {
            const stripeUrl = plan.stripeUrlKey ? siteConfig[plan.stripeUrlKey] : undefined;
            const hasStripeLink = stripeUrl ? isLivePaymentUrl(stripeUrl) : false;
            const href = plan.comingSoon
              ? undefined
              : hasStripeLink && stripeUrl
                ? stripeUrl
                : "#contact";

            return (
              <FadeInSection key={plan.name} delay={index * 70} className="h-full">
                <GlassCard
                  hover={!plan.comingSoon}
                  className={`relative flex h-full flex-col ${
                    plan.highlighted
                      ? "gradient-border ring-1 ring-brand-gold/30 shadow-xl shadow-brand-gold/10"
                      : plan.comingSoon
                        ? "opacity-80"
                        : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#050505]">
                      Most Popular
                    </span>
                  )}
                  {plan.comingSoon && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-brand-gold/40 bg-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      Coming Soon
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

                  {plan.comingSoon ? (
                    <span className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold tracking-wide text-zinc-500">
                      {plan.ctaLabel}
                    </span>
                  ) : (
                    <Button
                      href={href ?? "#contact"}
                      variant={plan.highlighted ? "primary" : "secondary"}
                      className="mt-8 w-full"
                    >
                      {plan.ctaLabel}
                    </Button>
                  )}
                </GlassCard>
              </FadeInSection>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          Pricing depends on scope. You will know the price before work starts.
        </p>
      </div>
    </section>
  );
}
