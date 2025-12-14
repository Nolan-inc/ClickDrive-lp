'use client';

import React, { useState, useEffect } from 'react';

interface AICalendarSectionProps {
  themeColor?: string;
  accentColor?: string;
}

const AICalendarSection: React.FC<AICalendarSectionProps> = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiAnalyzing, setAiAnalyzing] = useState(false);

  // カレンダーのサンプルデータ
  const calendarEvents = {
    3: [
      { type: 'instagram', time: '10:00', content: '新商品紹介', status: 'completed' },
      { type: 'website', time: '14:00', content: 'ブログ更新', status: 'completed' }
    ],
    7: [
      { type: 'map', time: '09:00', content: '口コミ返信', status: 'completed' },
      { type: 'instagram', time: '18:00', content: 'ストーリー投稿', status: 'completed' }
    ],
    10: [
      { type: 'website', time: '11:00', content: 'イベント告知', status: 'completed' },
      { type: 'map', time: '15:00', content: 'ビジネス投稿', status: 'completed' }
    ],
    15: [
      { type: 'instagram', time: '12:00', content: '今日のランチ', status: 'scheduled' },
      { type: 'website', time: '16:00', content: 'お知らせ更新', status: 'scheduled' },
      { type: 'map', time: '17:30', content: '営業時間更新', status: 'scheduled' }
    ],
    18: [
      { type: 'instagram', time: '19:00', content: '夜の雰囲気', status: 'pending' }
    ],
    22: [
      { type: 'website', time: '10:00', content: 'キャンペーン開始', status: 'pending' },
      { type: 'map', time: '12:00', content: '特別メニュー', status: 'pending' }
    ],
    25: [
      { type: 'instagram', time: '15:00', content: '月末セール', status: 'pending' },
      { type: 'website', time: '18:00', content: '来月の予定', status: 'pending' }
    ],
    28: [
      { type: 'map', time: '11:00', content: '感謝投稿', status: 'pending' }
    ]
  };

  // チャンネルの色設定
  const channelColors = {
    instagram: { bg: '#E11D48', label: 'Instagram' },
    website: { bg: '#8B5CF6', label: 'ウェブサイト' },
    map: { bg: '#EA580C', label: 'Google Map' }
  };

  // LINE通知のデモ
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedDay === 15) {
        setShowNotification(true);
        setTimeout(() => {
          setNotificationStatus('approved');
          setTimeout(() => {
            setShowNotification(false);
            setNotificationStatus('pending');
          }, 3000);
        }, 2000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedDay]);

  // AI分析アニメーション
  useEffect(() => {
    const interval = setInterval(() => {
      setAiAnalyzing(true);
      setTimeout(() => setAiAnalyzing(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 現在時刻の更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // カレンダーの日付生成
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* AI分析パネル */}
        <div className="mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI最適化エンジン
              </h3>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${aiAnalyzing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="text-sm text-gray-400">
                  {aiAnalyzing ? '分析中...' : 'スタンバイ'}
                </span>
              </div>
            </div>

            {/* AI分析メトリクス */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-400">📊</span>
                  <span className="text-xs text-gray-400">エンゲージメント分析</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {aiAnalyzing ? (
                    <span className="text-lg animate-pulse">計算中...</span>
                  ) : (
                    '最適'
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  午後12-14時が最高
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-pink-400">🎯</span>
                  <span className="text-xs text-gray-400">ターゲット到達率</span>
                </div>
                <div className="text-2xl font-bold text-pink-600">
                  {aiAnalyzing ? (
                    <span className="text-lg animate-pulse">分析中...</span>
                  ) : (
                    '92%'
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  前月比+15%
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400">⚡</span>
                  <span className="text-xs text-gray-400">投稿頻度最適化</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {aiAnalyzing ? (
                    <span className="text-lg animate-pulse">調整中...</span>
                  ) : (
                    '3回/日'
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  理想的なペース
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400">🔄</span>
                  <span className="text-xs text-gray-400">クロスチャネル連携</span>
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {aiAnalyzing ? (
                    <span className="text-lg animate-pulse">同期中...</span>
                  ) : (
                    '完了'
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  3チャネル統合済
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Calendar Preview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  統合カレンダー - 2024年11月
                </h3>
                <div className="text-sm text-gray-400">
                  現在時刻: {currentTime.toLocaleTimeString('ja-JP')}
                </div>
              </div>

              {/* 曜日ヘッダー */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                  <div key={index} className="text-center text-xs font-semibold text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              {/* カレンダー本体 */}
              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays().map((day) => {
                  const events = calendarEvents[day as keyof typeof calendarEvents] || [];
                  const isToday = day === 15;
                  const hasEvents = events.length > 0;

                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`
                        relative min-h-[80px] p-2 rounded-lg border cursor-pointer transition-all
                        ${selectedDay === day ? 'border-green-500 bg-green-900/30' : 'border-gray-700'}
                        ${isToday ? 'ring-2 ring-green-400' : ''}
                        ${hasEvents ? 'hover:shadow-md' : 'hover:bg-gray-800'}
                      `}
                    >
                      <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-green-400' : 'text-gray-300'}`}>
                        {day}
                      </div>

                      {/* イベント表示 */}
                      {events.length > 0 && (
                        <div className="space-y-1">
                          {events.slice(0, 2).map((event, index) => (
                            <div
                              key={index}
                              className="h-1.5 rounded-full"
                              style={{
                                backgroundColor: channelColors[event.type as keyof typeof channelColors].bg,
                                opacity: event.status === 'completed' ? 0.5 : 1
                              }}
                            />
                          ))}
                          {events.length > 2 && (
                            <div className="text-xs text-gray-500 text-center">
                              +{events.length - 2}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 選択日の詳細 */}
              {selectedDay && calendarEvents[selectedDay as keyof typeof calendarEvents] && (
                <div className="mt-6 p-4 bg-gray-800 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">
                    11月{selectedDay}日の投稿予定
                  </h4>
                  <div className="space-y-2">
                    {calendarEvents[selectedDay as keyof typeof calendarEvents].map((event, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-lg">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: channelColors[event.type as keyof typeof channelColors].bg }}
                        />
                        <div className="flex-grow">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {channelColors[event.type as keyof typeof channelColors].label}
                            </span>
                            <span className="text-xs text-gray-400">
                              {event.time}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {event.content}
                          </div>
                        </div>
                        <div className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${event.status === 'completed' ? 'bg-gray-700 text-gray-400' :
                            event.status === 'scheduled' ? 'bg-green-900/50 text-green-400' :
                            'bg-yellow-900/50 text-yellow-400'}
                        `}>
                          {event.status === 'completed' ? '完了' :
                           event.status === 'scheduled' ? '予定' : '承認待ち'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Features & LINE Notification */}
          <div className="space-y-6">
            {/* LINE通知プレビュー */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-4">
                LINE承認システム
              </h3>

              {/* スマートフォンモック */}
              <div className="mx-auto w-full max-w-[280px]">
                <div className="bg-gray-900 rounded-[2rem] p-3 relative">
                  {/* スマホのノッチ */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full"></div>

                  {/* スクリーン */}
                  <div className="bg-white rounded-[1.5rem] overflow-hidden" style={{ minHeight: '400px' }}>
                    {/* LINEヘッダー */}
                    <div className="bg-green-500 text-white p-3 text-center font-semibold">
                      LINE
                    </div>

                    {/* 通知内容 */}
                    <div className="p-4">
                      {showNotification ? (
                        <div className="space-y-3 animate-slideInUp">
                          <div className="bg-gray-100 rounded-2xl p-3 max-w-[200px]">
                            <div className="text-xs text-gray-500 mb-1">ClickDrive AI</div>
                            <div className="text-sm">
                              📢 投稿承認リクエスト
                              <div className="mt-2 text-xs">
                                <div>📍 Instagram</div>
                                <div>⏰ 12:00予定</div>
                                <div>📝 今日のランチ</div>
                              </div>
                            </div>
                          </div>

                          {notificationStatus === 'pending' && (
                            <div className="flex gap-2 justify-center animate-pulse">
                              <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">
                                承認
                              </button>
                              <button className="px-4 py-2 bg-red-500 text-white rounded-full text-sm">
                                却下
                              </button>
                            </div>
                          )}

                          {notificationStatus === 'approved' && (
                            <div className="bg-green-100 text-green-700 rounded-2xl p-3 max-w-[200px] ml-auto animate-fadeIn">
                              <div className="text-sm">
                                ✅ 承認しました
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center text-gray-400 text-sm mt-20">
                          通知待機中...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-gray-400">
                投稿前に必ず確認通知を送信
              </div>
            </div>

            {/* 主要機能 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                統合管理のメリット
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      全チャネル一元管理
                    </h4>
                    <p className="text-xs text-gray-400">
                      Instagram、Web、Mapを1つの画面で
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      AI自動スケジューリング
                    </h4>
                    <p className="text-xs text-gray-400">
                      最適な投稿時間をAIが判断
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      誤投稿完全防止
                    </h4>
                    <p className="text-xs text-gray-400">
                      LINE承認で安心運用
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      効果測定レポート
                    </h4>
                    <p className="text-xs text-gray-400">
                      投稿効果を自動分析
                    </p>
                  </div>
                </div>
              </div>

              {/* 実績データ */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">80%</div>
                    <div className="text-xs text-gray-600">管理時間削減</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">0件</div>
                    <div className="text-xs text-gray-600">誤投稿</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-3xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              導入効果
            </h3>
            <p className="text-gray-400">
              AIカレンダー導入で実現する効率化
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <div className="text-lg font-bold text-white mb-1">
                作業時間80%削減
              </div>
              <div className="text-sm text-gray-400">
                月40時間→8時間に
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-lg font-bold text-white mb-1">
                投稿精度100%
              </div>
              <div className="text-sm text-gray-400">
                誤投稿・重複投稿0件
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-lg font-bold text-white mb-1">
                エンゲージ率3倍
              </div>
              <div className="text-sm text-gray-400">
                最適タイミングで投稿
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔄</div>
              <div className="text-lg font-bold text-white mb-1">
                完全自動運用
              </div>
              <div className="text-sm text-gray-400">
                24時間365日稼働
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AICalendarSection;