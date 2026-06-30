import {
  Layout,
  Smartphone,
  Workflow,
  Sparkles,
  Rocket,
  Wrench,
} from "lucide-react";
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
    <section id="services" className="border-y border-white/5 bg-brand-charcoal/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="What we build" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-black/40 p-7 transition-all hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-brand-orange/10 p-3 text-brand-orange">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
