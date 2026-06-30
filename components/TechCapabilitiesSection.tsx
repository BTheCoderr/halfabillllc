import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visualTechStack } from "@/lib/intake";

export function TechCapabilitiesSection() {
  return (
    <section id="tech" className="relative border-y border-white/5 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Stack"
            title="Built With Modern Tools"
            subtitle="Visual proof of the stack we use to launch fast, stay organized, and scale without unnecessary complexity."
          />
        </FadeInSection>

        <FadeInSection delay={80}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {visualTechStack.map((tool) => (
              <div
                key={tool.name}
                className={`group gradient-border rounded-xl bg-gradient-to-br ${tool.color} p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/10`}
              >
                <div className="mx-auto mb-2 h-8 w-8 rounded-lg border border-white/10 bg-black/30 transition-colors group-hover:border-brand-orange/30 group-hover:bg-brand-orange/10" />
                <p className="text-xs font-semibold text-zinc-200 sm:text-sm">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
