import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/lib/site-data";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="What Half A Bil Agency Can Build for You"
          eyebrow="Use Cases"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {useCases.map((example) => (
            <GlassCard key={example} className="group !p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium leading-snug text-zinc-300">
                  {example}
                </p>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-brand-orange"
                  aria-hidden="true"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
