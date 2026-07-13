import { logoColors, logoCopy } from "@/lib/brand";
import { LogoMark, LogoMarkPaths } from "@/components/LogoMark";

type LogoVariant = "horizontal" | "stacked" | "mark";
type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  /** When true, SVG is decorative (parent provides accessible name) */
  decorative?: boolean;
}

const sizeMap: Record<LogoSize, { horizontal: string; stacked: string; mark: string }> = {
  sm: { horizontal: "h-8 w-auto", stacked: "h-20 w-auto", mark: "h-8 w-8" },
  md: { horizontal: "h-9 w-auto", stacked: "h-24 w-auto", mark: "h-9 w-9" },
  lg: { horizontal: "h-11 w-auto", stacked: "h-28 w-auto", mark: "h-11 w-11" },
};

export function Logo({
  variant = "horizontal",
  size = "sm",
  className = "",
  decorative = false,
}: LogoProps) {
  const titleId = `halfabilagency-logo-${variant}-title`;
  const descId = `halfabilagency-logo-${variant}-desc`;
  const dims = sizeMap[size][variant];
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : {
        role: "img" as const,
        "aria-labelledby": `${titleId} ${descId}`,
      };

  if (variant === "mark") {
    return (
      <LogoMark
        className={`${dims} ${className}`}
        decorative={decorative}
        titleId={titleId}
        descId={descId}
        gradientId="hab-gold-logo-mark"
      />
    );
  }

  if (variant === "horizontal") {
    return (
      <svg
        viewBox="0 0 236 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dims} ${className}`}
        {...a11y}
      >
        {!decorative && (
          <>
            <title id={titleId}>{logoCopy.name} logo</title>
            <desc id={descId}>{logoCopy.desc}</desc>
          </>
        )}
        <LogoMarkPaths gradientId="hab-gold-horizontal" />
        <text
          x="58"
          y="31"
          fill={logoColors.white}
          fontFamily="var(--font-geist-sans), system-ui, -apple-system, sans-serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          {logoCopy.name}
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 220 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dims} ${className}`}
      {...a11y}
    >
      {!decorative && (
        <>
          <title id={titleId}>{logoCopy.name} logo</title>
          <desc id={descId}>{logoCopy.desc}</desc>
        </>
      )}
      <g transform="translate(84 0) scale(1.08)">
        <LogoMarkPaths gradientId="hab-gold-stacked" />
      </g>
      <text
        x="110"
        y="80"
        textAnchor="middle"
        fill={logoColors.white}
        fontFamily="var(--font-geist-sans), system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {logoCopy.name}
      </text>
      <text
        x="110"
        y="104"
        textAnchor="middle"
        fill={logoColors.gold}
        fontFamily="var(--font-geist-sans), system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {logoCopy.tagline}
      </text>
    </svg>
  );
}
