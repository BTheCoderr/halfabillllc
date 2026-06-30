import { Hammer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workExamples } from "@/lib/site-data";

export function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title="Examples of what we can build" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workExamples.map((example) => (
            <article
              key={example}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-brand-charcoal/50 p-5 transition-colors hover:border-brand-orange/30"
            >
              <Hammer
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-zinc-300">{example}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
