import { ArrowRight, Hammer, Lightbulb, Target } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildCaseStudies } from "@/lib/agency-content";

const icons = [Target, Lightbulb, Hammer] as const;

export function WhatWeBuildSection() {
  return (
    <section id="build-examples" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Example Builds"
            title="What We Can Build"
            subtitle="Scenario-style examples — not fake client case studies. Typical problems, realistic builds, and example outcomes."
          />
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {buildCaseStudies.map((study, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <FadeInSection key={study.title} delay={index * 90}>
                <article className="gradient-border flex h-full flex-col rounded-2xl glass-card glass-card-hover overflow-hidden">
                  <div className="border-b border-white/10 bg-white/[0.03] px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-brand-orange/10 p-2.5 ring-1 ring-brand-orange/20">
                        <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{study.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                        Problem
                      </p>
                      <p className="mt-1.5 text-sm text-zinc-300">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                        Build
                      </p>
                      <p className="mt-1.5 text-sm text-zinc-300">{study.build}</p>
                    </div>
                    <div className="mt-auto rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-orange">
                        Example outcome
                      </p>
                      <p className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-zinc-300">
                        <ArrowRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                          aria-hidden="true"
                        />
                        {study.outcome.replace(/^Typical outcome: /, "")}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
