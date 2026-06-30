import { siteConfig } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://halfabilagency.com";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Half A Bil Agency builds websites, apps, MVPs, landing pages, and business automations for companies that need practical digital systems fast.",
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
      "App Development",
      "MVP Development",
      "Business Automation",
      "AI Workflow Setup",
      "Landing Page Design",
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
