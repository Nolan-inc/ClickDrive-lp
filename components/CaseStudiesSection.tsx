'use client';

import React, { useState } from 'react';

interface CaseStudiesSectionProps {
  themeColor?: string;
  primaryColor?: string;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed"
}) => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      company: 'WANT REAL様',
      industry: '不動産会社',
      logo: '🏢',
      challenge: '情報が散在し、導線が弱かった',
      results: [
        'AIデザイン最適化でブランドを明確化',
        'SNS投稿の自動反映で更新効率が大幅向上',
        '問い合わせ数が300%増加'
      ],
      metrics: {
        'CV率': '+280%',
        '更新時間': '-90%',
        'PV数': '+450%'
      },
      testimonial: '今まで更新に追われていた時間を、お客様対応に使えるようになりました',
      beforeImage: '/zisseki/want-real-before.jpg',
      afterImage: '/zisseki/want-real-10020.vercel.app.jpg'
    },
    {
      company: 'ネコノテ様',
      industry: 'Webサポート',
      logo: '💻',
      challenge: '視認性が悪く、魅力が伝わりきっていなかった',
      results: [
        '視覚的訴求と操作性を強化',
        'デザイン性が向上',
        'ユーザー滞在時間が200%増加'
      ],
      metrics: {
        '滞在時間': '+200%',
        '直帰率': '-60%',
        '問い合わせ': '+180%'
      },
      testimonial: 'AIの提案が的確で、想像以上の仕上がりになりました',
      beforeImage: '/zisseki/nekonote-before.jpg',
      afterImage: '/zisseki/websupport-neconote.vercel.app.jpg'
    },
    {
      company: 'マダムシュリンプ銀座様',
      industry: '飲食店',
      logo: '🍤',
      challenge: 'SNS運用が手間で、集客に繋がっていなかった',
      results: [
        'Instagram自動投稿で継続的な情報発信',
        'MEO対策で検索上位表示',
        '予約数が250%増加'
      ],
      metrics: {
        '予約数': '+250%',
        'フォロワー': '+500%',
        'Map表示': '1位'
      },
      testimonial: 'お店の運営に集中できて、売上も上がって一石二鳥です',
      beforeImage: '/zisseki/madame-before.jpg',
      afterImage: '/zisseki/madameshrimp.vercel.app.jpg'
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <span>📊</span>
            <span>Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            導入企業様の
            <span style={{ color: themeColor }}> 劇的な変化</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIの力で、ビジネスが加速する
          </p>
        </div>

        {/* Case Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeCase === index ? themeColor : undefined
              }}
            >
              <span className="mr-2">{study.logo}</span>
              {study.company}
            </button>
          ))}
        </div>

        {/* Case Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-5xl">{currentCase.logo}</span>
                <h3 className="text-2xl font-bold mt-2">{currentCase.company}</h3>
                <p className="text-gray-600">{currentCase.industry}</p>
              </div>
              <div className="flex gap-6">
                {Object.entries(currentCase.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold" style={{ color: themeColor }}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-600">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Before/After */}
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                Before
              </div>
              <div className="aspect-video bg-gray-200 relative">
                {/* 実際の画像がある場合はここに表示 */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌫️</div>
                    <p className="text-xl font-medium">改善前</p>
                    <p className="text-sm mt-2">課題: {currentCase.challenge}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-4 left-4 z-10 text-white px-4 py-2 rounded-full font-bold" style={{ backgroundColor: themeColor }}>
                After
              </div>
              <div className="aspect-video bg-transparent relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-xl font-bold" style={{ color: themeColor }}>改善後</p>
                    <div className="mt-4 space-y-2">
                      {currentCase.results.slice(0, 2).map((result, index) => (
                        <p key={index} className="text-sm text-gray-700">
                          ✓ {result}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Testimonial */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Results */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: primaryColor }}>
                  導入効果
                </h4>
                <ul className="space-y-3">
                  {currentCase.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: themeColor }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: primaryColor }}>
                  お客様の声
                </h4>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <svg className="w-8 h-8 text-gray-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 italic">
                    {currentCase.testimonial}
                  </p>
                  <div className="mt-4 text-right">
                    <p className="font-bold">{currentCase.company}</p>
                    <p className="text-sm text-gray-600">{currentCase.industry}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            あなたのビジネスも、AIで変革しませんか？
          </p>
          <a
            href="https://lin.ee/llRUGcG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            導入事例をもっと見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;