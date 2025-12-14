'use client';

import React from 'react';

interface ProblemSectionProps {
  themeColor?: string;
  primaryColor?: string;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed"
}) => {
  const problems = [
    {
      icon: "👤",
      title: "専任者不在",
      description: "マーケティング担当がいない、兼務で手一杯",
      pain: "人材不足"
    },
    {
      icon: "💰",
      title: "外注費高騰",
      description: "制作会社の見積もりが高すぎて手が出ない",
      pain: "予算不足"
    },
    {
      icon: "⏰",
      title: "更新の放置",
      description: "日々の業務に追われ、SNSやHPの更新が止まっている",
      pain: "時間不足"
    },
    {
      icon: "❓",
      title: "知識不足",
      description: "SEOやMEO、何をすればいいかわからない",
      pain: "ノウハウ不足"
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">こんなお悩み、</span>
            <span style={{ color: themeColor }}>ありませんか？</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web集客、人力でやるのはもう限界です。
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <div
                className="inline-block text-xs font-bold px-2 py-1 rounded mb-3"
                style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
              >
                {problem.pain}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Message */}
        <div className="text-center bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
          <p className="text-lg md:text-xl mb-4">
            これらの課題を解決するには
          </p>
          <div className="text-2xl md:text-3xl font-bold mb-6">
            <span style={{ color: themeColor }}>「専門知識」</span>
            <span className="mx-2">×</span>
            <span style={{ color: primaryColor }}>「膨大な時間」</span>
            <span className="mx-2">×</span>
            <span className="text-yellow-600">「高額な外注費」</span>
          </div>
          <p className="text-lg md:text-xl">
            が必要です。これらを人力で解決するのは
            <span className="text-red-600 font-bold"> 不可能</span>
            です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;