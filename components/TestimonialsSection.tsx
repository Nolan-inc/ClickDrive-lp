export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Client Company 1',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Feedback',
      description: 'デザイナーマッチングプラットフォームを利用して、理想的なパートナーを見つけることができました。プロジェクトの品質が格段に向上しました。',
      author: '代表取締役 山田様'
    },
    {
      name: 'Client Company 2',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Experience',
      description: '優秀なデザイナーとの出会いにより、ブランドイメージが一新され、売上が30%向上しました。素晴らしいサービスです。',
      author: 'マーケティング部長 鈴木様'
    },
    {
      name: 'Client Company 3',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Success',
      description: 'スピーディーなマッチングと、質の高いデザイナーの提案により、プロジェクトが予定より早く完了しました。',
      author: 'プロダクトマネージャー 佐藤様'
    },
    {
      name: 'Client Company 4',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Review',
      description: 'コストパフォーマンスが非常に高く、期待以上の成果を得ることができました。今後も継続的に利用したいです。',
      author: 'CTO 田中様'
    },
    {
      name: 'Client Company 5',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Story',
      description: 'デザイナーとのコミュニケーションがスムーズで、要望を的確に理解してもらえました。満足度100%です。',
      author: '事業部長 高橋様'
    },
    {
      name: 'Client Company 6',
      logo: '/api/placeholder/120/60',
      testimonial: 'Clients Voice',
      description: 'プラットフォームの使いやすさと、デザイナーの質の高さに感動しました。強くおすすめします。',
      author: 'CEO 渡辺様'
    }
  ]
  
  return (
    <section className="relative py-16 pb-40 bg-purple-900 text-white section-curve-bottom overflow-visible">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          導入実績のUIとよくある企業の困りごとによく対応しています
        </h2>
        <p className="text-center text-purple-200 mb-12">
          多くの企業様にご利用いただき、高い評価をいただいています
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-purple-800 rounded-lg p-6 hover:bg-purple-700 transition-colors">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.name}
                    className="w-full h-12 object-contain"
                  />
                </div>
                <h3 className="font-bold text-sm mb-2">{testimonial.testimonial}</h3>
                <div className="hidden group-hover:block absolute z-10 bg-white text-gray-800 p-4 rounded-lg shadow-xl mt-2 w-64 left-1/2 transform -translate-x-1/2">
                  <p className="text-sm mb-2">{testimonial.description}</p>
                  <p className="text-xs text-gray-600">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}