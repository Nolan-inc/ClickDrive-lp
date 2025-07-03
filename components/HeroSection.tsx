"use client"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            理想のデザイナーとの出会いを。
          </h1>
          <p className="text-gray-600 text-lg">
            優秀なデザイナーが集まるプラットフォーム。企業の可能性を広げる最適なパートナーを見つけましょう。
          </p>
          <p className="text-gray-500 mt-2">
            20,000名以上のデザイナーが登録済み
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white h-80">
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
              <img src="/api/placeholder/256/256" alt="Designer" className="object-cover" />
            </div>
            <div className="relative z-10">
              <span className="text-sm opacity-80">Featured Designer</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">山田 太郎</h3>
              <p className="text-sm opacity-90 mb-4">UI/UXデザイナー</p>
              <div className="space-y-2 text-sm">
                <p>5年以上の経験</p>
                <p>大手企業での実績多数</p>
                <p>モバイルアプリ専門</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white h-80">
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
              <img src="/api/placeholder/256/256" alt="Designer" className="object-cover" />
            </div>
            <div className="relative z-10">
              <span className="text-sm opacity-80">Top Rated</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">佐藤 花子</h3>
              <p className="text-sm opacity-90 mb-4">グラフィックデザイナー</p>
              <div className="space-y-2 text-sm">
                <p>ブランディング専門</p>
                <p>受賞歴多数</p>
                <p>迅速な対応</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 p-8 text-white h-80">
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
              <img src="/api/placeholder/256/256" alt="Designer" className="object-cover" />
            </div>
            <div className="relative z-10">
              <span className="text-sm opacity-80">Rising Star</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">鈴木 一郎</h3>
              <p className="text-sm opacity-90 mb-4">Webデザイナー</p>
              <div className="space-y-2 text-sm">
                <p>最新技術に精通</p>
                <p>レスポンシブ対応</p>
                <p>SEO最適化</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}