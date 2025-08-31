'use client';

import React from 'react';

interface ProcessFlowProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

const ProcessFlow = ({ 
  themeColor = "#2196f3", 
  primaryColor = "#0066cc",
  secondaryColor = null,
  accentColor = null
}: ProcessFlowProps) => {
  const steps = [
    {
      step: 'お問い合わせ受付',
      responsible: 'クライアント様',
      description: 'フォームからご連絡いただき、担当者より折り返しご案内します。',
    },
    {
      step: '決済',
      responsible: 'クライアント様',
      description: '（Stripe等対応）。',
    },
    {
      step: 'ヒアリング / お打ち合わせ',
      responsible: 'クライアント様 / ClickDrive',
      description: '保有資料やリサーチを元に、ユーザー理解を深め、サイト構成を設計します。',
    },
    {
      step: '制作 / コーディング実装',
      responsible: 'ClickDrive',
      description: 'サイト設計に基づき、デザイン・コーディングを実施します（スマホ対応）。',
    },
    {
      step: 'デザイン確認',
      responsible: 'クライアント様 / ClickDrive',
      description: '完成したデザインをご確認いただき、フィードバックを伺います。',
    },
    {
      step: '修正',
      responsible: 'ClickDrive',
      description: 'ご指摘内容をもとに修正対応します（回数制限ありの場合も）。',
    },
    {
      step: '納品',
      responsible: 'クライアント様 / ClickDrive',
      description: '公開またはデータ納品を行い、必要に応じて運用サポートをご提案します。',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="relative text-center mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(20).fill(null).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Process Flow
              </span>
            ))}
            {Array(20).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Process Flow
              </span>
            ))}
          </div>
        </div>
        <h2 className="relative text-3xl md:text-4xl font-bold py-4">
          <span style={{ color: secondaryColor || themeColor }}>制作進行</span><span style={{ color: accentColor || themeColor }}>イメージ</span>
        </h2>
        <p className="relative text-base md:text-lg mt-4 px-4 md:px-0" style={{ color: primaryColor }}>
          ヒアリングからサイト公開・運用まで、安心の一気通貫体制
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4">
          {steps.map((item, index) => {
            const getStepColor = (stepIndex: number) => {
              const colors = [themeColor, secondaryColor || primaryColor, accentColor || primaryColor, primaryColor];
              return colors[stepIndex % colors.length];
            };
            
            return (
            <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: getStepColor(index) }}>
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.step}</h3>
                <span className="text-sm text-gray-600 block mb-2">{item.responsible}</span>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://lin.ee/llRUGcG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-3"
            style={{ backgroundColor: primaryColor }}
          >
            無料で相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;