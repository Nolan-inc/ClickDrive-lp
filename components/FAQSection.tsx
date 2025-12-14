"use client"

import { useState } from 'react'

interface FAQSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

export default function FAQSection({
  primaryColor: _primaryColor = "#7c3aed"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('全て')
  const [showAll, setShowAll] = useState<boolean>(false)
  
  const faqs = [
    // 料金・契約について
    {
      category: '料金・契約',
      question: '初期費用はいくらですか？',
      answer: '現在、初期費用0円キャンペーン中です。月額5,800円のみでスタートできます。'
    },
    {
      category: '料金・契約',
      question: '月額5,800円に含まれるものは何ですか？',
      answer: 'ホームページ制作、SEO対策、MEO対策、Instagram運用、AIカレンダー管理、定期更新、サーバー管理、ドメイン管理、SSL証明書、メールアドレス作成、お問い合わせフォーム、アクセス解析など、全て含まれています。'
    },
    {
      category: '料金・契約',
      question: '契約期間の縛りはありますか？',
      answer: '最低契約期間は1年間です。その後は月単位で解約可能です。'
    },
    {
      category: '料金・契約',
      question: '支払い方法は何がありますか？',
      answer: 'クレカのみです'
    },

    // ホームページ制作について
    {
      category: 'ホームページ制作',
      question: '制作期間はどのくらいですか？',
      answer: '最短1週間で公開可能です。通常は2-3週間程度で完成します。'
    },
    {
      category: 'ホームページ制作',
      question: 'デザインの修正は何回まで可能ですか？',
      answer: 'デザイン案提出後、5回まで無料で修正対応いたします。AIが即座に修正案を作成するため、スピーディーに対応可能です。'
    },
    {
      category: 'ホームページ制作',
      question: 'スマホ対応はしていますか？',
      answer: 'はい、全てのサイトがレスポンシブデザインで、PC・スマホ・タブレット全デバイスに自動最適化されます。'
    },
    {
      category: 'ホームページ制作',
      question: '独自ドメインは使えますか？',
      answer: 'はい、独自ドメインの取得・設定も代行いたします。すでにお持ちのドメインも移管可能です。'
    },
    {
      category: 'ホームページ制作',
      question: 'SSL化（https）には対応していますか？',
      answer: 'はい、全てのサイトにSSL証明書を無料で設定し、セキュアな環境を提供します。'
    },

    // AI機能について
    {
      category: 'AI機能',
      question: 'AIはどんなことができるのですか？',
      answer: 'デザイン生成、文章作成、画像生成・編集、SEO対策、Instagram投稿作成、MEO対策、口コミ返信、投稿スケジューリングなど、マーケティング業務全般を自動化できます。'
    },
    {
      category: 'AI機能',
      question: 'AI生成コンテンツの品質は大丈夫ですか？',
      answer: '最新のAI技術を使用し、人間のプロライター・デザイナーと同等以上のクオリティを実現しています。生成後の確認・修正も可能です。'
    },
    {
      category: 'AI機能',
      question: 'AIが作成した内容は修正できますか？',
      answer: 'はい、全て修正可能です。AIが作成した下書きをベースに、お客様のご要望に合わせて調整できます。'
    },

    // SEO・MEO対策について
    {
      category: 'SEO・MEO対策',
      question: 'SEO対策で本当に検索順位は上がりますか？',
      answer: '過去の実績では、3ヶ月以内に検索順位TOP10入りを達成したケースが多数あります。AIが最適なキーワード選定と継続的な改善を行います。'
    },
    {
      category: 'SEO・MEO対策',
      question: 'MEO対策とは何ですか？',
      answer: 'MEO（Map Engine Optimization）は、Googleマップでの表示順位を上げる対策です。店舗ビジネスの集客に非常に効果的です。'
    },
    {
      category: 'SEO・MEO対策',
      question: '競合他社との差別化はできますか？',
      answer: 'AIが競合分析を行い、差別化ポイントを明確にした戦略を提案・実行します。'
    },

    // Instagram運用について
    {
      category: 'Instagram運用',
      question: 'Instagramの投稿頻度はどのくらいですか？',
      answer: 'お客様のご要望に応じて設定可能です。AIが最適な投稿タイミングを分析し、自動投稿します。'
    },
    {
      category: 'Instagram運用',
      question: '画像や動画の素材がなくても大丈夫ですか？',
      answer: 'はい、AIが画像を自動生成できます。テキストの指示だけでプロ級のビジュアルを作成します。'
    },
    {
      category: 'Instagram運用',
      question: 'ハッシュタグの選定もお任せできますか？',
      answer: 'はい、AIがトレンドと関連性を分析し、最適なハッシュタグを自動選定します。'
    },

    // サポート・管理について
    {
      category: 'サポート・管理',
      question: '納品後のサポートはありますか？',
      answer: '月額プランに含まれており、電話・メール・チャットで無制限にサポートします。'
    },
    {
      category: 'サポート・管理',
      question: '更新作業は自分でできますか？',
      answer: 'はい、管理画面から簡単に更新できます。もちろん、更新代行も承ります。'
    },

    // 導入について
    {
      category: '導入',
      question: '打ち合わせは必要ですか？',
      answer: 'オンラインで完結可能です。zoomやGoogle Meetでの打ち合わせに対応しています。'
    },
    {
      category: '導入',
      question: '対応エリアはどこですか？',
      answer: '全国対応しています。オンラインでのサポートで、どこからでもご利用いただけます。'
    },
    {
      category: '導入',
      question: 'こちらで用意するものはありますか？',
      answer: '会社情報、サービス内容、ロゴデータ（あれば）をご用意ください。素材がない場合はAIで生成も可能です。'
    },
    {
      category: '導入',
      question: '個人事業主でも利用できますか？',
      answer: 'はい、個人事業主様から大企業様まで幅広くご利用いただいています。'
    },

    // その他
    {
      category: 'その他',
      question: 'セキュリティ対策は大丈夫ですか？',
      answer: 'SSL化、定期的なセキュリティアップデート、不正アクセス対策など、万全の対策を実施しています。'
    },
    {
      category: 'その他',
      question: '複数サイトの運営も可能ですか？',
      answer: 'はい、複数サイトプランもご用意しています。お得な料金設定となっています。'
    },
  ]

  // カテゴリーリストを作成
  const categories = ['全て', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  // 選択されたカテゴリーに基づいてFAQをフィルタリング
  const filteredFaqs = selectedCategory === '全て'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)

  // 表示するFAQを制限（最初は8個まで）
  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 8)

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative text-center mb-12 w-full z-10">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(30).fill(null).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-gray-800/70 uppercase tracking-wider select-none mr-8">
                FAQ
              </span>
            ))}
            {Array(30).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-800/70 uppercase tracking-wider select-none mr-8">
                FAQ
              </span>
            ))}
          </div>
        </div>
        <h2 className="relative text-3xl md:text-4xl font-bold py-4 text-white">
          よくあるご質問
        </h2>
        <p className="relative text-gray-300 mt-2 text-lg">
          お客様からよくいただく質問をまとめました
        </p>
      </div>
      <div className="container mx-auto px-4 relative z-10">

        {/* カテゴリータブ */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setOpenIndex(null)
                  setShowAll(false)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? _primaryColor : undefined
                }}
              >
                {category}
                <span className="ml-2 text-xs">
                  ({category === '全て' ? faqs.length : faqs.filter(f => f.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* カテゴリーヘッダー */}
          {selectedCategory !== '全て' && (
            <div className="mb-6 text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${_primaryColor}20`, color: _primaryColor }}
              >
                <span>{selectedCategory}に関する質問</span>
              </div>
            </div>
          )}

          {/* FAQ一覧 */}
          <div className="grid gap-4">
            {displayedFaqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  className="w-full text-left bg-gray-900 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{ borderLeft: openIndex === index ? `4px solid ${_primaryColor}` : '4px solid transparent' }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      {selectedCategory === '全て' && (
                        <span
                          className="inline-block text-xs font-medium px-2 py-1 rounded-full mb-2"
                          style={{ backgroundColor: `${_primaryColor}10`, color: _primaryColor }}
                        >
                          {faq.category}
                        </span>
                      )}
                      <h3 className="font-semibold text-lg text-white">{faq.question}</h3>
                    </div>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-1 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      style={{ color: _primaryColor }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* もっと表示ボタン */}
          {filteredFaqs.length > 8 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-8 py-3 text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                style={{ backgroundColor: _primaryColor }}
              >
                {showAll ? (
                  <>
                    表示を減らす
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    もっと表示 ({filteredFaqs.length - 8}件)
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}