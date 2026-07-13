import Script from "next/script";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";

const GHL_FORM_ID = "uGyIDWHvy0skHNNheTW8";

const trustBadges = [
  "Free Consultation",
  "Custom Quote",
  "Fast Response",
  "Your Information Stays Private",
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[980px] px-5 lg:px-8">
        <SectionHeading
          title="Start Your Project"
          subtitle="Tell us about your business and we'll get back to you within one business day with a free consultation and custom quote."
          eyebrow="Project Request"
        />

        <ul className="mb-10 flex flex-wrap justify-center gap-3">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 rounded-full border border-brand-gold/20 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200"
            >
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-brand-gold"
                aria-hidden="true"
              />
              {badge}
            </li>
          ))}
        </ul>

        <div className="gradient-border">
          <div className="glass-card rounded-2xl p-4 shadow-2xl shadow-black/40 sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-2.5 px-1">
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-brand-gold"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Secure Project Intake
              </span>
            </div>

            <div className="min-h-[900px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] ring-1 ring-brand-gold/15">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "16px" }}
                id={`inline-${GHL_FORM_ID}`}
                scrolling="no"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Project Request"
                data-height="undefined"
                data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                data-form-id={GHL_FORM_ID}
                title="Website Project Request"
              />
            </div>
          </div>
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

        <p className="mt-8 text-center text-sm text-zinc-500">
          Not sure what you need yet? Send the problem. We will help you figure
          out the build.
        </p>
        <p className="mt-4 text-center text-sm text-zinc-500">
          Prefer to talk first?{" "}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
