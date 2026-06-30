import { logoColors } from "@/lib/brand";

interface LogoMarkProps {
  className?: string;
  /** Decorative when nested inside a labelled link */
  decorative?: boolean;
  titleId?: string;
  descId?: string;
}

/**
 * Icon-only HAB monogram: orange badge, charcoal B-form, white H, automation nodes.
 */
export function LogoMark({
  className = "h-8 w-8",
  decorative = false,
  titleId = "half-a-bil-mark-title",
  descId = "half-a-bil-mark-desc",
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
          <title id={titleId}>Half A Bil Agency logo</title>
          <desc id={descId}>
            Logo for Half A Bil Agency, a website, app, and automation consulting
            agency.
          </desc>
        </>
      )}
      <circle cx="24" cy="24" r="22" fill={logoColors.orange} />
      <path
        d="M28 8L38 38H32L30 30H18L16 38H10L20 8H28Z"
        fill={logoColors.charcoal}
      />
      <path
        d="M21 16H27V20H24V28H21V16Z M24 20H27V24H24V20Z"
        fill={logoColors.white}
      />
      <circle cx="34" cy="14" r="2.5" fill={logoColors.white} />
      <circle cx="14" cy="34" r="2" fill={logoColors.orange} stroke={logoColors.white} strokeWidth="1.2" />
      <path
        d="M34 14L28 20M14 34L20 28"
        stroke={logoColors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="32" r="1.5" fill={logoColors.white} opacity="0.85" />
    </svg>
  );
}

/** Raw mark paths for embedding in composite SVGs */
export function LogoMarkPaths() {
  return (
    <g>
      <circle cx="24" cy="24" r="22" fill={logoColors.orange} />
      <path
        d="M28 8L38 38H32L30 30H18L16 38H10L20 8H28Z"
        fill={logoColors.charcoal}
      />
      <path
        d="M21 16H27V20H24V28H21V16Z M24 20H27V24H24V20Z"
        fill={logoColors.white}
      />
      <circle cx="34" cy="14" r="2.5" fill={logoColors.white} />
      <circle cx="14" cy="34" r="2" fill={logoColors.orange} stroke={logoColors.white} strokeWidth="1.2" />
      <path
        d="M34 14L28 20M14 34L20 28"
        stroke={logoColors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="32" r="1.5" fill={logoColors.white} opacity="0.85" />
    </g>
  );
}
