import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalDocument, LegalList } from "@/components/legal/LegalDocument";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalDocument
        title="Privacy Policy"
        lastUpdated="July 13, 2026"
        intro={
          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy. This Privacy Policy explains what
            information we collect, how we use it, and the choices you have
            when you visit our website, submit a project request, book a
            consultation, or otherwise interact with us. By using our website
            or services, you agree to the practices described in this policy.
          </p>
        }
        sections={[
          {
            title: "Information We Collect",
            content: (
              <>
                <p>We collect information you provide directly to us, including:</p>
                <LegalList
                  items={[
                    "Contact details such as name, email address, phone number, and company name.",
                    "Project details such as business type, services requested, budget range, and any information you share about your goals or challenges.",
                    "Communications you send us by email, phone, text message, or contact form.",
                    "Payment and billing information when you purchase services (processed securely by our payment providers; we do not store full card numbers).",
                  ]}
                />
                <p>
                  We may also automatically collect limited technical
                  information such as browser type, device type, pages
                  visited, and general location, as described in the
                  Cookies and Analytics sections below.
                </p>
              </>
            ),
          },
          {
            title: "Contact Forms",
            content: (
              <p>
                When you submit our project request or contact forms, the
                information you provide (name, email, phone, company, and
                project details) is sent directly to our team so we can
                respond to your inquiry, prepare a quote, and follow up about
                your project. We do not sell or rent the information you
                submit through our forms to third parties.
              </p>
            ),
          },
          {
            title: "GoHighLevel CRM",
            content: (
              <p>
                We use GoHighLevel, a third-party customer relationship
                management (CRM) platform, to receive, store, and manage
                form submissions, appointment requests, and client
                communications. Information you submit through our forms or
                booking widgets is processed by GoHighLevel on our behalf so
                we can track leads, send appointment reminders, and manage
                our client pipeline. GoHighLevel&apos;s handling of this data
                is also governed by{" "}
                <a
                  href="https://www.gohighlevel.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-gold hover:text-brand-gold-light hover:underline"
                >
                  GoHighLevel&apos;s own privacy policy
                </a>
                .
              </p>
            ),
          },
          {
            title: "Scheduling & Booking Tools",
            content: (
              <p>
                We use online scheduling tools, including GoHighLevel and, in
                some cases, Calendly, to let you book discovery calls and
                consultations directly on our calendar. When you book a call
                through one of these tools, the information you provide
                (such as your name, email, and phone number) is shared with
                that scheduling provider so your appointment can be
                confirmed and reminders can be sent. If you book through
                Calendly, Calendly&apos;s own privacy policy also applies to
                that interaction.
              </p>
            ),
          },
          {
            title: "Cookies",
            content: (
              <p>
                Our website may use cookies and similar technologies to
                remember your preferences, understand how visitors use our
                site, and improve your browsing experience. You can control
                or disable cookies through your browser settings; doing so
                may affect certain site features. We do not use cookies to
                sell your personal information.
              </p>
            ),
          },
          {
            title: "Analytics",
            content: (
              <p>
                We may use analytics tools to understand aggregate website
                traffic and usage patterns, such as which pages are visited
                and how visitors navigate our site. This information is used
                to improve our website and services and is generally
                collected in an aggregated or de-identified form.
              </p>
            ),
          },
          {
            title: "Email Communications",
            content: (
              <p>
                If you submit a form, book a call, or become a client, we may
                send you emails related to your project, appointment
                reminders, invoices, and occasional updates about our
                services. You can unsubscribe from non-essential marketing
                emails at any time using the link included in those emails or
                by contacting us directly.
              </p>
            ),
          },
          {
            title: "SMS Communications",
            content: (
              <>
                <p>
                  If you opt in by checking the applicable consent box on our
                  forms, we may send you text messages related to
                  appointment reminders, project updates, and occasionally
                  marketing offers, sent via GoHighLevel. Message frequency
                  varies, and message and data rates may apply.
                </p>
                <LegalList
                  items={[
                    "Reply STOP at any time to opt out of text messages.",
                    "Reply HELP for assistance.",
                    "SMS consent is never sold or shared with third parties for their own marketing purposes.",
                  ]}
                />
              </>
            ),
          },
          {
            title: "Data Retention",
            content: (
              <p>
                We retain personal information for as long as necessary to
                respond to your inquiry, deliver our services, comply with
                legal or tax obligations, and maintain accurate business
                records. When information is no longer needed for these
                purposes, we take reasonable steps to delete or anonymize it.
              </p>
            ),
          },
          {
            title: "Your Rights",
            content: (
              <>
                <p>
                  Depending on where you live, you may have the right to:
                </p>
                <LegalList
                  items={[
                    "Request access to the personal information we hold about you.",
                    "Request correction of inaccurate or incomplete information.",
                    "Request deletion of your personal information.",
                    "Opt out of marketing emails or text messages at any time.",
                  ]}
                />
                <p>
                  To exercise any of these rights, contact us using the
                  information below and we will respond within a reasonable
                  timeframe.
                </p>
              </>
            ),
          },
          {
            title: "Contact Information",
            content: (
              <p>
                If you have questions about this Privacy Policy or how we
                handle your information, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-brand-gold hover:text-brand-gold-light hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="font-medium text-brand-gold hover:text-brand-gold-light hover:underline"
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
            ),
          },
        ]}
      />
      <Footer />
    </>
  );
}
