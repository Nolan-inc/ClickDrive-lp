export default function FeaturesSection() {
  const features = [
    {
      title: '実績',
      items: [
        'ポートフォリオ公開',
        '評価・レビュー表示',
        '実績証明書発行',
        '過去案件の詳細'
      ]
    },
    {
      title: 'コスト',
      items: [
        '料金の透明性',
        '見積もり自動生成',
        '支払い保証システム',
        '分割払い対応'
      ]
    },
    {
      title: 'サービス',
      items: [
        '24時間サポート',
        'プロジェクト管理',
        'コミュニケーションツール',
        '契約書自動生成'
      ]
    }
  ]
  
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          理想のデザイナーとマッチングを円滑に、確実に運用できます
        </h2>
        <p className="text-center text-gray-300 mb-12">
          20,000名以上のデザイナーの中から最適な人材を
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 text-purple-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}