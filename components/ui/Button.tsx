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
    "bg-brand-gold text-[#050505] hover:bg-brand-gold-light shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/35",
  secondary:
    "border border-brand-gold/40 bg-black/40 text-white hover:border-brand-gold/70 hover:bg-brand-gold/10 backdrop-blur-sm",
  ghost: "text-zinc-400 hover:text-brand-gold",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

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
