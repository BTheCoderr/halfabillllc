import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-7 ${hover ? "glass-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
