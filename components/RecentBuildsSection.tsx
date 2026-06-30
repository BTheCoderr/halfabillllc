import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recentBuilds } from "@/lib/intake";

function BuildPreview({
  title,
  category,
  imageSrc,
  imageAlt,
  placeholder,
}: {
  title: string;
  category: string;
  imageSrc?: string;
  imageAlt: string;
  placeholder?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-2 truncate text-[11px] text-zinc-500">{title}</span>
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-charcoal via-black to-brand-charcoal">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {placeholder ? "Screenshot slot" : "Preview"}
              </p>
            </div>
            <p className="max-w-[220px] text-xs leading-relaxed text-zinc-600">
              Drop a PNG in public/work/ and link it in lib/intake.ts
            </p>
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand-orange">
          {category}
        </p>
      </div>
    </div>
  );
}

export function RecentBuildsSection() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Recent Work"
            title="Recent builds"
            subtitle="Real projects and open slots for screenshots. No fake client logos or made-up metrics — just honest work samples as they ship."
          />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBuilds.map((build, index) => (
            <FadeInSection key={`${build.title}-${index}`} delay={index * 80}>
              <article className="gradient-border h-full rounded-2xl glass-card glass-card-hover overflow-hidden">
                <BuildPreview
                  title={build.title}
                  category={build.category}
                  imageSrc={build.imageSrc}
                  imageAlt={build.imageAlt}
                  placeholder={build.placeholder}
                />
                <div className="p-6 pt-4">
                  <h3 className="text-lg font-semibold text-white">{build.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {build.description}
                  </p>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
