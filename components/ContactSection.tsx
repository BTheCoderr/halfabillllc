import Script from "next/script";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";

const GHL_FORM_ID = "uGyIDWHvy0skHNNheTW8";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[980px] px-5 lg:px-8">
        <SectionHeading
          title="Start Your Project"
          subtitle="Tell us what you need built. We will review your details and get back to you shortly."
          eyebrow="Project Request"
        />

        <div className="gradient-border">
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="min-h-[820px] overflow-hidden rounded-lg">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                id={`inline-${GHL_FORM_ID}`}
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
