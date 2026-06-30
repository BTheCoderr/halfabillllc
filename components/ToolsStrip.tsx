import { FadeInSection } from "@/components/FadeInSection";
import { toolsWeUse } from "@/lib/intake";

export function ToolsStrip() {
  return (
    <section aria-label="Tools we work with" className="border-y border-white/5 bg-white/[0.02] py-10">
      <FadeInSection className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Tools we work with
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {toolsWeUse.map((tool) => (
            <li
              key={tool}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200"
            >
              {tool}
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
