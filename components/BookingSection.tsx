import Script from "next/script";
import { CalendarClock } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";

export function BookingSection() {
  const widgetId = siteConfig.bookingWidgetId;

  return (
    <section id="booking" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/40 to-transparent" />

      <div className="relative mx-auto max-w-[980px] px-5 lg:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow="Free Strategy Call"
            title="Book Your Free Website & AI Strategy Call"
            subtitle="Pick a time that works for you. We'll walk through your business, your current systems, and what a website, CRM, or automation build could look like."
          />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="gradient-border">
            <div className="glass-card rounded-2xl p-4 shadow-2xl shadow-black/40 sm:p-6 lg:p-8">
              <div className="mb-6 flex items-center gap-2.5 px-1">
                <CalendarClock
                  className="h-4 w-4 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Choose a Time
                </span>
              </div>

              <div className="min-h-[750px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] ring-1 ring-brand-gold/15">
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/booking/${widgetId}`}
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "16px" }}
                  id={`booking-${widgetId}`}
                  scrolling="no"
                  title="Book Your Free Website & AI Strategy Call"
                />
              </div>
            </div>
          </div>
        </FadeInSection>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Prefer to send details first?{" "}
          <a
            href="#contact"
            className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
          >
            Start a project request
          </a>{" "}
          instead.
        </p>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
