import { Globe, UserX, Clock, Shuffle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemCards } from "@/lib/site-data";

const iconMap = {
  Globe,
  UserX,
  Clock,
  Shuffle,
} as const;

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="Most businesses do not need more ideas. They need the right system built."
          align="left"
        />

        <div className="mb-12 max-w-2xl space-y-3 text-lg leading-relaxed text-zinc-400">
          <p>Your website is outdated.</p>
          <p>Your customers are slipping through the cracks.</p>
          <p>You are doing too much manually.</p>
          <p>
            Your business has no real intake, booking, payment, or follow-up
            system.
          </p>
          <p className="font-medium text-white">That is where we come in.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-brand-charcoal/60 p-6 transition-colors hover:border-brand-orange/40 hover:bg-brand-charcoal"
              >
                <div className="mb-4 inline-flex rounded-lg bg-brand-orange/10 p-3 text-brand-orange transition-colors group-hover:bg-brand-orange/20">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
