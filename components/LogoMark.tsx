import { logoColors, logoCopy } from "@/lib/brand";

interface LogoMarkProps {
  className?: string;
  /** Decorative when nested inside a labelled link */
  decorative?: boolean;
  titleId?: string;
  descId?: string;
  /** Unique per instance so multiple marks on one page keep valid ids */
  gradientId?: string;
}

/**
 * Icon-only HAB monogram: bold geometric letterforms in metallic gold,
 * transparent background, legible on black at every size.
 */
export function LogoMark({
  className = "h-8 w-8",
  decorative = false,
  titleId = "halfabilagency-mark-title",
  descId = "halfabilagency-mark-desc",
  gradientId = "hab-gold-mark",
}: LogoMarkProps) {
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : {
        role: "img" as const,
        "aria-labelledby": `${titleId} ${descId}`,
      };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...a11y}
    >
      {!decorative && (
        <>
          <title id={titleId}>{logoCopy.name} logo</title>
          <desc id={descId}>{logoCopy.desc}</desc>
        </>
      )}
      <LogoMarkPaths gradientId={gradientId} />
    </svg>
  );
}

/** Raw mark paths for embedding in composite SVGs (48x48 design space) */
export function LogoMarkPaths({ gradientId }: { gradientId: string }) {
  const fill = `url(#${gradientId})`;
  return (
    <g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={logoColors.goldLight} />
          <stop offset="0.5" stopColor={logoColors.gold} />
          <stop offset="1" stopColor={logoColors.goldDeep} />
        </linearGradient>
      </defs>
      {/* H */}
      <path d="M1.5 13H5.5V22H9.5V13H13.5V35H9.5V26H5.5V35H1.5Z" fill={fill} />
      {/* A */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2 13H25.3L31 35H27L25.8 30.5H20.7L19.5 35H15.5L21.2 13ZM23.25 18L25.5 26.5H21L23.25 18Z"
        fill={fill}
      />
      {/* B */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 13H41.2A5.1 5.1 0 0 1 41.2 23.2H41.7A5.9 5.9 0 0 1 41.7 35H33V13ZM37 16.9H40.8A2.05 2.05 0 0 1 40.8 21H37V16.9ZM37 25.4H41.2A2.6 2.6 0 0 1 41.2 30.6H37V25.4Z"
        fill={fill}
      />
      {/* Baseline accent */}
      <path
        d="M1.5 39.5H46.5"
        stroke={fill}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </g>
  );
}
