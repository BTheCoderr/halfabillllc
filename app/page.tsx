import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WorkSection } from "@/components/WorkSection";
import { FounderSection } from "@/components/FounderSection";
import { CTASection } from "@/components/CTASection";
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
        <OfferSection />
        <ProcessSection />
        <WorkSection />
        <FounderSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
