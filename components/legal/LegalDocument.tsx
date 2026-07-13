import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-data";

export interface LegalSectionData {
  title: string;
  content: ReactNode;
}

interface LegalDocumentProps {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSectionData[];
}

export function LegalDocument({
  eyebrow = "Legal",
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="relative overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-gold/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
          {intro}
        </div>

        <div className="mt-14 space-y-12 sm:mt-16">
          {sections.map((section, index) => (
            <section key={section.title} aria-labelledby={`section-${index}`}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold tabular-nums text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`section-${index}`}
                  className="text-xl font-bold text-white sm:text-2xl"
                >
                  {section.title}
                </h2>
              </div>
              <div className="mt-4 space-y-4 border-l border-brand-gold/20 pl-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 gradient-border sm:mt-20">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Questions About This Policy
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              Contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-brand-gold">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
