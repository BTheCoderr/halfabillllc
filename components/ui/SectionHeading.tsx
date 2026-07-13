interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  eyebrow,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
