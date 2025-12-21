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
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
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

  const monthlyFee = pricingData ? formatPrice(pricingData.monthly_fee, pricingData.currency) : '5,800円';


  return (
    <section className="bg-transparent pt-32 pb-0 relative overflow-hidden">

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
        <div className="text-center mb-8 md:mb-12">
          <div className="relative">
            <h1 className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight py-4 leading-tight">
              <span style={{ color: secondaryColor || themeColor }}>業界トップレベル</span>
              <span className="text-gray-900">の</span>
              <br className="sm:hidden" />
              <span className="text-gray-900">ホームページを</span>
              <br />
              <span className="text-gray-900">月額</span>
              <span style={{ color: accentColor || themeColor }}>5,800円</span>
              <br className="sm:hidden" />
              <span className="text-gray-900">で作ります</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            最短1週間で公開！<br />
            安いのに超高品質webサイトを月額{monthlyFee}で作れる！
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 px-2">
          <div className="text-center min-w-[100px]">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">継続率</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: secondaryColor || themeColor }}>98%</p>
          </div>
          <div className="text-center min-w-[100px]">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">累計制作件数</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: accentColor || themeColor }}>100<span className="text-xl sm:text-2xl">件〜</span></p>
          </div>
          <div className="text-center min-w-[100px]">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">ご相談後最短</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: themeColor }}>即日対応</p>
          </div>
          <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
            <div
              className="rounded-2xl px-4 sm:px-5 py-3 sm:py-4 relative border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`
              }}
            >
              <div className="flex items-center gap-2 justify-center">
                <div className="text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" style={{ backgroundColor: primaryColor }}>
                  ✓
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold leading-tight" style={{ color: primaryColor }}>
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