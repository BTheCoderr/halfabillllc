import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";

export function FounderSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          title="Built for People Who Need Real Work Done"
          align="center"
          eyebrow="Mission"
        />

        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
            <p>
              {siteConfig.name} was created to help businesses get the digital
              side handled without getting buried in tech talk.
            </p>
            <p className="text-zinc-300">
              The mission is simple: build practical websites, apps, and
              automations that help people look professional, stay organized,
              save time, and grow.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Websites", "Apps", "MVPs", "Automations", "AI Workflows"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
