import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[100px]" />
      </div>

      <div className="gradient-border relative w-full max-w-[580px]">
        <div className="glass-card rounded-2xl px-8 py-10 sm:px-12 sm:py-14">
          {/* Brand lockup */}
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
            <LogoMark
              className="h-16 w-16 sm:h-20 sm:w-20"
              titleId="thank-you-logo-title"
              descId="thank-you-logo-desc"
            />
            <p className="mt-5 text-lg font-bold tracking-tight text-white sm:text-[22px]">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange sm:text-sm">
              {siteConfig.brandLine}
            </p>
            <p className="mt-2 text-xs text-zinc-500">{siteConfig.tagline}</p>
          </div>

          {/* Confirmation */}
          <div className="text-center">
            <h1 className="text-[34px] font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Request Received
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-zinc-400 sm:mt-7 sm:text-lg">
              Thanks for reaching out to {siteConfig.name}. We&apos;ll review
              your project details and get back to you shortly.
            </p>

            <div className="mt-9 sm:mt-10">
              <Button href="/" className="min-w-[200px] px-10">
                Back to Home
              </Button>
            </div>

            <p className="mt-8 text-sm text-zinc-500 sm:mt-9">
              Need to add more details?{" "}
              <Link
                href="/#contact"
                className="font-medium text-brand-orange transition-colors hover:text-brand-orange-light hover:underline"
              >
                Send another message
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
