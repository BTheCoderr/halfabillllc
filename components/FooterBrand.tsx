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
          className="h-14 w-14 sm:h-16 sm:w-16"
          decorative
          titleId="footer-logo-title"
          descId="footer-logo-desc"
        />
        <p className="mt-4 text-base font-bold tracking-tight text-white sm:text-lg">
          {siteConfig.name}
        </p>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange sm:text-[13px]">
          {siteConfig.brandLine}
        </p>
        <p className="mt-1.5 text-[11px] text-zinc-500 sm:text-xs">
          {siteConfig.tagline}
        </p>
      </Link>
    </div>
  );
}
