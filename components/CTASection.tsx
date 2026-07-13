import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getBookingHref, siteConfig } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="gradient-border relative overflow-hidden rounded-3xl glass-card p-10 text-center sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/12 via-transparent to-brand-gold/5" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              {siteConfig.brandLine}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
              Ready to Build the Digital System Your Business Should Already Have?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Start with a project request. We&apos;ll help map the website, app,
              automation, booking flow, or payment system that makes the most sense.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#contact">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={getBookingHref()} variant="secondary">
                Book a Free Call
              </Button>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              Prefer to talk first?{" "}
              <Link
                href={`tel:${siteConfig.phoneTel}`}
                className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
              >
                Call {siteConfig.phone}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
