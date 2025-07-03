export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-24 pb-12 overflow-hidden">
      {/* Background Nolan text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] md:text-[30rem] font-bold text-gray-100/50 uppercase select-none">
          Nolan
        </span>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            無料で相談してみる
          </h2>
          <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center gap-3">
            無料相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Nolan</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              優秀なデザイナーと企業を繋ぐ<br />
              マッチングプラットフォーム
            </p>
          </div>
          
          {/* Service Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">サービス</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">デザイナー検索</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">料金プラン</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">導入事例</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">よくある質問</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">会社概要</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">採用情報</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">ニュース</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">ブログ</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">お問い合わせ</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-purple-600 text-sm">利用規約</a></li>
              <li><a href="https://invented-bangle-e15.notion.site/2255b8517dea80bf8d6fd3534b105cf0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 text-sm">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">特定商取引法</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Nolan Inc. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}