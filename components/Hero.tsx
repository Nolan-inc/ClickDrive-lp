import React from 'react';

interface HeroProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  brandName?: string;
  pricingData?: {
    monthly_fee: number;
    initial_setup_fee: number;
    yearly_fee: number;
    currency: string;
    trial_period_days: number;
    yearly_discount_rate: number;
    features: string[];
  } | null;
}

const Hero = ({ 
  themeColor = "#2196f3", 
  primaryColor = "#0066cc", 
  secondaryColor = null,
  accentColor = null,
  brandName = "ClickDrive",
  pricingData = null
}: HeroProps) => {
  // Format pricing for display
  const formatPrice = (amount: number, currency: string = 'JPY') => {
    if (currency === 'JPY') {
      return `${amount.toLocaleString()}円`;
    }
    return `${currency} ${amount}`;
  };

  const monthlyFee = pricingData ? formatPrice(pricingData.monthly_fee, pricingData.currency) : '9,800円';
  

  return (
    <section className="bg-white pt-32 pb-0 relative overflow-hidden">
      {/* Background decorative elements using secondary and accent colors */}
      <div className="absolute inset-0 pointer-events-none">
        {secondaryColor && (
          <div 
            className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: secondaryColor }}
          />
        )}
        {accentColor && (
          <div 
            className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: accentColor }}
          />
        )}
      </div>
      
      <div className="absolute inset-x-0 top-0 h-32 flex items-center justify-center overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap">
          {Array(20).fill(null).map((_, i) => (
            <span key={i} className="text-7xl md:text-9xl font-bold uppercase tracking-wider select-none mr-8" style={{ color: `${themeColor}30` }}>
              {brandName}
            </span>
          ))}
          {Array(20).fill(null).map((_, i) => (
            <span key={`dup-${i}`} className="text-7xl md:text-9xl font-bold uppercase tracking-wider select-none mr-8" style={{ color: `${themeColor}30` }}>
              {brandName}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="relative">
            <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight py-4">
              <span style={{ color: secondaryColor || themeColor }}>安い</span>
              <span className="text-gray-900">と</span>
              <span style={{ color: accentColor || themeColor }}>高品質</span>
              <span className="text-gray-900">って両立できるんだ。</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            最短1週間で公開！<br />
            安いのに超高品質webサイトを月額{monthlyFee}で作れる！
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">継続率</p>
            <p className="text-4xl md:text-5xl font-bold" style={{ color: secondaryColor || themeColor }}>98%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">累計制作件数</p>
            <p className="text-4xl md:text-5xl font-bold" style={{ color: accentColor || themeColor }}>100<span className="text-2xl">件〜</span></p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">ご相談後最短</p>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: themeColor }}>即日対応</p>
          </div>
          <div className="relative">
            <div 
              className="rounded-2xl px-5 py-4 relative border"
              style={{ 
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30` 
              }}
            >
              <div className="flex items-center gap-2">
                <div className="text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" style={{ backgroundColor: primaryColor }}>
                  ✓
                </div>
                <div>
                  <p className="text-lg font-bold leading-tight" style={{ color: primaryColor }}>
                    {pricingData && pricingData.initial_setup_fee === 0 ? '初期費用0円！' : pricingData ? `初期費用${formatPrice(pricingData.initial_setup_fee, pricingData.currency)}` : '初期費用0円！'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;