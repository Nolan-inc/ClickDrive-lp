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

interface Props {
  params: { slug: string };
}

export default function ArticlePage(_props: Props) {
  return (
    <>
      <Header />
      <Hero />
      <DesignerCards />
      <StackedCardsSection />
      <PortfolioSection />
      <DeviceSection />
      <PricingSection />
      <FAQSection />
      <ProcessFlow />
      <ContactSection />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'nextpass' }
  ];
}