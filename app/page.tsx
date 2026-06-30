import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServicesConfigurator } from "@/components/ServicesConfigurator";
import { ToolsStrip } from "@/components/ToolsStrip";
import { SystemsSection } from "@/components/SystemsSection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
import { RecentBuildsSection } from "@/components/RecentBuildsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { FounderSection } from "@/components/FounderSection";
import { CTASection } from "@/components/CTASection";
import { PaymentSection } from "@/components/PaymentSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <ServicesConfigurator />
        <ToolsStrip />
        <SystemsSection />
        <OfferSection />
        <ProcessSection />
        <RecentBuildsSection />
        <UseCasesSection />
        <FounderSection />
        <CTASection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
