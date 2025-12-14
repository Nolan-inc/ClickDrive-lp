"use client"

import Image from 'next/image'

interface ContactSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  lineUrl?: string | null;
}

export default function ContactSection({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null,
  lineUrl = null
}: ContactSectionProps) {

  return (
    <section id="contact" className="relative py-16 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="relative text-center mb-4 overflow-hidden w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex animate-slide whitespace-nowrap">
              {Array(20).fill(null).map((_, i) => (
                <span key={i} className="text-6xl md:text-8xl font-bold text-gray-800/70 uppercase tracking-wider select-none mr-8">
                  Contact
                </span>
              ))}
              {Array(20).fill(null).map((_, i) => (
                <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-800/70 uppercase tracking-wider select-none mr-8">
                  Contact
                </span>
              ))}
            </div>
          </div>
          <h2 className="relative text-3xl md:text-4xl font-bold py-4">
            <span style={{ color: secondaryColor || themeColor }}>お問い</span><span style={{ color: accentColor || themeColor }}>合わせ</span>
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 mb-12">
            プロジェクトのご相談やサービスに関するご質問はLINEで承っております
          </p>
          
          {/* LINE Consultation Only */}
          <div>
              <div className="rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between bg-gray-900 border border-gray-700">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    気軽に相談できる
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    <span style={{ color: secondaryColor || themeColor }}>LINE</span>で<span style={{ color: accentColor || primaryColor }}>無料相談</span>
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    お問い合わせフォームよりも気軽に、<br />
                    LINEでご相談いただけます。
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">営業時間内は即レス対応</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: secondaryColor || primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">画像や資料の送信も簡単</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor || primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">過去の相談履歴も確認可能</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  {/* QR Code */}
                  <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <div className="relative w-32 h-32">
                      <Image
                        src="/L_gainfriends_2dbarcodes_GW.png"
                        alt="LINE QRコード"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <a 
                    href={lineUrl || "https://lin.ee/llRUGcG"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-base transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2 group w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.66 9.03 8.42 9.68.29.07.42-.13.42-.29v-1.02c-3.44.75-4.17-1.66-4.17-1.66-.56-1.43-1.37-1.81-1.37-1.81-1.12-.76.08-.75.08-.75 1.24.09 1.89 1.27 1.89 1.27 1.1 1.89 2.89 1.34 3.59 1.03.11-.8.43-1.34.78-1.65-2.74-.31-5.62-1.37-5.62-6.1 0-1.35.48-2.45 1.27-3.31-.13-.31-.55-1.56.12-3.26 0 0 1.04-.33 3.4 1.27.99-.27 2.04-.41 3.09-.41 1.05 0 2.11.14 3.09.41 2.36-1.6 3.4-1.27 3.4-1.27.67 1.7.25 2.95.12 3.26.79.86 1.27 1.96 1.27 3.31 0 4.74-2.89 5.79-5.64 6.09.44.38.84 1.13.84 2.28v3.38c0 .16.13.36.43.29C20.34 21.03 24 16.95 24 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    LINEで相談する
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    友だち追加で<span className="text-green-600 font-semibold">無料相談クーポン</span>プレゼント！
                  </p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}