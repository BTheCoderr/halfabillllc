import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { githubProfileUrl, recentBuilds } from "@/lib/intake";

export function RecentBuildsSection() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Work"
            subtitle="Founder-built projects with live demos, code, and honest case-study details — no fake metrics."
          />
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {recentBuilds.map((project, index) => (
            <FadeInSection key={project.title} delay={index * 80}>
              <ProjectCard project={project} featured={index < 2} />
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
