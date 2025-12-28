"use client"

import React from 'react';

interface ComparisonSectionProps {
  themeColor?: string;
  primaryColor?: string;
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

export default function ComparisonSection({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  pricingData = null,
  brandName = "ClickDrive"
}: ComparisonSectionProps) {

  // Format pricing based on custom data or default values
  const formatPrice = (amount: number, currency: string = 'JPY') => {
    if (currency === 'JPY') {
      return `${amount.toLocaleString()}円`;
    }
    return `${currency} ${amount}`;
  };

  const initialFee = pricingData ? formatPrice(pricingData.initial_setup_fee, pricingData.currency) : '0円';
  const monthlyFee = pricingData ? formatPrice(pricingData.monthly_fee, pricingData.currency) : '5,800円';

  // Calculate competitor prices dynamically
  const baseInitialFee = pricingData?.initial_setup_fee || 0;
  const baseMonthlyFee = pricingData?.monthly_fee || 5800;
  const currency = pricingData?.currency || 'JPY';

  // A社: 初期費用+10万円、月額+1万円
  const companyAInitial = formatPrice(baseInitialFee + 100000, currency);
  const companyAMonthly = formatPrice(baseMonthlyFee + 10000, currency);

  // B社: 初期費用+20万円、月額+1万円
  const companyBInitial = formatPrice(baseInitialFee + 200000, currency);
  const companyBMonthly = formatPrice(baseMonthlyFee + 10000, currency);

  // C社: 初期費用0円、月額同じ
  const companyCInitial = '0円';
  const companyCMonthly = monthlyFee;

  const comparisonData = [
    { item: '初期費用', quickweb: initialFee + '（期間限定）', a: companyAInitial, b: companyBInitial, c: companyCInitial },
    { item: '月額費用', quickweb: monthlyFee + '（税込）', a: companyAMonthly, b: '月額' + companyBMonthly, c: '月額' + companyCMonthly },
    { item: 'AI機能', quickweb: '全機能搭載', a: 'なし', b: 'なし', c: 'なし' },
    { item: '制作期間', quickweb: '最短1週間', a: '約3週間〜', b: '1ヶ月以上', c: '2〜3週間' },
    { item: 'MEO対策', quickweb: '標準搭載', a: '別料金', b: '対応なし', c: '別料金' },
    { item: 'SNS連携', quickweb: '自動投稿', a: '手動のみ', b: '対応なし', c: '一部対応' },
    { item: 'SEO対策', quickweb: 'AI自動最適化', a: '別料金', b: '一部対応', c: '別料金' },
    { item: '更新作業', quickweb: 'AI自動化', a: '手動（有料）', b: '手動（有料）', c: '手動（有料）' },
    { item: '契約期間', quickweb: '最低1年', a: '6ヶ月〜1年', b: '年間契約必須', c: '3年契約' }
  ];

  return (
    <section className="bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            COMPARISON
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            他社サービスとの比較
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            AIの力で、従来のサービスとは一線を画す価格とクオリティを実現しました
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold" style={{ color: themeColor }}>項目</th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-lg" style={{ color: primaryColor }}>{brandName}</div>
                    <div className="text-xs text-gray-500">AI搭載</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-gray-600">A社</div>
                    <div className="text-xs text-gray-400">従来型</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-gray-600">B社</div>
                    <div className="text-xs text-gray-400">従来型</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-gray-600">C社</div>
                    <div className="text-xs text-gray-400">従来型</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => {
                  const isMonthlyFee = row.item === '月額費用';

                  return (
                    <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-4 px-4 font-medium text-gray-800">{row.item}</td>
                      <td className={`py-4 px-4 text-center ${isMonthlyFee ? 'relative' : 'font-bold'}`} style={{ color: themeColor }}>
                        {isMonthlyFee ? (
                          <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg opacity-20 animate-pulse"></div>
                            <span className="relative text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                              {row.quickweb}
                            </span>
                            <div className="absolute -top-3 -right-3">
                              <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full animate-bounce">
                                おすすめ
                              </span>
                            </div>
                          </div>
                        ) : (
                          row.quickweb
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.a}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.b}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.c}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
