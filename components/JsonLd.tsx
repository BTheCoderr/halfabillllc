import { siteConfig } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://halfabilagency.com";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Half A Bil Agency builds websites, CRM systems, and automations that help local service businesses generate more leads and save time.",
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    slogan: siteConfig.brandLine,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Website Design",
      "Website Redesign",
      "CRM Setup",
      "Business Automation",
      "Lead Capture Systems",
      "Appointment Booking",
      "Google Business Profile",
      "SEO Foundations",
    ],
    priceRange: "$$",
    image: `${siteUrl}/opengraph-image`,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
