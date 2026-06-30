import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCapabilities } from "@/lib/agency-content";

export function TechCapabilitiesSection() {
  return (
    <section id="tech" className="relative border-y border-white/5 py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Stack"
            title="Built With Modern Tools"
            subtitle="We build with tools that help projects launch fast, stay organized, and scale without unnecessary complexity."
          />
        </FadeInSection>

        <FadeInSection delay={80}>
          <ul className="flex flex-wrap justify-center gap-3">
            {techCapabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-brand-orange/35 hover:bg-brand-orange/10 hover:text-white"
              >
                {capability}
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
