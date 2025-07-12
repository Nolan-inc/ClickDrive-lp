import Image from 'next/image';

export default function DeviceSection() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              直感的なインターフェースで、サイト運用も簡単！
            </h2>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">AI自動提案</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">SNS連携</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">かんたん更新</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">トレンド分析</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">記事管理</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">画像編集</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">自動最適化</span>
              <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-600 px-4 py-2 rounded-full">ワンクリック更新</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 rounded-3xl transform rotate-3 scale-95"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="text-white lg:col-span-2 order-2 lg:order-1">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">
                      記事の更新率95.8%
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      AIがアクセスデータを分析し、最適な記事更新を自動で提案。<br />
                      最新の投稿ネタを見逃さず、サイトを常に新鮮に保てます。
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">
                      トレンド分析で集客強化
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Instagram・TikTok連携でSNSトレンドを反映。<br />
                      写真やヘッダーもワンクリックで最新化できます。
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">
                      投稿・画像をかんたん管理
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      管理画面からブログ記事やトップ写真を誰でも簡単に更新可能。<br />
                      複雑な操作は一切不要です。
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-800/40 to-sky-800/40 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-3 text-sky-300">こんな方におすすめ</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-gray-300">
                        <span className="text-sky-400 mr-2">✓</span>
                        SNSと連動して集客したい
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="text-sky-400 mr-2">✓</span>
                        記事更新を自動化して時間を節約したい
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="text-sky-400 mr-2">✓</span>
                        専門知識がなくてもサイトを運用したい
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative lg:col-span-3 order-1 lg:order-2">
                  <div className="bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl">
                    <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden rounded-xl">
                      <Image
                        src="/gif/screen.gif"
                        alt="サイト管理画面"
                        fill
                        className="object-contain"
                        unoptimized
                        loading="lazy"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}