'use client';

import React from 'react';
import Image from 'next/image';

interface Card {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  image: string;
}


interface StackedCardsSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

const StackedCardsSection: React.FC<StackedCardsSectionProps> = ({ 
  themeColor = "#2196f3", 
  primaryColor = "#0066cc",
  secondaryColor = null,
  accentColor = null
}) => {
  const cards: Card[] = [
    {
      title: '高品質かつ高クオリティ',
      subtitle: '',
      description: '豊富な実績と最新トレンドを取り入れ、\n常にクオリティを追求した成果物を提供。',
      bgColor: secondaryColor || themeColor,
      image: '/gif/kouhinnshitu.gif',
    },
    {
      title: 'スピード対応と柔軟性',
      subtitle: '',
      description: '企画から納品・運用までワンストップで迅速対応。\n急ぎの案件も専属チームで確実に対応。',
      bgColor: accentColor || primaryColor,
      image: '/gif/speed.png',
    },
    {
      title: '伝わるコミュニケーション力',
      subtitle: '',
      description: '課題を正確に把握し、成果につながる提案と\n柔軟な修正対応で安心して任せられる体制を提供。',
      bgColor: `linear-gradient(135deg, ${themeColor}, ${secondaryColor || primaryColor})`,
      image: '/gif/comm.png',
    },
  ];

  return (
    <section className="relative bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            我々の3つの強み
          </h2>
          <p className="text-lg md:text-xl text-gray-600">選ばれる理由があります</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              style={{ 
                background: card.bgColor.includes('gradient') ? card.bgColor : card.bgColor
              }}
            >
              <div className="p-8 text-white">
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/90 whitespace-pre-line mb-6">
                  {card.description}
                </p>
                
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    unoptimized={card.image.endsWith('.gif')}
                    loading="lazy"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackedCardsSection;