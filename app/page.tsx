import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProofOfWorkSection } from "@/components/ProofOfWorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServicesConfigurator } from "@/components/ServicesConfigurator";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { RecentBuildsSection } from "@/components/RecentBuildsSection";
import { BuiltSystemsFlowSection } from "@/components/BuiltSystemsFlowSection";
import { LiveSystemStackSection } from "@/components/LiveSystemStackSection";
import { TechCapabilitiesSection } from "@/components/TechCapabilitiesSection";
import { WhyAgencySection } from "@/components/WhyAgencySection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
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
        <ProofOfWorkSection />
        <ServicesSection />
        <ServicesConfigurator />
        <WhatWeBuildSection />
        <RecentBuildsSection />
        <BuiltSystemsFlowSection />
        <LiveSystemStackSection />
        <TechCapabilitiesSection />
        <WhyAgencySection />
        <OfferSection />
        <ProcessSection />
        <FounderSection />
        <CTASection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
