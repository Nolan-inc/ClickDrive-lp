"use client"

import { useState } from 'react'

interface FAQSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

export default function FAQSection({
  primaryColor: _primaryColor = "#0066cc"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: '修正は何回まで可能ですか？',
      answer: 'デザイン案提出後、5回まで無料対応しています。大幅な仕様変更は別途料金がかかる場合があります。'
    },
    {
      question: 'ドメイン取得やサーバー契約もお願いできますか？',
      answer: 'はい、ドメイン取得・サーバー契約・設定代行まで対応可能です。'
    },
    {
      question: '納品後の保守や更新はしてもらえますか？',
      answer: '定期更新や保守管理プランをご用意しています。必要に応じてお申し付けください。'
    },
    {
      question: 'こちらで用意するものはありますか？',
      answer: '原稿や掲載する画像などをご用意いただく場合があります。撮影・ライティングの代行も可能です。'
    },
    {
      question: '対応エリアはどこですか？',
      answer: '全国対応しています。オンラインでのお打ち合わせも可能ですので、遠方でも問題ありません。'
    }
  ]
  
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="relative text-center mb-12 w-full">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(30).fill(null).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                FAQ
              </span>
            ))}
            {Array(30).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                FAQ
              </span>
            ))}
          </div>
        </div>
        <h2 className="relative text-3xl md:text-4xl font-bold py-4 text-gray-900">
          よくあるご質問
        </h2>
      </div>
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ borderLeft: openIndex === index ? `4px solid ${_primaryColor}` : '4px solid transparent' }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
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
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}