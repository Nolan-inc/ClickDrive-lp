'use client';

import React, { useState } from 'react';
import AIWebsiteSection from './AIWebsiteSection';
import AISEOSection from './AISEOSection';
import AIMEOSection from './AIMEOSection';
import AIInstagramSection from './AIInstagramSection';
import AICalendarSection from './AICalendarSection';

interface AIFeaturesTabSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

const AIFeaturesTabSection: React.FC<AIFeaturesTabSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null
}) => {
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    {
      id: 'website',
      icon: '🌐',
      label: 'AI Website & SEO',
      title: (
        <>
          AI ホームページ制作
          <span style={{ color: themeColor }}> & SEO</span>
        </>
      ),
      description: 'デザイン、画像解析、文章生成までAIが一気通貫で作成'
    },
    {
      id: 'seo',
      icon: '🔍',
      label: 'AI SEO',
      title: (
        <>
          AIが24時間365日
          <span style={{ color: primaryColor }}> 分析→生成→投稿</span>
        </>
      ),
      description: '検索トレンドをリアルタイム分析し、最適なSEOコンテンツを自動作成・投稿'
    },
    {
      id: 'meo',
      icon: '📍',
      label: 'AI MEO',
      title: (
        <>
          AIが口コミを分析して
          <span style={{ color: primaryColor }}> 集客を自動化</span>
        </>
      ),
      description: 'Googleマップの口コミを即座に分析・返信し、改善案と投稿を自動生成'
    },
    {
      id: 'instagram',
      icon: '📸',
      label: 'AI Instagram',
      title: (
        <>
          店舗情報を入力するだけで
          <span style={{ color: secondaryColor || "#e11d48" }}> Instagram完全自動化</span>
        </>
      ),
      description: 'AIが店舗の魅力を最大限に引き出す投稿を自動生成・配信'
    },
    {
      id: 'calendar',
      icon: '📅',
      label: 'AI Calendar',
      title: (
        <>
          全チャネルの投稿を
          <span style={{ color: accentColor || "#10b981" }}> AIが一元管理</span>
        </>
      ),
      description: 'Instagram、ウェブサイト、Googleマップの投稿を統合カレンダーで効率化'
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'website':
        return <AIWebsiteSection themeColor={themeColor} />;
      case 'seo':
        return <AISEOSection themeColor={themeColor} primaryColor={primaryColor} />;
      case 'meo':
        return <AIMEOSection themeColor={themeColor} primaryColor={primaryColor} />;
      case 'instagram':
        return <AIInstagramSection themeColor={themeColor} secondaryColor={secondaryColor || "#e11d48"} />;
      case 'calendar':
        return <AICalendarSection themeColor={themeColor} accentColor={accentColor || "#10b981"} />;
      default:
        return <AIWebsiteSection themeColor={themeColor} />;
    }
  };

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 max-w-7xl pt-20 pb-8 relative z-10">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <span>🤖</span>
            <span>AI Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white transition-all duration-300">
            {currentTab.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-300">
            {currentTab.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-md'
              }`}
              style={
                activeTab === tab.id
                  ? {
                      background: `linear-gradient(135deg, ${primaryColor}, ${themeColor})`,
                    }
                  : {}
              }
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - 各セクションをそのまま表示 */}
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AIFeaturesTabSection;
