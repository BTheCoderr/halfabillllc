import Image from "next/image";
import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { githubProfileUrl, recentBuilds } from "@/lib/intake";

function BuildPreview({
  title,
  category,
  imageSrc,
  imageAlt,
  placeholder,
  liveUrl,
}: {
  title: string;
  category: string;
  imageSrc?: string;
  imageAlt: string;
  placeholder?: boolean;
  liveUrl?: string;
}) {
  const preview = imageSrc ? (
    liveUrl ? (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`View live ${title} site`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </a>
    ) : (
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    )
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          {placeholder ? "Live preview" : "Preview"}
        </p>
      </div>
      {liveUrl && (
        <p className="max-w-[220px] text-xs leading-relaxed text-zinc-500">
          Visit the live site below
        </p>
      )}
    </div>
  );

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-2 truncate text-[11px] text-zinc-500">{title}</span>
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-charcoal via-black to-brand-charcoal">
        {preview}
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
            subtitle="Real projects from our GitHub — live demos and repos. No fake client logos or made-up metrics."
          />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBuilds.map((build, index) => (
            <FadeInSection key={build.title} delay={index * 80}>
              <article className="gradient-border flex h-full flex-col overflow-hidden rounded-2xl glass-card glass-card-hover">
                <BuildPreview
                  title={build.title}
                  category={build.category}
                  imageSrc={build.imageSrc}
                  imageAlt={build.imageAlt}
                  placeholder={build.placeholder}
                  liveUrl={build.liveUrl}
                />
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {build.title}
                    </h3>
                    {build.language && (
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                        {build.language}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {build.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {build.liveUrl && (
                      <Link
                        href={build.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-orange/40 hover:bg-brand-orange/10"
                      >
                        View live
                        <ExternalLink className="h-3.5 w-3.5 text-brand-orange" />
                      </Link>
                    )}
                    {build.githubUrl && (
                      <Link
                        href={build.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                      >
                        GitHub
                        <Code2 className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="mt-12 text-center" delay={200}>
          <Link
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-brand-orange"
          >
            <Code2 className="h-4 w-4" />
            More projects on GitHub — BTheCoderr
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
