import { LogoMark } from "@/components/LogoMark";
import { siteConfig } from "@/lib/site-data";

export function HeroBrandLockup() {
  return (
    <div className="mb-8 flex flex-col items-start sm:mb-10">
      <LogoMark
        className="h-16 w-16 md:h-[76px] md:w-[76px] lg:h-24 lg:w-24"
        decorative
        titleId="hero-logo-title"
        descId="hero-logo-desc"
      />
      <p className="mt-5 text-lg font-bold tracking-tight text-white lg:text-[22px]">
        {siteConfig.name}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold lg:text-[13px]">
        {siteConfig.brandLine}
      </p>
      <p className="mt-2 text-xs text-zinc-500">{siteConfig.tagline}</p>
    </div>
  );
}
