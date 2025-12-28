import Link from "next/link";

interface FooterProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  lineUrl?: string | null;
  brandName?: string;
  isPartnerPage?: boolean;
}

export default function Footer({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null,
  lineUrl = null,
  brandName = "ClickDrive",
  isPartnerPage = false
}: FooterProps) {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
      </div>

      {/* Background brand text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] md:text-[30rem] font-bold text-gray-800/30 uppercase select-none">
          {brandName}
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            無料で相談してみる
          </h2>
          <a 
            href={lineUrl || "https://lin.ee/llRUGcG"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-3"
            style={{ backgroundColor: primaryColor }}
          >
            無料相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Footer Links Grid */}
        {!isPartnerPage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">{brandName}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              HP/webサイト<br />
              制作会社
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: secondaryColor || themeColor || "#8b5cf6" }}>会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">会社概要</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: accentColor || primaryColor }}>サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">お問い合わせ</a></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">利用規約</Link></li>
              <li><a href="https://invented-bangle-e15.notion.site/2255b8517dea80bf8d6fd3534b105cf0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">プライバシーポリシー</a></li>
              <li><a href="https://pages.nolan.co.jp/clickdrive-legal-notice" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">特定商取引法</a></li>
            </ul>
          </div>
        </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 {brandName} Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}