import Header from "@/components/Header"
import Hero from "@/components/Hero";
import AIFeaturesTabSection from "@/components/AIFeaturesTabSection";
import MEODetailSection from "@/components/MEODetailSection";
import DesignerCards from "@/components/DesignerCards";
// import LogosSection from "@/components/LogosSection"
import PricingSection from "@/components/PricingSection"
import ComparisonSection from "@/components/ComparisonSection"
import WebsitePlanSection from "@/components/WebsitePlanSection"
import AIMarketingSupportSection from "@/components/AIMarketingSupportSection"
import StackedCardsSection from "@/components/StackedCardsSection"
import PortfolioWrapper from "@/components/PortfolioWrapper"
// import TeamSection from "@/components/TeamSection"
// import DeviceSection from "@/components/DeviceSection"
// import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import ProcessFlow from "@/components/ProcessFlow"
import ContactSection from "@/components/ContactSection"
import OEMPartnerSection from "@/components/OEMPartnerSection"
import Footer from "@/components/Footer"
import BackgroundGlow from "@/components/BackgroundGlow"

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Header />
      <Hero />
      <DesignerCards />
      <StackedCardsSection />
      <PortfolioWrapper />
      <ComparisonSection />
      <WebsitePlanSection />

      {/* Black background sections */}
      <div className="bg-black">
        <AIFeaturesTabSection />
        <MEODetailSection />
        {/* <LogosSection /> */}
        {/* <TeamSection /> */}
        {/* <TestimonialsSection /> */}
        <PricingSection />
        <FAQSection />
        <ProcessFlow />
        <ContactSection />
        <OEMPartnerSection />
        <Footer />
      </div>
    </>
  )
}

