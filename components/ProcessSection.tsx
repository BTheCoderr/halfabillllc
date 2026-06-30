import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="process" className="border-y border-white/5 bg-brand-charcoal/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="How it works" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative">
              {index < processSteps.length - 1 && (
                <div
                  className="absolute top-8 hidden h-px w-full bg-gradient-to-r from-brand-orange/50 to-transparent lg:block lg:w-[calc(100%+2rem)]"
                  aria-hidden="true"
                />
              )}
              <div className="relative">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
