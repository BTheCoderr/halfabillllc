import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { packages } from "@/lib/site-data";

export function OfferSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="Start with the system your business needs most." />

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                pkg.highlighted
                  ? "border-brand-orange bg-brand-charcoal shadow-xl shadow-brand-orange/10"
                  : "border-white/10 bg-brand-charcoal/40"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{pkg.tagline}</p>

              <p className="mt-6 text-2xl font-bold text-brand-orange">
                {pkg.price}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Includes
              </p>

              <ul className="mt-4 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={pkg.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Get Started
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Pricing depends on scope. We keep it clear before work starts.
        </p>
      </div>
    </section>
  );
}
