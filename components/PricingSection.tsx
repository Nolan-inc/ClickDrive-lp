"use client"

export default function PricingSection() {
  const comparisonData = [
    { item: '初期費用', quickweb: '0円（期間限定）', a: '15万円〜', b: '30万円', c: '0円' },
    { item: '月額費用', quickweb: '9,800円（税込）', a: '10,000円〜', b: '月額0円', c: '月額9,800円' },
    { item: 'ページ数', quickweb: '〜12枚', a: '10枚', b: '8枚', c: '1枚' },
    { item: '制作期間', quickweb: '最短1週間／平均2週間', a: '約3週間〜', b: '1ヶ月以上', c: '2〜3週間' },
    { item: 'スマホ対応', quickweb: '標準対応（追加料金なし）', a: 'オプション対応', b: '標準対応', c: '標準対応' },
    { item: 'SEO内部対策', quickweb: '標準対応', a: '別料金', b: '一部対応', c: '別料金' },
    { item: 'デザイン提案／修正', quickweb: '5回まで', a: '2回まで', b: '標準対応', c: '5回まで' },
    { item: 'フォーム・予約機能', quickweb: '標準搭載', a: '有料', b: '有料', c: '一部有料' },
    { item: '独自ドメイン対応', quickweb: '対応（費用別途）', a: '対応（有料）', b: '対応（有料）', c: '対応（有料）' },
    { item: '契約期間の縛り', quickweb: '最低1年契約', a: '6ヶ月〜1年契約あり', b: '年間契約必須', c: '1年契約' }
  ];

  return (
    <section id="price" className="py-20 pt-32 bg-gray-50 overflow-hidden">
      <div className="relative text-center mb-4 w-full">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(20).fill(null).map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Comparison
              </span>
            ))}
            {Array(20).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-100/70 uppercase tracking-wider select-none mr-8">
                Comparison
              </span>
            ))}
          </div>
        </div>
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 py-4">
          他社との比較
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-xl text-center text-gray-700 mb-16">QuickWebの強み</p>
        
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-gray-900">項目</th>
                <th className="text-center py-4 px-4 font-bold text-blue-500 text-lg">QuickWeb</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">A社</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">B社</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">C社</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="py-4 px-4 font-medium text-gray-800">{row.item}</td>
                  <td className="py-4 px-4 text-center font-bold text-blue-500">{row.quickweb}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.a}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.b}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://lin.ee/llRUGcG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-blue-600 transition-colors shadow-lg inline-block"
          >
            今すぐ始める
          </a>
        </div>
      </div>
    </section>
  )
}