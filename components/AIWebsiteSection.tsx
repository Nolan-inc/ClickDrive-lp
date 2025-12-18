'use client';

import React from 'react';

interface AIWebsiteSectionProps {
  themeColor?: string;
}

const AIWebsiteSection: React.FC<AIWebsiteSectionProps> = ({
  themeColor = "#8b5cf6"
}) => {
  const details = [
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
  ];

  const benefits = ['制作期間90%削減', 'コスト80%削減', 'CVR200%向上'];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Details */}
            <div>
              {/* Feature List */}
              <div className="space-y-4 mb-8">
                {details.map((detail, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                      style={{ backgroundColor: themeColor }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {detail.label}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${themeColor}20`,
                      color: themeColor
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
                  background: `linear-gradient(135deg, ${themeColor}20, ${themeColor}10)`
                }}
              >
                <div className="text-8xl mb-6">🌐</div>
                <div className="space-y-4">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">制作期間</span>
                      <span className="font-bold" style={{ color: themeColor }}>
                        90%削減
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">コスト</span>
                      <span className="font-bold" style={{ color: themeColor }}>
                        80%削減
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">CVR</span>
                      <span className="font-bold" style={{ color: themeColor }}>
                        200%向上
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

export default AIWebsiteSection;