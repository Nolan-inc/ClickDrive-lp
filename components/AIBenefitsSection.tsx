'use client';

import React from 'react';

interface AIBenefitsSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
}

const AIBenefitsSection: React.FC<AIBenefitsSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
}) => {
  const comparisons = [
    {
      aspect: '作業時間',
      human: '8時間/日',
      ai: '24時間/365日',
      benefit: '休みなく働き続ける'
    },
    {
      aspect: '処理速度',
      human: '1記事/時間',
      ai: '100記事/時間',
      benefit: '100倍の生産性'
    },
    {
      aspect: '分析能力',
      human: '経験と勘',
      ai: 'ビッグデータ解析',
      benefit: 'データドリブンな判断'
    },
    {
      aspect: 'コスト',
      human: '月給30万円〜',
      ai: '月額5,800円',
      benefit: '97%のコスト削減'
    }
  ];

  const aiAdvantages = [
    {
      icon: '🚀',
      title: '圧倒的なスピード',
      description: '人間の100倍速で作業を完了。待ち時間ゼロ。'
    },
    {
      icon: '🎯',
      title: '完璧な精度',
      description: 'ミスなし、漏れなし。24時間同じクオリティを維持。'
    },
    {
      icon: '📈',
      title: '継続的な学習',
      description: '日々進化し、最新のトレンドを自動的に反映。'
    },
    {
      icon: '💰',
      title: '圧倒的な低コスト',
      description: '人件費の97%削減。浮いた予算を成長投資へ。'
    }
  ];

  return (
    <section className="py-20 bg-transparent text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <span>🤖</span>
            <span>AI vs Human</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            なぜ今、
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI</span>
            なのか
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            人力では不可能だった領域へ、AIが導きます
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gray-700">人間</span>
            <span className="mx-4 text-gray-900">VS</span>
            <span style={{ color: themeColor }}>AI</span>
          </h3>
          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-4 items-center">
                <div className="text-center md:text-left">
                  <span className="font-bold text-lg">{item.aspect}</span>
                </div>
                <div className="text-center">
                  <div className="bg-red-500/20 rounded-xl p-3">
                    <span className="text-red-400">👤 {item.human}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-xl p-3">
                    <span className="text-green-400">🤖 {item.ai}</span>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-gray-700 font-medium">
                    → {item.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-sm"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
              <p className="text-gray-700 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Central Message */}
        <div className="text-center">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-1">
              <div className="bg-white rounded-3xl px-8 py-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  AIは、あなたの
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {' '}最強のパートナー
                  </span>
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  24時間365日、休むことなく働き続け、
                  <br />
                  学習し続け、成果を出し続ける。
                  <br />
                  それが、AIマーケターです。
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: themeColor }}>
                      97%
                    </div>
                    <div className="text-sm text-gray-600">コスト削減</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: primaryColor }}>
                      100倍
                    </div>
                    <div className="text-sm text-gray-600">作業効率</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">稼働時間</div>
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

export default AIBenefitsSection;