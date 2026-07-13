import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalDocument, LegalList } from "@/components/legal/LegalDocument";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `The terms and conditions that govern projects and services delivered by ${siteConfig.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <LegalDocument
        title="Terms of Service"
        lastUpdated="July 13, 2026"
        intro={
          <p>
            These Terms of Service (&quot;Terms&quot;) govern any project,
            proposal, quote, or service delivered by {siteConfig.name}
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            submitting a project request, accepting a proposal, or engaging
            us for services, you (&quot;client&quot;) agree to be bound by
            these Terms.
          </p>
        }
        sections={[
          {
            title: "Website Development",
            content: (
              <p>
                Website development engagements include design, front-end
                and back-end implementation, and deployment of the agreed
                scope. Unless stated otherwise in your proposal, hosting,
                domain registration, and third-party service fees (such as
                CMS, email, or booking platforms) are the client&apos;s
                responsibility after launch.
              </p>
            ),
          },
          {
            title: "Mobile App Development",
            content: (
              <p>
                Mobile app engagements include design and development of the
                agreed application scope for the platform(s) specified in
                your proposal. App store developer accounts, submission
                fees, and ongoing store compliance are the client&apos;s
                responsibility unless otherwise agreed in writing.
              </p>
            ),
          },
          {
            title: "AI Automation Services",
            content: (
              <p>
                AI automation and workflow engagements include the design,
                configuration, and integration of automations, AI-driven
                tools, and connected software as defined in your proposal.
                Ongoing subscription costs for third-party platforms used to
                power these automations (such as CRM, AI, or integration
                tools) are the client&apos;s responsibility unless included
                in your plan.
              </p>
            ),
          },
          {
            title: "Software Development",
            content: (
              <p>
                Custom software and MVP engagements are scoped and delivered
                according to the specifications outlined in your proposal.
                Work outside the agreed scope, including new features or
                significant changes to requirements, is treated as a change
                order and billed separately.
              </p>
            ),
          },
          {
            title: "Estimates",
            content: (
              <p>
                All quotes and estimates are based on the information
                available at the time they are provided and are valid for 30
                days unless otherwise stated. Final pricing may be adjusted
                if the scope of work changes materially once a project
                begins.
              </p>
            ),
          },
          {
            title: "Deposits",
            content: (
              <p>
                Projects typically require a non-refundable deposit before
                work begins, as specified in your proposal or invoice. The
                deposit reserves our schedule and covers initial discovery,
                planning, and setup work.
              </p>
            ),
          },
          {
            title: "Payments",
            content: (
              <p>
                Remaining balances are billed according to the payment
                schedule in your proposal (e.g., milestone-based or upon
                completion). Invoices are due upon receipt unless otherwise
                agreed. Late payments may pause active work until the
                account is brought current.
              </p>
            ),
          },
          {
            title: "Revisions",
            content: (
              <p>
                Each project includes a defined number of revision rounds as
                outlined in your proposal. Additional revisions beyond that
                allowance, or changes requested after a deliverable has been
                approved, may incur additional fees.
              </p>
            ),
          },
          {
            title: "Intellectual Property",
            content: (
              <p>
                Upon receipt of full payment, the client receives ownership
                of the final deliverables created specifically for their
                project. We retain the right to reuse general methods,
                frameworks, and non-client-specific code or components across
                other projects, and to display completed work in our
                portfolio unless the client requests otherwise in writing.
              </p>
            ),
          },
          {
            title: "Client Responsibilities",
            content: (
              <>
                <p>To keep your project on track, the client agrees to:</p>
                <LegalList
                  items={[
                    "Provide timely feedback, approvals, and requested content or assets.",
                    "Supply accurate information about the business, goals, and requirements.",
                    "Maintain access credentials for any third-party accounts required for the project.",
                    "Respond to communications within a reasonable timeframe to avoid project delays.",
                  ]}
                />
              </>
            ),
          },
          {
            title: "Project Timelines",
            content: (
              <p>
                Timelines provided in proposals are estimates based on
                prompt client feedback and content delivery. Delays caused by
                the client (late feedback, missing assets, or scope changes)
                may extend the original timeline and are not considered a
                breach of these Terms by {siteConfig.name}.
              </p>
            ),
          },
          {
            title: "Refunds",
            content: (
              <p>
                Deposits are non-refundable once work has begun, as they
                cover time and resources already committed to your project.
                Refunds for work completed but not yet delivered are
                evaluated on a case-by-case basis and are issued at our sole
                discretion, prorated for work already performed.
              </p>
            ),
          },
          {
            title: "Limitation of Liability",
            content: (
              <p>
                To the fullest extent permitted by law, {siteConfig.name}
                &apos;s total liability for any claim arising from our
                services is limited to the amount paid by the client for the
                services giving rise to the claim. We are not liable for
                indirect, incidental, or consequential damages, including
                loss of profits, data, or business opportunities, arising
                from the use of deliverables we provide.
              </p>
            ),
          },
          {
            title: "Governing Law",
            content: (
              <p>
                These Terms are governed by the laws of the State of Rhode
                Island, without regard to conflict-of-law principles. Any
                disputes arising from these Terms or our services will be
                resolved in the state or federal courts located in Rhode
                Island.
              </p>
            ),
          },
          {
            title: "Contact Information",
            content: (
              <p>
                Questions about these Terms of Service can be directed to{" "}
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
