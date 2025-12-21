import Header from "@/components/Header"
import Hero from "@/components/Hero";
import AIFeaturesTabSection from "@/components/AIFeaturesTabSection";
import MEODetailSection from "@/components/MEODetailSection";
import DesignerCards from "@/components/DesignerCards";
import PricingSection from "@/components/PricingSection"
import ComparisonSection from "@/components/ComparisonSection"
import WebsitePlanSection from "@/components/WebsitePlanSection"
import StackedCardsSection from "@/components/StackedCardsSection"
import PortfolioWrapper from "@/components/PortfolioWrapper"
import FAQSection from "@/components/FAQSection"
import ProcessFlow from "@/components/ProcessFlow"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import BackgroundGlow from "@/components/BackgroundGlow"
import { supabaseAdmin } from "@/lib/supabase"
import { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

interface PartnerData {
  theme_color: string;
  primary_color: string;
  secondary_color: string | null;
  accent_color: string | null;
  favicon_url: string | null;
  line_url: string | null;
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
  const { data: partnerData, error: partnerError } = await supabaseAdmin
    .from('oem_partners')
    .select('theme_color, primary_color, secondary_color, accent_color, favicon_url, line_url')
    .eq('id', id)
    .single();

  if (partnerError) {
    console.error('Error fetching partner data:', partnerError);
  }

  const { data: pricingData, error: pricingError } = await supabaseAdmin
    .from('oem_pricing')
    .select('monthly_fee, initial_setup_fee, yearly_fee, currency, trial_period_days, yearly_discount_rate, features')
    .eq('oem_partner_id', id)
    .eq('is_active', true)
    .single();

  if (pricingError) {
    console.error('Error fetching pricing data for partner ID:', id, pricingError);
  }

  // Debug log for nextpass
  if (id === '68bbd16c-bb29-4bc3-90a0-4926ab4b89d2') {
    console.log('=== NEXTPASS DEBUG ===');
    console.log('Partner ID:', id);
    console.log('Partner data:', partnerData);
    console.log('Partner error:', partnerError);
    console.log('Pricing data:', pricingData);
    console.log('Pricing error:', pricingError);
    console.log('===================');
  }

  return {
    theme_color: partnerData?.theme_color || '#2196f3',
    primary_color: partnerData?.primary_color || '#0066cc',
    secondary_color: partnerData?.secondary_color || null,
    accent_color: partnerData?.accent_color || null,
    favicon_url: partnerData?.favicon_url || null,
    line_url: partnerData?.line_url || null,
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

// Generate metadata with favicon
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params;
  const { data: partnerData } = await supabaseAdmin
    .from('oem_partners')
    .select('name, favicon_url')
    .eq('id', id)
    .single();

  const icons = partnerData?.favicon_url 
    ? {
        icon: partnerData.favicon_url,
        shortcut: partnerData.favicon_url,
        apple: partnerData.favicon_url,
      }
    : undefined;

  return {
    title: `${partnerData?.name || slug} | ホームページ制作サービス`,
    description: `${partnerData?.name || slug}が提供する高品質なホームページ制作サービス。月額料金で始められるプロフェッショナルなウェブサイト。`,
    icons,
  };
}

export default async function OEMPartnerPage({ params }: Props) {
  const { slug, id } = await params;
  const partnerData = await getPartnerData(id);

  return (
    <>
      <BackgroundGlow
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
      />
      <Header
        brandName={slug}
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
        faviconUrl={partnerData.favicon_url}
        lineUrl={partnerData.line_url}
      />
      <Hero
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
        brandName={slug}
        pricingData={partnerData.pricing}
      />
      <DesignerCards
        themeColor={partnerData.theme_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
      />
      <StackedCardsSection
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
        pricingData={partnerData.pricing}
      />
      <PortfolioWrapper
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        secondaryColor={partnerData.secondary_color}
        accentColor={partnerData.accent_color}
        lineUrl={partnerData.line_url}
      />
      <ComparisonSection
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        pricingData={partnerData.pricing}
        brandName={slug}
      />
      <WebsitePlanSection
        themeColor={partnerData.theme_color}
        primaryColor={partnerData.primary_color}
        pricingData={partnerData.pricing}
      />

      {/* Black background sections */}
      <div className="bg-black">
        <AIFeaturesTabSection
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
          secondaryColor={partnerData.secondary_color}
          accentColor={partnerData.accent_color}
        />
        <MEODetailSection
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
        />
        <PricingSection
          themeColor={partnerData.theme_color}
        />
        <FAQSection
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
          secondaryColor={partnerData.secondary_color}
          accentColor={partnerData.accent_color}
          pricingData={partnerData.pricing}
        />
        <ProcessFlow
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
          secondaryColor={partnerData.secondary_color}
          accentColor={partnerData.accent_color}
        />
        <ContactSection
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
          secondaryColor={partnerData.secondary_color}
          accentColor={partnerData.accent_color}
          lineUrl={partnerData.line_url}
        />
        <Footer
          themeColor={partnerData.theme_color}
          primaryColor={partnerData.primary_color}
          secondaryColor={partnerData.secondary_color}
          accentColor={partnerData.accent_color}
          lineUrl={partnerData.line_url}
        />
      </div>
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

// Force dynamic rendering to always fetch fresh data
export const revalidate = 0;