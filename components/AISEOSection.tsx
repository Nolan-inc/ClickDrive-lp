'use client';

import React, { useState, useEffect } from 'react';

interface AISEOSectionProps {
  themeColor?: string;
  primaryColor?: string;
}

const AISEOSection: React.FC<AISEOSectionProps> = ({
  primaryColor = "#7c3aed"
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // AIの分析・生成プロセス
  const aiProcess = [
    {
      step: '分析中',
      icon: '🔍',
      title: 'キーワード分析',
      detail: '「カフェ 渋谷」「おしゃれ ランチ」の検索ボリューム解析中...',
      result: '月間検索数: 12,000回'
    },
    {
      step: '生成中',
      icon: '✍️',
      title: 'ブログ記事作成',
      detail: 'SEO最適化された記事を自動生成中...',
      result: '2,000文字の記事完成'
    },
    {
      step: '最適化',
      icon: '⚡',
      title: 'メタデータ設定',
      detail: 'タイトルタグ、メタディスクリプション最適化中...',
      result: 'CTR 2.5倍向上'
    },
    {
      step: '公開',
      icon: '🚀',
      title: '自動投稿',
      detail: '最適な時間帯に自動公開...',
      result: '検索順位3位獲得'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % aiProcess.length);
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const samplePosts = [
    {
      title: '渋谷で見つけた！隠れ家カフェBEST5',
      keywords: ['渋谷カフェ', 'おしゃれ', 'インスタ映え'],
      score: 95,
      ranking: '#3'
    },
    {
      title: '【2024年最新】渋谷ランチ完全ガイド',
      keywords: ['渋谷ランチ', '1000円以下', 'テイクアウト'],
      score: 92,
      ranking: '#1'
    },
    {
      title: '渋谷の夜カフェで過ごす特別な時間',
      keywords: ['夜カフェ', 'デート', 'Wi-Fi完備'],
      score: 88,
      ranking: '#5'
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* AI Process Visualization */}
        <div className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">
                🤖 AI SEOエンジン稼働中
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">リアルタイム処理中</span>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {aiProcess.map((process, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
                    currentStep === index
                      ? 'border-purple-500 bg-purple-900/30 transform scale-105'
                      : 'border-gray-700 bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{process.icon}</span>
                    {currentStep === index && isAnalyzing && (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-white mb-1">{process.title}</h4>
                  <p className="text-xs text-gray-400 mb-2">{process.detail}</p>
                  <div className="text-xs font-semibold" style={{ color: primaryColor }}>
                    {currentStep > index || (currentStep === index && !isAnalyzing) ? process.result : '待機中...'}
                  </div>
                  {index < aiProcess.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Generated Content Preview */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white">AIが生成した最新コンテンツ</h4>
                <span className="text-xs text-gray-400">直近24時間</span>
              </div>
              <div className="space-y-3">
                {samplePosts.map((post, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-semibold text-white">{post.title}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">
                          {post.ranking}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">キーワード:</span>
                        {post.keywords.map((keyword, kIndex) => (
                          <span key={kIndex} className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center ml-4">
                      <div className="text-2xl font-bold" style={{ color: primaryColor }}>
                        {post.score}
                      </div>
                      <div className="text-xs text-gray-400">SEOスコア</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-3">リアルタイム分析ダッシュボード</h4>

                  {/* Mock Analytics */}
                  <div className="space-y-3">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">検索順位改善率</span>
                        <span className="text-sm font-bold" style={{ color: primaryColor }}>+85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '85%', backgroundColor: primaryColor }}></div>
                      </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">月間自動投稿数</span>
                        <span className="text-sm font-bold" style={{ color: primaryColor }}>120記事</span>
                      </div>
                      <div className="flex gap-1">
                        {Array(30).fill(null).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 h-12 rounded"
                            style={{
                              backgroundColor: i < 24 ? primaryColor : '#374151',
                              opacity: i < 24 ? 0.3 + (i / 30) : 0.3
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">競合キーワード分析</span>
                        <span className="text-sm font-bold text-green-600">完了</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-green-900/50 text-green-400 p-2 rounded text-center">上位獲得 28</div>
                        <div className="bg-yellow-900/50 text-yellow-400 p-2 rounded text-center">改善中 15</div>
                        <div className="bg-blue-900/50 text-blue-400 p-2 rounded text-center">新規発見 7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: primaryColor }}>
                AIが全自動でSEO対策
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      トレンド分析 & キーワード選定
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Google検索トレンドをリアルタイム監視。競合が気づく前に上位表示可能なキーワードを発見
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      コンテンツ自動生成
                    </h4>
                    <p className="text-gray-400 text-sm">
                      選定したキーワードに基づき、SEOに最適化された高品質な記事を自動作成。人間らしい自然な文章
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      最適タイミングで自動投稿
                    </h4>
                    <p className="text-gray-400 text-sm">
                      検索エンジンのアルゴリズムを分析し、最も効果的なタイミングで自動投稿
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      効果測定 & 自動改善
                    </h4>
                    <p className="text-gray-400 text-sm">
                      投稿後の順位変動を追跡し、AIが自動でリライト・最適化を継続実施
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    color: primaryColor
                  }}
                >
                  ✓ 検索順位TOP10入り
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    color: primaryColor
                  }}
                >
                  ✓ 月120記事自動投稿
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    color: primaryColor
                  }}
                >
                  ✓ 人件費0円
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISEOSection;