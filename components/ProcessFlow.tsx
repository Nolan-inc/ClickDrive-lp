'use client';

import React from 'react';

const ProcessFlow = () => {
  const steps = [
    {
      step: 'お問い合わせ受付',
      responsible: 'クライアント',
      description: 'まずはお気軽にお問い合わせください',
    },
    {
      step: 'ヒアリングフォーム記入',
      responsible: 'クライアント',
      description: 'プロジェクトの詳細をお伺いします',
    },
    {
      step: 'サイト構成案・ワイヤーフレーム提案',
      responsible: 'Nolan',
      description: '最適な構成をご提案いたします',
    },
    {
      step: '初回ヒアリング',
      responsible: 'クライアント/Nolan',
      description: '詳細な要望を確認させていただきます',
    },
    {
      step: '概算見積り提出',
      responsible: 'Nolan',
      description: '透明性のある料金をご提示します',
    },
    {
      step: 'Stripe決済/プライバシーポリシー/利用規約同意',
      responsible: 'クライアント/Nolan',
      description: '安全な決済システムで契約を締結',
    },
    {
      step: 'デザイン制作開始',
      responsible: 'Nolan',
      description: 'プロのデザイナーが制作を開始',
    },
    {
      step: 'デザイン確認・修正',
      responsible: 'Nolan',
      description: '納得いくまで修正対応いたします',
    },
    {
      step: 'コーディング・システム実装',
      responsible: 'Nolan',
      description: '最新技術で実装いたします',
    },
    {
      step: '最終確認・納品',
      responsible: 'Nolan',
      description: '品質チェック後、納品いたします',
    },
    {
      step: '管理システム操作方法・運用サポート案内',
      responsible: 'クライアント/Nolan',
      description: '運用開始後も安心のサポート',
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
        <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 py-4">
          お問い合わせからの流れ
        </h2>
        <p className="relative text-lg text-gray-600 mt-4">
          シンプルで分かりやすいプロセスで、プロジェクトを成功に導きます
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connection Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                  <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z"/>
                  </svg>
                </div>
              )}
              
              {/* Step Item */}
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.step}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                    item.responsible === 'Nolan' 
                      ? 'bg-purple-100 text-purple-700' 
                      : item.responsible === 'クライアント'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {item.responsible}
                  </span>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center gap-3">
            無料で相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;