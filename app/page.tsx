import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SystemsSection } from "@/components/SystemsSection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
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
        <SystemsSection />
        <OfferSection />
        <ProcessSection />
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
