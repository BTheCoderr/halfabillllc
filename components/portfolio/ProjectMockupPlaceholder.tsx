"use client";

type MockupTheme =
  | "legal"
  | "healthcare"
  | "delivery"
  | "journal"
  | "property"
  | "agency";

const themeStyles: Record<
  MockupTheme,
  { accent: string; label: string; blocks: string[] }
> = {
  legal: {
    accent: "from-blue-500/20 to-brand-orange/15",
    label: "Legal platform UI",
    blocks: ["Intake", "AI Guide", "Documents"],
  },
  healthcare: {
    accent: "from-emerald-500/20 to-teal-500/10",
    label: "Healthcare site UI",
    blocks: ["Services", "Intake", "Contact"],
  },
  delivery: {
    accent: "from-brand-orange/25 to-amber-500/10",
    label: "Service business UI",
    blocks: ["Services", "Quote", "Fleet"],
  },
  journal: {
    accent: "from-violet-500/20 to-brand-orange/10",
    label: "AI journal UI",
    blocks: ["Notes", "Actions", "Weekly"],
  },
  property: {
    accent: "from-amber-600/20 to-yellow-500/10",
    label: "Property brand UI",
    blocks: ["Stays", "Owners", "Inquiry"],
  },
  agency: {
    accent: "from-brand-orange/30 to-orange-600/10",
    label: "Agency dashboard UI",
    blocks: ["Leads", "Book", "Pay"],
  },
};

export function ProjectMockupPlaceholder({
  title,
  theme = "agency",
}: {
  title: string;
  theme?: MockupTheme;
}) {
  const style = themeStyles[theme];

  return (
    <div
      className={`flex h-full flex-col bg-gradient-to-br ${style.accent} p-4 sm:p-5`}
      aria-hidden="true"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-1 truncate text-[10px] text-zinc-500">{title}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-8 rounded-lg border border-white/10 bg-black/30" />
        <div className="grid flex-1 grid-cols-3 gap-2">
          {style.blocks.map((block) => (
            <div
              key={block}
              className="flex flex-col rounded-lg border border-white/10 bg-black/25 p-2"
            >
              <div className="mb-2 h-1.5 w-8 rounded bg-brand-orange/40" />
              <div className="mt-auto text-[9px] font-medium uppercase tracking-wider text-zinc-500">
                {block}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 rounded-lg border border-white/10 bg-black/20" />
          <div className="h-10 rounded-lg border border-brand-orange/20 bg-brand-orange/5" />
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-zinc-600">
        {style.label}
      </p>
    </div>
  );
}
