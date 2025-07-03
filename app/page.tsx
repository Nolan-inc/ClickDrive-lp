import Header from "@/components/Header"
import Hero from "@/components/Hero";
import DesignerCards from "@/components/DesignerCards";
// import LogosSection from "@/components/LogosSection"
import PricingSection from "@/components/PricingSection"
import StackedCardsSection from "@/components/StackedCardsSection"
// import TeamSection from "@/components/TeamSection"
import DeviceSection from "@/components/DeviceSection"
// import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import ProcessFlow from "@/components/ProcessFlow"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DesignerCards />
      {/* <LogosSection /> */}
      <StackedCardsSection />
      {/* <TeamSection /> */}
      <DeviceSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FAQSection />
      <ProcessFlow />
      <ContactSection />
      <Footer />
    </>
  )
}
