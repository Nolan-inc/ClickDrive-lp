"use client"

interface PricingSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  pricingData?: {
    monthly_fee: number;
    initial_setup_fee: number;
    yearly_fee: number;
    currency: string;
    trial_period_days: number;
    yearly_discount_rate: number;
    features: string[];
  } | null;
  brandName?: string;
}

export default function PricingSection({ 
  themeColor = "#2196f3", 
  primaryColor = "#0066cc",
  secondaryColor = null,
  accentColor = null,
  pricingData = null,
  brandName = "ClickDrive"
}: PricingSectionProps) {
  // Format pricing based on custom data or default values
  const formatPrice = (amount: number, currency: string = 'JPY') => {
    if (currency === 'JPY') {
      return `${amount.toLocaleString()}円`;
    }
    return `${currency} ${amount}`;
  };

  const initialFee = pricingData ? formatPrice(pricingData.initial_setup_fee, pricingData.currency) : '0円（期間限定）';
  const monthlyFee = pricingData ? `${formatPrice(pricingData.monthly_fee, pricingData.currency)}（税込）` : '9,800円（税込）';

  const comparisonData = [
    { item: '初期費用', quickweb: initialFee, a: '15万円〜', b: '30万円', c: '0円' },
    { item: '月額費用', quickweb: monthlyFee, a: '10,000円〜', b: '月額0円', c: '月額9,800円' },
    { item: 'ページ数', quickweb: '〜12枚', a: '10枚', b: '8枚', c: '1枚' },
    { item: '制作期間', quickweb: '最短1週間／平均2週間', a: '約3週間〜', b: '1ヶ月以上', c: '2〜3週間' },
    { item: 'スマホ対応', quickweb: '標準対応（追加料金なし）', a: 'オプション対応', b: '標準対応', c: '標準対応' },
    { item: 'SEO内部対策', quickweb: '標準対応', a: '別料金', b: '一部対応', c: '別料金' },
    { item: 'デザイン提案／修正', quickweb: '5回まで', a: '2回まで', b: '標準対応', c: '5回まで' },
    { item: 'フォーム・予約機能', quickweb: '標準搭載', a: '有料', b: '有料', c: '一部有料' },
    { item: '独自ドメイン対応', quickweb: '対応（費用別途）', a: '対応（有料）', b: '対応（有料）', c: '対応（有料）' },
    { item: '契約期間の縛り', quickweb: '最低1年契約', a: '6ヶ月〜1年契約あり', b: '年間契約必須', c: '1年契約' }
  ];

  return (
    <section id="price" className="py-20 pt-32 bg-gray-50 overflow-hidden">
      <div className="relative text-center mb-4 w-full">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(20).fill(null).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Comparison
              </span>
            ))}
            {Array(20).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Comparison
              </span>
            ))}
          </div>
        </div>
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold py-4">
          <span style={{ color: secondaryColor || themeColor }}>他社</span>との<span style={{ color: accentColor || themeColor }}>比較</span>
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center mb-16" style={{ color: primaryColor }}>{brandName}の強み</p>
        
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold" style={{ color: themeColor }}>項目</th>
                <th className="text-center py-4 px-4 font-bold text-lg" style={{ color: primaryColor }}>{brandName}</th>
                <th className="text-center py-4 px-4 font-bold" style={{ color: secondaryColor || '#6b7280' }}>A社</th>
                <th className="text-center py-4 px-4 font-bold" style={{ color: accentColor || '#6b7280' }}>B社</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">C社</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="py-4 px-4 font-medium text-gray-800">{row.item}</td>
                  <td className="py-4 px-4 text-center font-bold" style={{ color: themeColor }}>{row.quickweb}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.a}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.b}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Pricing Display */}
        {pricingData && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: themeColor }}>
                {brandName}の料金プラン
              </h3>
              
              <div className={`grid gap-8 ${pricingData.yearly_fee > 0 && pricingData.yearly_fee < pricingData.monthly_fee * 12 ? 'md:grid-cols-2' : 'max-w-md mx-auto'}`}>
                {/* Monthly Plan */}
                <div className="text-center p-6 rounded-2xl border-2 border-gray-200">
                  <h4 className="text-xl font-bold mb-4">月額プラン</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ color: themeColor }}>
                      {formatPrice(pricingData.monthly_fee, pricingData.currency)}
                    </span>
                    <span className="text-gray-600">/月</span>
                  </div>
                  {pricingData.initial_setup_fee > 0 && (
                    <p className="text-sm text-gray-600 mb-4">
                      初期費用: {formatPrice(pricingData.initial_setup_fee, pricingData.currency)}
                    </p>
                  )}
                  {pricingData.trial_period_days > 0 && (
                    <p className="text-sm text-green-600 mb-4">
                      {pricingData.trial_period_days}日間無料トライアル
                    </p>
                  )}
                </div>

                {/* Yearly Plan - Only show if there's a discount or different pricing */}
                {pricingData.yearly_fee > 0 && 
                 pricingData.yearly_fee < pricingData.monthly_fee * 12 && (
                  <div className="text-center p-6 rounded-2xl border-2" style={{ borderColor: themeColor }}>
                    <h4 className="text-xl font-bold mb-4">年額プラン</h4>
                    {pricingData.yearly_discount_rate > 0 && (
                      <div className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full inline-block mb-2">
                        {pricingData.yearly_discount_rate}%OFF
                      </div>
                    )}
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: themeColor }}>
                        {formatPrice(pricingData.yearly_fee, pricingData.currency)}
                      </span>
                      <span className="text-gray-600">/年</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      月額換算: {formatPrice(Math.round(pricingData.yearly_fee / 12), pricingData.currency)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://lin.ee/llRUGcG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-block"
            style={{ backgroundColor: primaryColor }}
          >
            今すぐ始める
          </a>
        </div>
      </div>
    </section>
  )
}