"use client"

import React from 'react';

interface PricingSectionProps {
  themeColor?: string;
}

export default function PricingSection({
  themeColor = "#8b5cf6"
}: PricingSectionProps) {

  // AI Plans
  const aiPlans = [
    {
      name: 'トータルプラン',
      subtitle: 'ホームページ、MEO、SNS、SEO全てをAI で自動化',
      price: '9,800円',
      initialFee: '0円',
      popular: true,
      isDark: true,
      icon: '',
      color: '#1a1d2e',
      features: [
        '🌐 AI ホームページ制作（〜12ページ）',
        '📍 AI MEO対策（Googleマップ最適化）',
        '📸 AI Instagram運用（自動投稿）',
        '📊 AI SEO対策（記事自動生成）',
        '📅 統合カレンダー管理'
      ]
    },
    {
      name: 'ホームページ制作プラン',
      subtitle: 'AIで高品質なホームページを最短1週間で制作',
      price: '5,800円',
      initialFee: '0円',
      isDark: false,
      icon: '',
      color: '#8b5cf6',
      features: [
        '🌐 AI ホームページ制作（〜12ページ）',
        '🎨 AIデザイン最適化',
        '📝 AIコンテンツ生成',
        '📱 完全レスポンシブ対応',
        '⚡ 高速表示最適化'
      ]
    },
    {
      name: 'MEOプラン',
      subtitle: 'Googleマップからの集客を最大化',
      price: '3,800円',
      initialFee: '0円',
      isDark: false,
      icon: '',
      color: '#8b5cf6',
      features: [
        '📍 Googleビジネスプロフィール最適化',
        '⭐ AI口コミ返信（感情分析付き）',
        '📝 最新情報の自動投稿',
        '📊 競合分析レポート',
        '🎯 ローカルSEO対策'
      ]
    },
    {
      name: 'Instaプラン',
      subtitle: 'Instagramを完全自動化',
      price: '3,800円',
      initialFee: '0円',
      isDark: false,
      icon: '',
      color: '#8b5cf6',
      features: [
        '📸 AI画像生成（InstaGen AI）',
        '✍️ キャプション自動作成',
        '#️⃣ ハッシュタグ最適化',
        '⏰ 最適時間に自動投稿',
        '📊 インサイト分析'
      ]
    },
    {
      name: 'SEOプラン',
      subtitle: 'AI記事で検索上位を獲得',
      price: '3,800円',
      initialFee: '0円',
      isDark: false,
      icon: '',
      color: '#8b5cf6',
      features: [
        '📝 AI記事自動生成（月10記事）',
        '🔍 SEOキーワード最適化',
        '📊 競合分析レポート',
        '✍️ リライト提案',
        '📈 アクセス解析'
      ]
    }
  ];

  return (
    <section id="price" className="relative py-20 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="text-sm font-bold tracking-wider mb-4"
            style={{ color: themeColor }}
          >
            PRICING
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            AIで実現する 圧倒的コスパ
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            人件費の97%削減を実現。浮いた予算を成長投資へ。
          </p>
        </div>
      </div>

      {/* Plans Grid - 5 Columns */}
      <div className="w-full px-4 mb-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {aiPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  plan.isDark ? 'bg-[#1a1d2e]' : 'bg-gray-900 border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="text-white text-xs px-3 py-1.5 rounded-full font-bold"
                      style={{ backgroundColor: themeColor }}
                    >
                      人気No.1
                    </span>
                  </div>
                )}

                {/* Plan Content */}
                <div className="p-6">
                  <h4 className={`text-lg font-bold mb-2 ${plan.isDark ? 'text-white' : 'text-white'} ${plan.popular ? 'mt-8' : ''}`}>
                    {plan.name}
                  </h4>
                  <p className={`text-sm mb-6 ${plan.isDark ? 'text-gray-300' : 'text-gray-300'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <p className={`text-xs mb-1 ${plan.isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                      月額
                    </p>
                    <p className={`text-3xl font-bold mb-4 ${plan.isDark ? 'text-white' : 'text-white'}`}>
                      {plan.price}
                    </p>
                    <p className={`text-xs mb-1 ${plan.isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                      初期費用 <span className="line-through">50,000円</span>{' '}
                      <span className="text-red-500 font-bold">0円</span>
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-500 flex-shrink-0 mt-0.5">✓</span>
                          <span className={`text-sm ${plan.isDark ? 'text-gray-300' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://lin.ee/llRUGcG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 ${
                      plan.isDark
                        ? 'text-white'
                        : 'text-white border-2 border-gray-600'
                    }`}
                    style={plan.isDark ? { backgroundColor: themeColor } : {}}
                  >
                    問い合わせする
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}