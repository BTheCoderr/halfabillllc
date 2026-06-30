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
  const titleId = "half-a-bil-logo-title";
  const descId = "half-a-bil-logo-desc";
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
      />
    );
  }

  if (variant === "horizontal") {
    return (
      <svg
        viewBox="0 0 300 48"
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
        <g transform="translate(0 0)">
          <LogoMarkPaths />
        </g>
        <text
          x="56"
          y="31"
          fill={logoColors.white}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="17"
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
      viewBox="0 0 220 128"
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
      <g transform="translate(86 0) scale(1.08)">
        <LogoMarkPaths />
      </g>
      <text
        x="110"
        y="72"
        textAnchor="middle"
        fill={logoColors.white}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {logoCopy.name}
      </text>
      <text
        x="110"
        y="96"
        textAnchor="middle"
        fill={logoColors.orange}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.06em"
      >
        {logoCopy.tagline}
      </text>
      <text
        x="110"
        y="118"
        textAnchor="middle"
        fill="#71717a"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="0.04em"
      >
        Websites. Apps. Automations.
      </text>
    </svg>
  );
}
