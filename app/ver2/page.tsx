import Header from "@/components/Header"
import Hero from "@/components/Hero";
import DesignerCards from "@/components/DesignerCards";
import PricingSection from "@/components/PricingSection"
import StackedCardsSection from "@/components/StackedCardsSection"
import PortfolioSection from "@/components/PortfolioSection"
import DeviceSection from "@/components/DeviceSection"
import FAQSection from "@/components/FAQSection"
import ProcessFlow from "@/components/ProcessFlow"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Ver2() {
  const ver2PricingData = {
    monthly_fee: 0,
    initial_setup_fee: 50000,
    yearly_fee: 0,
    currency: 'JPY',
    trial_period_days: 0,
    yearly_discount_rate: 0,
    features: []
  }

  return (
    <>
      <Header />
      <Hero pricingData={ver2PricingData} />
      <DesignerCards />
      <StackedCardsSection />
      <PortfolioSection />
      <DeviceSection />
      <PricingSection pricingData={ver2PricingData} />
      <FAQSection />
      <ProcessFlow />
      <ContactSection />
      <Footer />
    </>
  )
}