import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBookingHref, siteConfig } from "@/lib/site-data";

const depositCards = [
  {
    title: "Starter Website Deposit",
    amount: "$250 deposit",
    description: "Secure your spot for a one-page starter website build.",
    href: siteConfig.starterPaymentUrl,
    buttonLabel: "Pay Starter Deposit",
  },
  {
    title: "Business System Deposit",
    amount: "$500 deposit",
    description:
      "For website plus booking, forms, payments, or automation work.",
    href: siteConfig.systemPaymentUrl,
    buttonLabel: "Pay System Deposit",
    highlighted: true,
  },
  {
    title: "Custom Build Deposit",
    amount: "Custom payment link after consultation",
    description:
      "For custom apps, portals, dashboards, or advanced automation.",
    href: siteConfig.customQuoteUrl,
    buttonLabel: "Request Custom Quote",
  },
];

export function PaymentSection() {
  return (
    <section id="payments" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="Ready to Start After the Call?"
          subtitle="Once the scope is clear, we'll send a secure payment link for the deposit or package that matches your project."
          eyebrow="Deposits"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {depositCards.map((card) => (
            <GlassCard
              key={card.title}
              hover={false}
              className={`flex flex-col ${
                card.highlighted
                  ? "gradient-border ring-1 ring-brand-orange/25 shadow-lg shadow-brand-orange/10"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-2xl font-bold text-brand-orange">
                {card.amount}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {card.description}
              </p>
              <Button
                href={card.href}
                variant={card.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full py-4 text-base"
              >
                {card.buttonLabel}
              </Button>
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Not ready to pay yet?{" "}
          <Link
            href={getBookingHref()}
            className="font-medium text-brand-orange hover:text-brand-orange-light hover:underline"
          >
            Book a free call
          </Link>{" "}
          or{" "}
          <Link
            href="#contact"
            className="font-medium text-brand-orange hover:text-brand-orange-light hover:underline"
          >
            submit a project request
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
