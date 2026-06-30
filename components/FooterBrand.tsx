import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { siteConfig } from "@/lib/site-data";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start">
      <Link
        href="#top"
        className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        aria-label="Half A Bil Agency — home"
      >
        <LogoMark
          className="h-14 w-14 sm:h-[72px] sm:w-[72px]"
          decorative
          titleId="footer-logo-title"
          descId="footer-logo-desc"
        />
        <p className="mt-5 text-lg font-bold tracking-tight text-white">
          {siteConfig.name}
        </p>
        <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
          {siteConfig.brandLine}
        </p>
        <p className="mt-2 text-xs text-zinc-500">{siteConfig.tagline}</p>
      </Link>
    </div>
  );
}
