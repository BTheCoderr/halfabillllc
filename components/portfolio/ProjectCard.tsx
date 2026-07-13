"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Code2,
  ExternalLink,
  Info,
} from "lucide-react";
import type { PortfolioProject } from "@/lib/intake";
import { ProjectMockupPlaceholder } from "@/components/portfolio/ProjectMockupPlaceholder";

const previewImageProps = {
  fill: true as const,
  quality: 100,
  unoptimized: true,
  sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px",
  className:
    "object-cover object-top transition-transform duration-500 group-hover/thumb:scale-[1.02] [image-rendering:-webkit-optimize-contrast]",
};

type ProjectCardProps = {
  project: PortfolioProject;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const thumbHeight = featured
    ? "min-h-[280px] sm:min-h-[340px]"
    : "min-h-[220px] sm:min-h-[260px]";

  return (
    <article
      className={`gradient-border group flex h-full flex-col overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10 ${
        featured ? "ring-1 ring-brand-gold/20" : ""
      }`}
    >
      <div className="group/thumb overflow-hidden border-b border-white/10">
        <div
          className={`relative aspect-[16/10] bg-zinc-950 ${thumbHeight}`}
        >
          {project.imageSrc ? (
            project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label={`View live ${project.title}`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  {...previewImageProps}
                />
              </a>
            ) : (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                {...previewImageProps}
              />
            )
          ) : (
            <ProjectMockupPlaceholder
              title={project.title}
              theme={project.mockupTheme}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
            {project.type}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            {project.status}
          </span>
        </div>

        <h3
          className={`mt-3 font-bold text-white ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-zinc-400">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-2 text-xs sm:grid-cols-2">
          <div className="rounded-lg border border-white/8 bg-black/20 p-3">
            <p className="font-semibold uppercase tracking-wider text-zinc-500">
              Problem
            </p>
            <p className="mt-1 leading-relaxed text-zinc-300">{project.problem}</p>
          </div>
          <div className="rounded-lg border border-white/8 bg-black/20 p-3">
            <p className="font-semibold uppercase tracking-wider text-zinc-500">
              Build
            </p>
            <p className="mt-1 leading-relaxed text-zinc-300">{project.build}</p>
          </div>
        </div>

        {detailsOpen && (
          <div className="mt-3 rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-4 text-xs">
            <p className="font-semibold uppercase tracking-wider text-brand-gold">
              Stack & status
            </p>
            <p className="mt-2 text-zinc-300">
              <span className="text-zinc-500">Stack:</span>{" "}
              {project.stack.join(" · ")}
            </p>
            <p className="mt-1 text-zinc-300">
              <span className="text-zinc-500">Status:</span> {project.status} —
              founder-built project with a live demo path.
            </p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gold px-3.5 py-2 text-xs font-semibold text-[#050505] transition-colors hover:bg-brand-gold-light"
            >
              View Live
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:text-white"
            >
              View Code
              <Code2 className="h-3.5 w-3.5" />
            </Link>
          )}
          <button
            type="button"
            onClick={() => setDetailsOpen((open) => !open)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-brand-gold/30 hover:text-white"
            aria-expanded={detailsOpen}
          >
            View Details
            <Info className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
