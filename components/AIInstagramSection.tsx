'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface AIInstagramSectionProps {
  themeColor?: string;
  secondaryColor?: string;
}

const AIInstagramSection: React.FC<AIInstagramSectionProps> = ({
  themeColor = "#8b5cf6",
  secondaryColor = "#e11d48"
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activePost, setActivePost] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showGeneration, setShowGeneration] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [showClickAnimation, setShowClickAnimation] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  // 店舗情報の入力例
  const shopPrompt = {
    name: 'Cafe Harmony',
    type: 'おしゃれカフェ',
    location: '渋谷',
    features: ['ラテアート', 'オーガニック', 'Wi-Fi完備', 'ペット可'],
    targetAudience: '20-30代女性',
    style: 'ナチュラル・温かみのある'
  };

  // AI生成プロセス
  const generationSteps = [
    { icon: '📝', title: '店舗情報分析', detail: 'ブランドイメージを解析中...' },
    { icon: '🎨', title: '画像生成', detail: 'AIがビジュアルを作成中...' },
    { icon: '✍️', title: 'キャプション作成', detail: '魅力的な文章を生成中...' },
    { icon: '#️⃣', title: 'ハッシュタグ最適化', detail: 'リーチを最大化...' }
  ];

  // 生成された投稿例
  const generatedPosts = [
    {
      id: 1,
      image: '/Instagram/ai-generated-image-1764680175739-1.png',
      caption: '☕️ 今日のスペシャルラテアート\n\nバリスタが心を込めて描く、一杯一杯違うアート。\n今日はどんな出会いが待っているかな？\n\nオーガニック豆を使用した優しい味わいと\n可愛いラテアートで、ほっこりタイムを。',
      hashtags: ['#渋谷カフェ', '#ラテアート', '#カフェ巡り', '#オーガニックコーヒー', '#渋谷グルメ', '#カフェスタグラム'],
      postTime: '12:00 PM',
      expectedReach: '2,500',
      engagementRate: '8.5%'
    },
    {
      id: 2,
      image: '/Instagram/ダウンロード (2).png',
      caption: '🌿 Morning Vibes at Cafe Harmony\n\n朝の光が差し込む店内で\nゆったりとした時間を過ごしませんか？\n\nWi-Fi完備でテレワークにも◎\nペット同伴も大歓迎です🐕',
      hashtags: ['#モーニングカフェ', '#渋谷朝活', '#ペット可カフェ', '#テレワークカフェ', '#CafeHarmony'],
      postTime: '8:00 AM',
      expectedReach: '3,200',
      engagementRate: '9.2%'
    },
    {
      id: 3,
      image: '/Instagram/ダウンロード (3).png',
      caption: '✨ 季節限定メニュー登場！\n\n秋の味覚を贅沢に使った\nパンプキンスパイスラテが新登場🎃\n\n温かいスパイスの香りと\nクリーミーな口当たりが絶妙にマッチ。',
      hashtags: ['#季節限定', '#パンプキンスパイスラテ', '#秋カフェ', '#新メニュー', '#渋谷スイーツ'],
      postTime: '3:00 PM',
      expectedReach: '4,100',
      engagementRate: '11.3%'
    },
    {
      id: 4,
      image: '/Instagram/ダウンロード (4).png',
      caption: '🍰 Afternoon Tea Time\n\n午後のひとときを特別に。\n手作りスイーツと香り高い紅茶で\n優雅なティータイムはいかが？\n\n友達との楽しいおしゃべりも\n一人の静かな時間も、どちらも大切に。',
      hashtags: ['#アフタヌーンティー', '#渋谷スイーツ', '#カフェタイム', '#手作りケーキ', '#紅茶好き'],
      postTime: '2:00 PM',
      expectedReach: '3,800',
      engagementRate: '10.1%'
    }
  ];

  // タイピングアニメーション用のプロンプトテキスト
  const fullPromptText = `おしゃれカフェ「Cafe Harmony」の投稿を生成してください。
場所：渋谷
特徴：ラテアート、オーガニック、Wi-Fi完備、ペット可
ターゲット：20-30代女性
スタイル：ナチュラルで温かみのある雰囲気`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % generationSteps.length);
      setIsGenerating(true);
      setTimeout(() => setIsGenerating(false), 1500);
    }, 2500);

    const postInterval = setInterval(() => {
      setActivePost((prev) => (prev + 1) % generatedPosts.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(postInterval);
    };
  }, []);

  // クリックアニメーションとタイピング
  useEffect(() => {
    // Step 1: 少し待ってからカーソル表示
    setTimeout(() => {
      setShowClickAnimation(true);

      // Step 2: カーソル表示後、クリックアクション
      setTimeout(() => {
        setButtonClicked(true);

        // クリックエフェクトを表示してからカーソルを非表示
        setTimeout(() => {
          setShowClickAnimation(false);
        }, 1000);

        // Step 3: タイピング開始
        setTimeout(() => {
          let index = 0;
          const typingInterval = setInterval(() => {
            if (index < fullPromptText.length) {
              setTypingText(fullPromptText.substring(0, index + 1));
              index++;
            } else {
              clearInterval(typingInterval);
              // タイピング完了後、画像生成開始
              setTimeout(() => {
                setShowGeneration(true);
                // プログレスバーアニメーション
                let progress = 0;
                const progressInterval = setInterval(() => {
                  if (progress < 100) {
                    progress += 2;
                    setGenerationProgress(progress);
                  } else {
                    clearInterval(progressInterval);
                  }
                }, 50);
              }, 500);
            }
          }, 30);
        }, 1200);
      }, 800);
    }, 2000);
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* AI Generation System */}
        <div className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-8 relative">
            {/* 自動カーソルアニメーション - ボタンの位置に固定 */}
            {showClickAnimation && (
              <div
                className="absolute pointer-events-none z-50"
                style={{
                  left: '50%',
                  top: '180px',
                  transform: 'translateX(-50%)'
                }}
              >
                {/* 大きなカーソル */}
                <div className="relative">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={`drop-shadow-2xl transition-transform ${buttonClicked ? 'scale-90' : 'scale-100'}`}
                  >
                    <path
                      d="M8 8L22 22L17 24L12 32L8 8Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8L22 22L17 24L12 32L8 8Z"
                      fill="rgba(255,255,255,0.9)"
                    />
                  </svg>
                  {/* クリックエフェクト - 複数の波紋 */}
                  {buttonClicked && (
                    <>
                      <div className="absolute top-3 left-3">
                        <div className="w-12 h-12 bg-pink-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="w-12 h-12 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '200ms' }}></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* AIプロンプト入力デモ */}
            <div className="mb-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-bold text-white mb-4 text-center text-xl">
                  🤖 自動でAIが操作して、Instagram投稿を生成
                </h3>

                {/* デモボタン */}
                <div className="text-center mb-6">
                  <button
                    className={`
                      px-8 py-3 rounded-full font-semibold text-white
                      transition-all duration-300 transform
                      ${buttonClicked
                        ? 'bg-gradient-to-r from-green-500 to-green-600 scale-95 shadow-lg'
                        : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105'
                      }
                    `}
                    style={{ position: 'relative' }}
                  >
                    {buttonClicked ? (
                      <>
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          生成中...
                        </span>
                      </>
                    ) : (
                      'AI投稿生成開始 →'
                    )}
                  </button>
                </div>

                {/* プロンプト入力エリア */}
                <div className={`bg-gray-900 rounded-xl p-6 relative transition-opacity duration-500 ${buttonClicked ? 'opacity-100' : 'opacity-50'}`}>
                  <div className="absolute top-3 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="mt-6 font-mono text-green-400 text-sm">
                    <div className="mb-2 text-gray-500">&gt; AI Prompt:</div>
                    <div className="min-h-[120px]">
                      {typingText}
                      {buttonClicked && typingText.length < fullPromptText.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </div>
                  </div>

                  {/* 生成プログレスバー */}
                  {showGeneration && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">画像生成中...</span>
                        <span className="text-xs text-green-400">{generationProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-100"
                          style={{ width: `${generationProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 生成完了メッセージ */}
                {generationProgress === 100 && (
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full animate-bounce">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">4件の投稿を生成完了！</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 左：店舗情報入力 */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    店舗情報
                  </h3>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-3">
                    <div>
                      <label className="text-xs text-gray-400">店舗名</label>
                      <div className="font-semibold text-white">{shopPrompt.name}</div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">業種</label>
                      <div className="font-semibold text-white">{shopPrompt.type}</div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">エリア</label>
                      <div className="font-semibold text-white">{shopPrompt.location}</div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">特徴</label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {shopPrompt.features.map((feature, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-purple-900/50 text-purple-400 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">ターゲット</label>
                      <div className="font-semibold text-white">{shopPrompt.targetAudience}</div>
                    </div>
                  </div>
                </div>

                {/* AI生成プロセス */}
                <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">🤖</span>
                    AI処理状況
                  </h4>
                  <div className="space-y-2">
                    {generationSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg transition-all duration-500 ${
                          currentStep === index
                            ? 'bg-pink-900/30 border-2 border-pink-400'
                            : 'bg-gray-800 border border-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{step.icon}</span>
                          <div className="flex-grow">
                            <h5 className="font-semibold text-xs text-white">{step.title}</h5>
                            <p className="text-xs text-gray-400">{step.detail}</p>
                          </div>
                          {currentStep === index && isGenerating && (
                            <div className="flex gap-1">
                              <div className="w-1 h-1 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-1 h-1 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-1 h-1 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右：生成された投稿プレビュー */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    AIが自動生成した投稿
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">自動投稿中</span>
                  </div>
                </div>

                {/* Instagram風投稿プレビュー - サイズ調整 */}
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* Instagram Header */}
                    <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                          CH
                        </div>
                        <div>
                          <div className="font-semibold text-xs">cafe_harmony</div>
                          <div className="text-xs text-gray-500">{shopPrompt.location}</div>
                        </div>
                      </div>
                      <button className="text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </button>
                    </div>

                    {/* Image Carousel with Animation */}
                    <div className="relative aspect-square bg-gray-100">
                      {generationProgress === 100 ? (
                        <>
                          {generatedPosts.map((post, index) => (
                            <div
                              key={post.id}
                              className={`absolute inset-0 transition-opacity duration-1000 ${
                                activePost === index ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}

                          {/* Carousel Indicators */}
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                            {generatedPosts.map((_, index) => (
                              <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all ${
                                  activePost === index ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      ) : (
                        /* 生成中のアニメーション */
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="text-center">
                            <div className="relative w-24 h-24 mx-auto mb-4">
                              {/* 画像生成アニメーション */}
                              <div className="absolute inset-0 border-4 border-pink-200 rounded-lg animate-pulse"></div>
                              <div className="absolute inset-2 border-4 border-purple-200 rounded-lg animate-pulse animation-delay-200"></div>
                              <div className="absolute inset-4 border-4 border-pink-200 rounded-lg animate-pulse animation-delay-400"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-500 animate-spin" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 font-medium">AI画像生成中...</p>
                            <p className="text-xs text-gray-500 mt-1">{generationProgress}%</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Instagram Actions */}
                    {generationProgress === 100 && (
                      <div className="px-3 py-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 4.026A9.001 9.001 0 0112 21c4.474 0 8.268-3.12 9.032-7.326" />
                            </svg>
                          </div>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </div>

                        {/* Caption */}
                        <div className="space-y-1">
                          <p className="text-xs whitespace-pre-wrap line-clamp-3">
                            {generatedPosts[activePost].caption}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {generatedPosts[activePost].hashtags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="text-xs text-blue-600">
                                {tag}
                              </span>
                            ))}
                            {generatedPosts[activePost].hashtags.length > 3 && (
                              <span className="text-xs text-gray-500">...</span>
                            )}
                          </div>
                        </div>

                        {/* Post Stats */}
                        <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-xs text-gray-500">投稿時間</div>
                            <div className="text-xs font-semibold">{generatedPosts[activePost].postTime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">予想リーチ</div>
                            <div className="text-xs font-semibold text-pink-600">{generatedPosts[activePost].expectedReach}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">エンゲージ</div>
                            <div className="text-xs font-semibold text-purple-600">{generatedPosts[activePost].engagementRate}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* スケジュール表示 */}
                <div className="mt-6 bg-gray-800 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">今週の投稿スケジュール</h4>
                  <div className="grid grid-cols-7 gap-2">
                    {['月', '火', '水', '木', '金', '土', '日'].map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs text-gray-400 mb-1">{day}</div>
                        <div className={`p-2 rounded ${index < 4 ? 'bg-pink-900/50 text-pink-400' : 'bg-gray-700 text-gray-500'}`}>
                          <div className="text-xs font-semibold">{index < 4 ? '✓' : '-'}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: secondaryColor }}>
                完全自動のInstagram運用
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      プロ級の画像を自動生成
                    </h4>
                    <p className="text-gray-400 text-sm">
                      店舗の雰囲気やブランドイメージに合わせた高品質な画像をAIが作成
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      魅力的なキャプション作成
                    </h4>
                    <p className="text-gray-400 text-sm">
                      ターゲット層に響く文章とトレンドを押さえたハッシュタグを自動生成
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      最適な時間に自動投稿
                    </h4>
                    <p className="text-gray-400 text-sm">
                      フォロワーのアクティブ時間を分析し、エンゲージメント最大化
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      パフォーマンス分析
                    </h4>
                    <p className="text-gray-400 text-sm">
                      投稿の効果を測定し、次回の投稿をさらに改善
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${secondaryColor}20`,
                    color: secondaryColor
                  }}
                >
                  ✓ 毎日自動投稿
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${secondaryColor}20`,
                    color: secondaryColor
                  }}
                >
                  ✓ フォロワー300%増
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${secondaryColor}20`,
                    color: secondaryColor
                  }}
                >
                  ✓ 作業時間0分
                </span>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Instagram成果レポート</h4>

                <div className="space-y-3">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">フォロワー数</span>
                      <span className="text-lg font-bold text-pink-600">3,842</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 312% (3ヶ月前比)</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">平均いいね数</span>
                      <span className="text-lg font-bold text-pink-600">486</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 225% 増加</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">月間リーチ</span>
                      <span className="text-lg font-bold text-pink-600">52.8K</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 180% 増加</div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">プロフィール訪問</span>
                      <span className="text-lg font-bold text-pink-600">8,924</span>
                    </div>
                    <div className="text-xs text-green-600">↑ 156% 増加</div>
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

export default AIInstagramSection;