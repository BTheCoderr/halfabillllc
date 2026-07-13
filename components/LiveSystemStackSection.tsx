"use client";

import { ArrowRight } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { liveStackNodes } from "@/lib/agency-content";

export function LiveSystemStackSection() {
  return (
    <section id="systems" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-transparent to-brand-charcoal/40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Operating Stack"
            title="The System Behind the Sale"
            subtitle="The goal is not just a good-looking website. The goal is a working business system that captures leads, books calls, tracks opportunities, and helps collect deposits."
          />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="relative overflow-x-auto pb-4">
            <div className="flex min-w-[720px] items-center justify-between gap-2 lg:min-w-0 lg:gap-0">
              {liveStackNodes.map((node, index) => {
                const Icon = node.icon;
                const isLast = index === liveStackNodes.length - 1;

                return (
                  <div key={node.label} className="flex flex-1 items-center">
                    <div className="group relative flex w-full flex-col items-center">
                      <div className="gradient-border w-full max-w-[148px] rounded-2xl glass-card glass-card-hover px-3 py-5 text-center shadow-lg shadow-black/20">
                        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 ring-1 ring-brand-gold/25 transition-all group-hover:bg-brand-gold/15 group-hover:ring-brand-gold/40">
                          <Icon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-semibold leading-snug text-white">
                          {node.label}
                        </p>
                      </div>
                      {!isLast && (
                        <div
                          className="absolute left-[calc(50%+74px)] top-1/2 hidden w-[calc(100%-148px)] -translate-y-1/2 items-center lg:flex"
                          aria-hidden="true"
                        >
                          <div className="flow-line h-px flex-1 bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-brand-gold/60" />
                          <ArrowRight className="mx-1 h-3.5 w-3.5 shrink-0 text-brand-gold/70" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={180}>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="gradient-border rounded-2xl glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Capture
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Website visitor → Netlify form → lead record ready for CRM.
              </p>
            </div>
            <div className="gradient-border rounded-2xl glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Convert
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                GoHighLevel booking + HubSpot pipeline + follow-up tasks.
              </p>
            </div>
            <div className="gradient-border rounded-2xl glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Close
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Stripe payment link after scope → deposit tracked in your stack.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
