"use client"

import React, { useState, useEffect } from 'react';

interface WebsitePlanSectionProps {
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
  isPartnerPage?: boolean;
  lineUrl?: string | null;
}

export default function WebsitePlanSection({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  pricingData = null,
  isPartnerPage = false,
  lineUrl = null
}: WebsitePlanSectionProps) {
  const [showOptions, setShowOptions] = useState(false);

  // LINE URL - use partner URL if available, otherwise default
  const finalLineUrl = lineUrl || 'https://lin.ee/llRUGcG';

  // Format pricing for display
  const formatPrice = (amount: number, currency: string = 'JPY') => {
    if (currency === 'JPY') {
      return amount.toLocaleString();
    }
    return `${currency} ${amount}`;
  };

  // Get pricing values - use pricingData if available, otherwise use defaults
  const monthlyFee = pricingData ? formatPrice(pricingData.monthly_fee, pricingData.currency) : '5,800';
  const initialFee = pricingData ? formatPrice(pricingData.initial_setup_fee, pricingData.currency) : '0';
  const currency = pricingData?.currency === 'JPY' ? '円' : pricingData?.currency || '円';

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showOptions) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showOptions]);

  const websiteFeatures = [
    {
      icon: '🎨',
      title: 'プロ品質のデザイン',
      description: 'AIが業界とターゲットを分析し、最適なデザインを自動生成'
    },
    {
      icon: '⚡',
      title: '最短1週間で公開',
      description: '従来の制作期間を大幅短縮。スピーディーな立ち上げを実現'
    },
    {
      icon: '📱',
      title: '完全レスポンシブ',
      description: 'PC・タブレット・スマホ、あらゆるデバイスで最適表示'
    },
    {
      icon: '📝',
      title: 'AIコンテンツ生成',
      description: 'キャッチコピーから説明文まで、魅力的な文章を自動作成'
    },
    {
      icon: '🔍',
      title: 'SEO最適化済み',
      description: '検索エンジンに強い構造で、集客力を最大化'
    },
    {
      icon: '🔧',
      title: '簡単更新システム',
      description: '専門知識不要。直感的な管理画面で誰でも更新可能'
    }
  ];

  const includedPages = [
    'トップページ',
    'サービス紹介',
    '会社概要',
    'お問い合わせフォーム',
    'プライバシーポリシー',
    '特定商取引法',
    '+ 最大6ページまで追加可能'
  ];

  const targetCustomers = [
    {
      emoji: '🏢',
      title: '新規事業を始める方',
      description: 'コストを抑えてビジネスをスタート'
    },
    {
      emoji: '🛍️',
      title: '小規模事業者',
      description: '高額な制作費が負担な個人事業主・小規模店舗'
    },
    {
      emoji: '⏰',
      title: '早急にサイトが必要な方',
      description: '展示会やイベントに間に合わせたい'
    },
    {
      emoji: '🔄',
      title: 'サイトのリニューアル',
      description: '古くなったサイトを現代的にアップデート'
    }
  ];

  const optionPricing = [
    {
      category: 'ページ追加',
      options: [
        { name: '追加ページ（1ページ）', price: '5,000円' },
        { name: '複雑なページ（フォーム・予約システムなど）', price: '10,000円〜' }
      ]
    },
    {
      category: '機能追加',
      options: [
        { name: 'お問い合わせフォームカスタマイズ', price: '8,000円' },
        { name: 'ブログ機能', price: '15,000円' },
        { name: '会員登録システム', price: '50,000円〜' },
        { name: 'オンライン決済機能', price: '30,000円〜' },
        { name: '予約システム', price: '40,000円〜' }
      ]
    },
    {
      category: 'デザイン',
      options: [
        { name: 'ロゴデザイン制作', price: '20,000円〜' },
        { name: 'バナー制作（1枚）', price: '5,000円' },
        { name: 'オリジナルイラスト制作', price: '10,000円〜' },
        { name: '写真撮影（半日）', price: '50,000円〜' }
      ]
    },
    {
      category: 'コンテンツ',
      options: [
        { name: '取材・ライティング（1記事）', price: '15,000円' },
        { name: '商品撮影（10点まで）', price: '20,000円' },
        { name: '動画制作（30秒）', price: '50,000円〜' }
      ]
    },
    {
      category: 'その他',
      options: [
        { name: 'SSL証明書設定', price: '無料' },
        { name: 'ドメイン取得代行', price: '3,000円' },
        { name: 'Google Analytics設定', price: '5,000円' },
        { name: 'サーバー移行作業', price: '20,000円〜' }
      ]
    }
  ];

  return (
    <section className="relative pt-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-5" style={{ background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)` }}></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-5" style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium mb-4" style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            WEBSITE PLAN
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ホームページ制作プラン
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Webサイトだけが必要な方に最適。AIの力で、プロ品質のホームページを驚きの価格で
          </p>
        </div>

        {/* Three Plans Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className={`grid gap-6 lg:gap-8 ${isPartnerPage ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>

            {/* ミニマムプラン */}
            {!isPartnerPage && (
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  ミニマムプラン
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  商談時に作成したHPをそのまま使用
                </p>

                <div className="mb-6">
                  <div className="text-sm md:text-base text-gray-500 mb-1">制作費用</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">0</span>
                    <span className="text-2xl md:text-3xl text-gray-600">円</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ページ数 1ページ</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>商談時のHPをそのまま納品</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>スマホ対応（レスポンシブ）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SEO内部対策</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>アニメーションつき</span>
                  </li>
                </ul>

                <div className="p-4 bg-yellow-50 rounded-xl mb-6">
                  <p className="text-sm md:text-base text-gray-700 text-center">
                    ⚠️ 別途サーバー代等<br/>月額2,000円かかります
                  </p>
                </div>

                <a
                  href={finalLineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-gray-900 px-6 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
            )}

            {/* プレミアムプラン */}
            <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden ${!isPartnerPage ? 'transform md:scale-105' : ''}`}>
              {/* Popular Badge */}
              {!isPartnerPage && (
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center px-3 py-1 text-xs md:text-sm font-bold text-white rounded-full shadow-lg" style={{ backgroundColor: themeColor }}>
                  人気
                </span>
              </div>
              )}

              {/* Glow Effect */}
              {!isPartnerPage && (
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25"></div>
              )}

              <div className="relative bg-white rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  プレミアムプラン
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  月5回までの修正、デザイン提案可能
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm md:text-base text-gray-500 mb-1">月額</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-gray-900">{monthlyFee}</span>
                      <span className="text-2xl md:text-3xl text-gray-600">{currency}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm md:text-base text-gray-500 mb-1">初期費用</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold" style={{ color: themeColor }}>{initialFee}</span>
                      <span className="text-xl md:text-2xl text-gray-600">{currency}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ページ数 5〜10ページ</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>サーバー費用込み</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>月5回までの修正対応</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>デザイン提案可能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>アニメーションつき</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>スマホ対応（レスポンシブ）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SEO内部対策</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ブログ機能</span>
                  </li>
                </ul>

                <a
                  href={finalLineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white px-6 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:opacity-90 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: themeColor }}
                >
                  お問い合わせ
                </a>
              </div>
            </div>

            {/* プロプラン */}
            {!isPartnerPage && (
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* PRO Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center px-3 py-1 text-xs md:text-sm font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500">
                  ⭐ PRO
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  プロプラン
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  高品質なデザインHP制作
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm md:text-base text-gray-500 mb-1">月額</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-gray-900">5,800</span>
                      <span className="text-2xl md:text-3xl text-gray-600">円</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm md:text-base text-gray-500 mb-1">初期費用</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold" style={{ color: themeColor }}>100,000</span>
                      <span className="text-xl md:text-2xl text-gray-600">円</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ページ数 5〜15ページ</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>基本的なプレミアムプランの内容</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>高品質デザイン制作</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ハイクオリティアニメーション付き</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>お問い合わせ機能</span>
                  </li>
                </ul>

                <a
                  href={finalLineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-gray-900 px-6 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 hover:bg-gray-50 transition-all duration-300"
                  style={{ borderColor: themeColor }}
                >
                  お問い合わせ
                </a>
              </div>
            </div>
            )}

          </div>
        </div>

        {/* Optional Pricing Button */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <button
            onClick={() => setShowOptions(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: themeColor }}
          >
            <span>💰</span>
            細かいオプション費用はこちら
          </button>
        </div>

        {/* Modal Overlay */}
        {showOptions && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn"
            onClick={() => setShowOptions(false)}
          >
            {/* Modal Content */}
            <div
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowOptions(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                  <span>📋</span>
                  オプション料金表
                </h3>
                <p className="text-gray-600 mb-8 text-center">
                  基本プランに追加できるオプションサービスです
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {optionPricing.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></span>
                        {category.category}
                      </h4>
                      <ul className="space-y-3">
                        {category.options.map((option, optionIndex) => (
                          <li key={optionIndex} className="flex justify-between items-start text-sm">
                            <span className="text-gray-700 flex-1">{option.name}</span>
                            <span className="font-semibold text-gray-900 ml-4 whitespace-nowrap">{option.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700 text-center">
                    💡 <strong>ポイント：</strong>複数のオプションを組み合わせることも可能です。お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            プランの特徴
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {websiteFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Customers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            こんな方におすすめ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetCustomers.map((customer, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-3">{customer.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{customer.title}</h4>
                <p className="text-sm text-gray-600">{customer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            まずは無料相談から
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            御社のビジネスに最適なWebサイトをご提案します。<br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={finalLineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: themeColor }}
            >
              <span>💬</span>
              LINEで相談する
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <span>📧</span>
              資料請求
            </a>
          </div>
        </div>
      </div>

      {/* Gradient transition to black */}
      <div className="h-64 bg-gradient-to-b from-transparent via-gray-500/20 to-black"></div>
    </section>
  );
}
