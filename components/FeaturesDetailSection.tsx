'use client';

import React, { useState } from 'react';

interface FeaturesDetailSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

const FeaturesDetailSection: React.FC<FeaturesDetailSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'ai-website',
      title: 'AI ホームページ制作 & SEO',
      icon: '🌐',
      color: themeColor,
      overview: 'デザイン、画像解析、文章生成までAIが一気通貫で作成',
      details: [
        {
          label: 'デザイン生成',
          description: 'AIが業界・ブランドに最適なデザインを自動生成'
        },
        {
          label: 'レスポンシブ対応',
          description: 'PC・スマホ・タブレット全デバイスに自動最適化'
        },
        {
          label: 'SEO対策',
          description: '検索に強いブログ記事の構成・本文・タイトル案・画像までAIが自動生成'
        },
        {
          label: 'コンテンツ最適化',
          description: 'ターゲットに響く文章を自動生成・改善提案'
        }
      ],
      benefits: ['制作期間90%削減', 'コスト80%削減', 'CVR200%向上']
    },
    {
      id: 'ai-meo',
      title: 'AI MEO対策（Googleマップ集客）',
      icon: '📍',
      color: primaryColor,
      overview: '検索されやすい店舗情報をAIが構築し、露出を最大化',
      details: [
        {
          label: '店舗情報最適化',
          description: 'AIが検索されやすいキーワードを分析・設定'
        },
        {
          label: '口コミ自動返信',
          description: 'AIが感情を分析し、ポジティブ・ネガティブに合わせて最適な返信を即時作成'
        },
        {
          label: '投稿自動化',
          description: '最新情報・イベント・キャンペーンを自動投稿'
        },
        {
          label: '競合分析',
          description: '周辺店舗の動向を分析し、差別化戦略を提案'
        }
      ],
      benefits: ['来店数150%増', '口コミ返信率100%', '表示順位UP']
    },
    {
      id: 'ai-instagram',
      title: 'AI Instagram運用',
      icon: '📸',
      color: secondaryColor || '#e11d48',
      overview: '「投稿しなきゃ」のプレッシャーから解放。クリエイティブも管理もAIが代行',
      details: [
        {
          label: 'InstaGen AI',
          description: 'テキスト指示だけでプロ級の画像を生成・編集'
        },
        {
          label: 'キャプション自動生成',
          description: '雰囲気に合わせた文章とハッシュタグを自動作成'
        },
        {
          label: '投稿スケジューリング',
          description: 'エンゲージメント率の高い時間帯に自動投稿'
        },
        {
          label: 'インサイト分析',
          description: 'フォロワー増加・エンゲージメント率を自動分析'
        }
      ],
      benefits: ['投稿時間90%削減', 'フォロワー300%増', 'エンゲージメント率UP']
    },
    {
      id: 'ai-calendar',
      title: 'AIカレンダー（統合管理）',
      icon: '📅',
      color: accentColor || '#10b981',
      overview: 'HP、SNS、Mapの投稿スケジュールをたった一つのカレンダーで管理',
      details: [
        {
          label: '統合カレンダー',
          description: '全チャネルの投稿を一元管理'
        },
        {
          label: 'LINE通知機能',
          description: '投稿前にLINEで通知。「OK」を押すまで世に出ないため、誤投稿を完全防止'
        },
        {
          label: '自動スケジューリング',
          description: 'AIが最適な投稿タイミングを提案'
        },
        {
          label: 'コンテンツ連携',
          description: '一度の入力で全チャネルに最適化して配信'
        }
      ],
      benefits: ['管理時間80%削減', '誤投稿0件', '作業効率300%UP']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <span>⚡</span>
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            充実のAI機能で
            <span style={{ color: themeColor }}> 集客を自動化</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            専門知識不要。AIがあなたの代わりに考え、実行します
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: activeTab === index ? feature.color : undefined
              }}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Details */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: features[activeTab].color }}>
                {features[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                {features[activeTab].overview}
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                {features[activeTab].details.map((detail, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                      style={{ backgroundColor: features[activeTab].color }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {detail.label}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3">
                {features[activeTab].benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${features[activeTab].color}20`,
                      color: features[activeTab].color
                    }}
                  >
                    ✓ {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div
                className="rounded-3xl p-12 text-center"
                style={{
                  background: `linear-gradient(135deg, ${features[activeTab].color}20, ${features[activeTab].color}10)`
                }}
              >
                <div className="text-8xl mb-6">{features[activeTab].icon}</div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">作業時間</span>
                      <span className="font-bold" style={{ color: features[activeTab].color }}>
                        90%削減
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">成果</span>
                      <span className="font-bold" style={{ color: features[activeTab].color }}>
                        200%向上
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">運用負担</span>
                      <span className="font-bold" style={{ color: features[activeTab].color }}>
                        ほぼゼロ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailSection;