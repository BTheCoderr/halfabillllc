interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {id && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-brand-orange">
          {id}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
