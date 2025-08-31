import Link from "next/link";

interface FooterProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  lineUrl?: string | null;
}

export default function Footer({ 
  primaryColor = "#0066cc",
  secondaryColor = null,
  accentColor = null,
  lineUrl = null
}: FooterProps) {
  return (
    <footer className="relative bg-gray-50 pt-24 pb-12 overflow-hidden">
      {/* Background ClickDrive text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] md:text-[30rem] font-bold text-gray-100/50 uppercase select-none">
          ClickDrive
        </span>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">ClickDrive</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              HP/webサイト<br />
              制作会社
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">会社概要</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">お問い合わせ</a></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-500 text-sm">利用規約</Link></li>
              <li><a href="https://invented-bangle-e15.notion.site/2255b8517dea80bf8d6fd3534b105cf0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 text-sm">プライバシーポリシー</a></li>
              <li><a href="https://pages.nolan.co.jp/clickdrive-legal-notice" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 text-sm">特定商取引法</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 ClickDrive Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}