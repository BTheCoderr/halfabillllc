"use client";

import {
  ArrowRight,
  Calendar,
  CreditCard,
  FileInput,
  Rocket,
  UserRound,
  Users,
} from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { builtSystemsFlow } from "@/lib/intake";

const iconMap = {
  UserRound,
  FileInput,
  Calendar,
  Users,
  CreditCard,
  Rocket,
} as const;

export function BuiltSystemsFlowSection() {
  return (
    <section id="built-systems" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 via-transparent to-brand-charcoal/30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="End-to-End Flow"
            title="Built Systems, Not Just Pages"
            subtitle="Every project is wired toward a working path — from first visit to booked call, tracked lead, deposit, and launch."
          />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-[680px] items-center justify-between gap-2 lg:min-w-0 lg:gap-0">
              {builtSystemsFlow.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isLast = index === builtSystemsFlow.length - 1;

                return (
                  <div key={step.label} className="flex flex-1 items-center">
                    <div className="group relative flex w-full flex-col items-center">
                      <div className="gradient-border w-full max-w-[160px] rounded-2xl glass-card px-3 py-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/10">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 ring-1 ring-brand-orange/25 transition-all group-hover:bg-brand-orange/15 group-hover:ring-brand-orange/40">
                          <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-white">{step.label}</p>
                        <p className="mt-1 text-[11px] leading-snug text-zinc-500">
                          {step.hint}
                        </p>
                      </div>
                      {!isLast && (
                        <div
                          className="absolute left-[calc(50%+80px)] top-1/2 hidden w-[calc(100%-160px)] -translate-y-1/2 items-center lg:flex"
                          aria-hidden="true"
                        >
                          <div className="flow-line h-px flex-1 bg-gradient-to-r from-brand-orange/50 to-brand-orange/20" />
                          <ArrowRight className="mx-0.5 h-4 w-4 shrink-0 text-brand-orange/60" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
