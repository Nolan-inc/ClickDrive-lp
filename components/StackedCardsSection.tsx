'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Card {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  image: string;
}

const cards: Card[] = [
  {
    title: '高品質かつ高クオリティ',
    subtitle: '',
    description: '豊富な実績と最新トレンドを取り入れ、\n常にクオリティを追求した成果物を提供。',
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
    image: '/gif/kouhinnshitu.gif',
  },
  {
    title: 'スピード対応と柔軟性',
    subtitle: '',
    description: '企画から納品・運用までワンストップで迅速対応。\n急ぎの案件も専属チームで確実に対応。',
    bgColor: 'bg-gradient-to-br from-sky-400 to-indigo-500',
    image: '/gif/speed.png',
  },
  {
    title: '伝わるコミュニケーション力',
    subtitle: '',
    description: '課題を正確に把握し、成果につながる提案と\n柔軟な修正対応で安心して任せられる体制を提供。',
    bgColor: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    image: '/gif/comm.png',
  },
];

const StackedCardsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        // We're within the section
        const progress = Math.abs(scrollStart) / (sectionHeight - windowHeight);
        // setScrollProgress(Math.min(1, Math.max(0, progress)));
        
        // Calculate which card should be active
        const cardIndex = Math.floor(progress * cards.length);
        setActiveIndex(Math.min(cardIndex, cards.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-100 overflow-visible"
      style={{ height: `${(cards.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-50 w-full">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="flex animate-slide whitespace-nowrap">
                {Array(20).fill(null).map((_, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-bold text-gray-200/50 uppercase tracking-wider select-none mr-8">
                    Strength
                  </span>
                ))}
                {Array(20).fill(null).map((_, i) => (
                  <span key={`dup-${i}`} className="text-6xl md:text-8xl font-bold text-gray-200/50 uppercase tracking-wider select-none mr-8">
                    Strength
                  </span>
                ))}
              </div>
            </div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 mb-2 py-4">我々の3つの強み</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-0">選ばれる理由があります</p>
        </div>
        <div className="relative w-full h-full flex items-center justify-center pt-80 md:pt-96">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index < activeIndex;
          const isNext = index > activeIndex;
          
          // Calculate transform and opacity based on position
          let transform = '';
          let opacity = 1;
          
          if (isPrevious) {
            // Previous cards slide up and fade out
            transform = `translateY(-${(activeIndex - index) * 100}%)`;
            opacity = 0;
          } else if (isNext) {
            // Next cards are stacked below with slight offset
            const offset = (index - activeIndex) * 30;
            transform = `translateY(${offset}px) scale(${1 - (index - activeIndex) * 0.05})`;
            opacity = 1 - (index - activeIndex) * 0.2;
          } else {
            // Active card
            transform = 'translateY(0)';
            opacity = 1;
          }

          return (
            <div
              key={index}
              className="absolute w-[90vw] md:w-[70vw] h-[70vh] md:h-1/2 transition-all duration-500 ease-out rounded-2xl shadow-2xl overflow-hidden"
              style={{
                top: '58%',
                left: '50%',
                transform: `translate(-50%, -50%) ${transform}`,
                opacity,
                zIndex: cards.length - index,
              }}
            >
              <div className={`w-full h-full ${card.bgColor} flex items-center text-white p-6 md:p-12`}>
                <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 md:gap-12">
                  {/* Text Content - Left Side */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 shadow-lg">
                        <span className="text-4xl font-bold text-white">
                          {index + 1}
                        </span>
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300"
                        style={{
                          transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                          opacity: isActive ? 1 : 0.7,
                        }}>
                      {card.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed transition-all duration-300 text-white/90 whitespace-pre-line"
                       style={{
                         transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                         opacity: isActive ? 1 : 0.8,
                       }}>
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Image - Right Side */}
                  <div className="relative w-full lg:w-[500px] h-[250px] lg:h-[350px] flex-shrink-0 overflow-hidden rounded-xl transition-all duration-300"
                       style={{
                         transform: isActive ? 'scale(1)' : 'scale(0.9)',
                         opacity: isActive ? 1 : 0.7,
                       }}>
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
              
              {/* Add gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          );
        })}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-8 right-8 z-50">
          <div className="flex flex-col gap-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCardsSection;