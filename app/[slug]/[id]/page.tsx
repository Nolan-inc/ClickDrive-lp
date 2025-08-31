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
import { supabase } from "@/lib/supabase"

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

interface PartnerData {
  theme_color: string;
  primary_color: string;
  favicon_url: string | null;
  pricing: {
    monthly_fee: number;
    initial_setup_fee: number;
    yearly_fee: number;
    currency: string;
    trial_period_days: number;
    yearly_discount_rate: number;
    features: string[];
  } | null;
}

async function getPartnerData(id: string): Promise<PartnerData> {
  const { data: partnerData } = await supabase
    .from('oem_partners')
    .select('theme_color, primary_color, favicon_url')
    .eq('id', id)
    .single();

  const { data: pricingData } = await supabase
    .from('oem_pricing')
    .select('monthly_fee, initial_setup_fee, yearly_fee, currency, trial_period_days, yearly_discount_rate, features')
    .eq('oem_partner_id', id)
    .eq('is_active', true)
    .single();

  return {
    theme_color: partnerData?.theme_color || '#2196f3',
    primary_color: partnerData?.primary_color || '#0066cc',
    favicon_url: partnerData?.favicon_url || null,
    pricing: pricingData ? {
      monthly_fee: parseFloat(pricingData.monthly_fee),
      initial_setup_fee: parseFloat(pricingData.initial_setup_fee),
      yearly_fee: parseFloat(pricingData.yearly_fee),
      currency: pricingData.currency,
      trial_period_days: pricingData.trial_period_days,
      yearly_discount_rate: parseFloat(pricingData.yearly_discount_rate),
      features: pricingData.features || []
    } : null
  };
}

export default async function OEMPartnerPage({ params }: Props) {
  const { slug, id } = await params;
  const partnerData = await getPartnerData(id);
  
  return (
    <>
      <Header 
        brandName={slug} 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        faviconUrl={partnerData.favicon_url}
      />
      <Hero 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        brandName={slug}
        pricingData={partnerData.pricing}
      />
      <DesignerCards 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <StackedCardsSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <PortfolioSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <DeviceSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <PricingSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        pricingData={partnerData.pricing}
        brandName={slug}
      />
      <FAQSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <ProcessFlow 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <ContactSection 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
      <Footer 
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
      />
    </>
  )
}

export async function generateStaticParams() {
  // OEM partners data
  const partners = [
    { slug: 'webdrive', id: '4d54a287-857d-41d1-90e8-6dd480ec8acc' },
    { slug: 'wahrheit-page', id: 'fbb5bec1-af9f-4a97-9c7a-d0f1f97e14ad' },
    { slug: 'nextpass', id: '68bbd16c-bb29-4bc3-90a0-4926ab4b89d2' },
    { slug: 'rise', id: '6a02a5f8-1a80-480a-8ce3-4c2b2c547095' },
    { slug: 'Woltz', id: '628f4319-4625-4e1f-a7d3-549cbd4e9423' },
    { slug: 'nolan', id: 'be8429f6-c69e-4e56-b80a-7ad74a4f5ab6' },
    { slug: 'toridori', id: 'f5c94649-c470-42ff-ab00-9091f2d4c119' }
  ];

  return partners.map((partner) => ({
    slug: partner.slug,
    id: partner.id
  }));
}