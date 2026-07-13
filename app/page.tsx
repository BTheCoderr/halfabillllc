import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyAgencySection } from "@/components/WhyAgencySection";
import { ServicesSection } from "@/components/ServicesSection";
import { RecentBuildsSection } from "@/components/RecentBuildsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { OfferSection } from "@/components/OfferSection";
import { FAQSection } from "@/components/FAQSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <WhyAgencySection />
        <ServicesSection />
        <RecentBuildsSection />
        <ProcessSection />
        <OfferSection />
        <FAQSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
