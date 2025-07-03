export default function TeamSection() {
  const members = [
    {
      name: '高橋 健太',
      role: 'UIデザイナー',
      description: 'モバイルアプリのUI設計を専門とし、直感的で美しいインターフェースを提供',
      skills: ['Figma', 'Sketch', 'Adobe XD'],
      image: '/api/placeholder/200/200'
    },
    {
      name: '田中 美咲',
      role: 'UXリサーチャー',
      description: 'ユーザー調査から得られた洞察を基に、最適なユーザー体験を設計',
      skills: ['調査設計', 'データ分析', 'プロトタイピング'],
      image: '/api/placeholder/200/200'
    },
    {
      name: '山田 太郎',
      role: 'Webデザイナー',
      description: 'レスポンシブデザインとSEOを考慮した効果的なWebサイトを制作',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress'],
      image: '/api/placeholder/200/200'
    },
    {
      name: '佐藤 花子',
      role: 'グラフィックデザイナー',
      description: 'ブランディングからマーケティング素材まで幅広いデザインを担当',
      skills: ['Illustrator', 'Photoshop', 'InDesign'],
      image: '/api/placeholder/200/200'
    },
    {
      name: '鈴木 一郎',
      role: 'モーションデザイナー',
      description: '魅力的なアニメーションと動画コンテンツで視覚的なインパクトを創出',
      skills: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      image: '/api/placeholder/200/200'
    }
  ]
  
  return (
    <section id="member" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          優秀なデザイナーが多数登録しています
        </h2>
        <p className="text-center text-gray-600 mb-12">
          各分野のスペシャリストがあなたのプロジェクトを成功に導きます
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-purple-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}