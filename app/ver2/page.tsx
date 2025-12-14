import Header from "@/components/Header"
import Hero from "@/components/Hero";
import DesignerCards from "@/components/DesignerCards";
import PricingSection from "@/components/PricingSection"
import ComparisonSection from "@/components/ComparisonSection"
import StackedCardsSection from "@/components/StackedCardsSection"
import PortfolioWrapper from "@/components/PortfolioWrapper"
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
      <PortfolioWrapper />
      <DeviceSection />
      <PricingSection />
      <FAQSection />
      <ComparisonSection pricingData={ver2PricingData} brandName="ClickDrive" />
      <ProcessFlow />
      <ContactSection />
      <Footer />
    </>
  )
}