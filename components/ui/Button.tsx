import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-light shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-brand-orange/40 hover:bg-brand-orange/10 backdrop-blur-sm",
  ghost: "text-zinc-400 hover:text-brand-orange",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </Link>
  );
}
