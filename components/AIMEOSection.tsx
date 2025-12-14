'use client';

import React, { useState, useEffect } from 'react';

interface AIMEOSectionProps {
  themeColor?: string;
  primaryColor?: string;
}

const AIMEOSection: React.FC<AIMEOSectionProps> = ({
  primaryColor = "#7c3aed"
}) => {
  const [activeReview, setActiveReview] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentAnalysis, setCurrentAnalysis] = useState(0);

  // サンプル口コミデータ
  const reviews = [
    {
      id: 1,
      author: '田中太郎',
      rating: 5,
      text: '料理が本当に美味しくて、スタッフの対応も素晴らしかったです！また来ます！',
      sentiment: 'positive',
      aiResponse: 'この度は当店をご利用いただき、誠にありがとうございます。お料理とサービスにご満足いただけて大変嬉しく思います。田中様のまたのご来店を心よりお待ちしております。',
      keywords: ['料理', 'スタッフ', '対応']
    },
    {
      id: 2,
      author: '山田花子',
      rating: 3,
      text: '味は良かったけど、待ち時間が長かった。改善してほしい。',
      sentiment: 'mixed',
      aiResponse: '貴重なご意見ありがとうございます。お料理にご満足いただけた一方で、お待たせしてしまい申し訳ございません。調理オペレーションを見直し、改善に努めます。',
      keywords: ['味', '待ち時間', '改善']
    },
    {
      id: 3,
      author: '佐藤次郎',
      rating: 2,
      text: '期待していたほどではなかった。価格に見合わない。',
      sentiment: 'negative',
      aiResponse: 'この度はご期待に沿えず申し訳ございません。お客様のご意見を真摯に受け止め、価格に見合った価値をご提供できるよう、メニューとサービスの改善に取り組んでまいります。',
      keywords: ['期待', '価格', '価値']
    }
  ];

  // AIの分析プロセス
  const analysisSteps = [
    { icon: '📊', title: '感情分析', detail: '口コミの感情を解析' },
    { icon: '🔍', title: 'キーワード抽出', detail: '重要な要素を特定' },
    { icon: '✍️', title: '返信生成', detail: '最適な返信を作成' },
    { icon: '📈', title: '改善提案', detail: 'ビジネス改善案を生成' }
  ];

  // 生成される投稿の例
  const generatedPosts = [
    {
      type: 'お知らせ',
      title: '【期間限定】ランチタイム短縮キャンペーン開始',
      content: 'お客様の声を反映し、ランチタイムの提供時間を短縮しました。',
      basedOn: '待ち時間に関する口コミ分析結果'
    },
    {
      type: 'メニュー更新',
      title: '新メニュー「シェフ特製コース」登場',
      content: '皆様から好評いただいている料理を集めた特別コースをご用意。',
      basedOn: '料理に関する高評価口コミから'
    },
    {
      type: 'サービス改善',
      title: 'スタッフ研修強化のお知らせ',
      content: 'より良いサービス提供のため、接客研修を実施しました。',
      basedOn: 'サービスに関する口コミフィードバック'
    }
  ];

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    }, 5000);

    const analysisInterval = setInterval(() => {
      setCurrentAnalysis((prev) => (prev + 1) % analysisSteps.length);
    }, 1500);

    return () => {
      clearInterval(reviewInterval);
      clearInterval(analysisInterval);
    };
  }, []);

  return (
    <section className="relative pt-0 pb-20 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* AI Review Analysis System */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                🤖 AI MEOエンジン - リアルタイム口コミ分析
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">24時間監視中</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* 左：口コミの流入 */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  新着口コミ
                </h4>
                <div className="space-y-3">
                  {reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={`p-4 rounded-lg transition-all duration-500 ${
                        activeReview === index
                          ? 'bg-purple-900/30 border-2 border-purple-400 transform scale-105'
                          : 'bg-gray-800 border border-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm text-white">{review.author}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{review.text}</p>
                      {activeReview === index && (
                        <div className="mt-2 pt-2 border-t border-purple-700">
                          <span className="text-xs font-semibold text-purple-400">→ AI分析中...</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 中央：AI分析プロセス */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  AI分析プロセス
                </h4>
                <div className="space-y-3">
                  {analysisSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg transition-all duration-500 ${
                        currentAnalysis === index && isProcessing
                          ? 'bg-purple-900/30 border-2 border-purple-400'
                          : 'bg-gray-800 border border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{step.icon}</span>
                        <div className="flex-grow">
                          <h5 className="font-semibold text-sm text-white">{step.title}</h5>
                          <p className="text-xs text-gray-400">{step.detail}</p>
                        </div>
                        {currentAnalysis === index && isProcessing && (
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1 h-1 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1 h-1 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* 感情分析結果 */}
                  <div className="mt-4 p-3 bg-purple-900/30 rounded-lg">
                    <div className="text-xs font-semibold text-purple-400 mb-2">現在の分析結果</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-green-900/50 text-green-400 p-2 rounded text-center">
                        ポジティブ<br/>60%
                      </div>
                      <div className="bg-yellow-900/50 text-yellow-400 p-2 rounded text-center">
                        中立<br/>30%
                      </div>
                      <div className="bg-red-900/50 text-red-400 p-2 rounded text-center">
                        ネガティブ<br/>10%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右：AIアクション */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  AIアクション
                </h4>

                {/* 自動返信 */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">📝 自動返信生成</h5>
                  <div className="bg-blue-900/30 rounded-lg p-3 text-xs text-gray-300">
                    {reviews[activeReview].aiResponse}
                  </div>
                </div>

                {/* ビジネス改善提案 */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">💡 改善提案</h5>
                  <div className="space-y-2">
                    <div className="bg-yellow-900/30 rounded p-2 text-xs text-gray-300">
                      <span className="font-semibold">待ち時間改善:</span> ピークタイム対策を強化
                    </div>
                    <div className="bg-green-900/30 rounded p-2 text-xs text-gray-300">
                      <span className="font-semibold">強み強化:</span> 人気メニューをPR
                    </div>
                  </div>
                </div>

                {/* 投稿生成 */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">📢 自動投稿</h5>
                  <div className="bg-purple-900/30 rounded-lg p-3 text-xs">
                    <div className="font-semibold text-purple-400 mb-1">
                      新投稿を生成中...
                    </div>
                    <p className="text-gray-400">
                      口コミ分析に基づいた最新情報を配信
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Posts Showcase */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              AIが口コミから生成した投稿例
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {generatedPosts.map((post, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-400 text-xs rounded-full font-semibold">
                      {post.type}
                    </span>
                    <span className="text-xs text-gray-400">AIが自動生成</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{post.title}</h4>
                  <p className="text-sm text-gray-400 mb-3">{post.content}</p>
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold">生成根拠:</span> {post.basedOn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: primaryColor }}>
                Googleマップを完全自動化
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      口コミ感情分析 & 自動返信
                    </h4>
                    <p className="text-gray-400 text-sm">
                      ポジティブ・ネガティブを瞬時に判断し、それぞれに最適な返信を24時間以内に自動投稿
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      ビジネス改善提案
                    </h4>
                    <p className="text-gray-400 text-sm">
                      口コミ内容を総合的に分析し、サービス改善・メニュー開発・オペレーション改善を提案
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      投稿コンテンツ自動生成
                    </h4>
                    <p className="text-gray-400 text-sm">
                      口コミで評価された点を活かし、新規顧客に響く投稿を自動作成・配信
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      競合店舗分析
                    </h4>
                    <p className="text-gray-400 text-sm">
                      周辺店舗の口コミ・評価を分析し、差別化ポイントを発見・強化戦略を立案
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
                  ✓ 口コミ返信率100%
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    color: primaryColor
                  }}
                >
                  ✓ 24時間以内返信
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColor}20`,
                    color: primaryColor
                  }}
                >
                  ✓ 評価スコア向上
                </span>
              </div>
            </div>

            {/* Right: Stats Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">MEO実績ダッシュボード</h4>

                <div className="space-y-3">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Googleマップ表示順位</span>
                      <span className="text-lg font-bold" style={{ color: primaryColor }}>#2</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 8位上昇（先月比）</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">月間閲覧数</span>
                      <span className="text-lg font-bold" style={{ color: primaryColor }}>12,500</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 150%増（3ヶ月前比）</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">平均評価</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold" style={{ color: primaryColor }}>4.7</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < 5 ? 'text-yellow-400 text-sm' : 'text-gray-600 text-sm'}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600">↑ 0.5ポイント向上</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">口コミ返信速度</span>
                      <span className="text-lg font-bold" style={{ color: primaryColor }}>2時間</span>
                    </div>
                    <div className="text-xs text-gray-400">平均返信時間（AI自動返信）</div>
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

export default AIMEOSection;