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
    "bg-brand-orange text-white hover:bg-brand-orange-light shadow-lg shadow-brand-orange/20",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-brand-orange/50 hover:bg-brand-orange/10",
  ghost: "text-zinc-300 hover:text-brand-orange",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
