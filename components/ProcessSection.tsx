import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="A Simple Process From Idea to Launch"
          eyebrow="Process"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative">
              {index < processSteps.length - 1 && (
                <div
                  className="absolute top-10 hidden h-px w-full bg-gradient-to-r from-brand-orange/40 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="glass-card glass-card-hover h-full rounded-2xl p-7">
                <span className="font-mono text-2xl font-bold text-brand-orange">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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
