'use client';

import React from 'react';

interface StackedCardsSectionProps {
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
}

const StackedCardsSection: React.FC<StackedCardsSectionProps> = ({
  pricingData = null
}) => {
  const monthlyFee = pricingData
    ? `${pricingData.monthly_fee.toLocaleString()}${pricingData.currency === 'JPY' ? '円' : pricingData.currency}`
    : '5,800円';
  const initialFee = pricingData
    ? `${pricingData.initial_setup_fee.toLocaleString()}${pricingData.currency === 'JPY' ? '円' : pricingData.currency}`
    : '0円';
  return (
    <section className="relative bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* FEATURES Label */}
          <div className="inline-block mb-4">
            <span className="text-purple-600 text-sm font-semibold tracking-wider uppercase">
              FEATURES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ClickDriveが選ばれる3つの理由
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            AI技術を駆使することで、従来では不可能だった「低価格・高品質・短納期」を実現しました。
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Point 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <div className="text-purple-600 text-sm font-semibold mb-3">Point 1</div>

            <h3 className="text-xl font-bold mb-4 text-gray-900">
              高品質サイトを短期間で
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              最新のAI技術を活用し、プロフェッショナルなWebサイトを最短2週間でご提供します。
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div className="text-purple-600 text-sm font-semibold mb-3">Point 2</div>

            <h3 className="text-xl font-bold mb-4 text-gray-900">
              圧倒的低単価
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              月額{monthlyFee}という中小企業様にも導入しやすい価格設定を実現しました。初期費用は{initialFee}キャンペーン実施中。
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <div className="text-purple-600 text-sm font-semibold mb-3">Point 3</div>

            <h3 className="text-xl font-bold mb-4 text-gray-900">
              実務直結の運用機能
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              ブログ投稿、SNS運携、AIコンテンツ生成など、実務で必要な機能を全て標準搭載しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCardsSection;