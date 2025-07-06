'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Designer {
  id: string;
  title: string;
  thumbnail?: {
    url: string;
  };
  publishedAt: string;
  url: string;
}

const DesignerCards = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at index 3 to account for prepended items
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const response = await fetch('https://quick-web-admin-xktl.vercel.app/api/v1/public/contents/6740c9e0-0035-45c0-b22a-fd5a3930ea76?type=card');
        const result = await response.json();
        if (result.success && result.data) {
          setDesigners(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch designers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDesigners();
  }, []);

  // Create extended array for infinite loop effect with duplicates at both ends
  const extendedDesigners = designers.length > 0 
    ? [...designers.slice(-3), ...designers, ...designers.slice(0, 3)] 
    : [];

  useEffect(() => {
    if (designers.length === 0) return;

    const interval = setInterval(() => {
      if (currentIndex >= designers.length + 2) {
        setCurrentIndex(currentIndex + 1);
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(3);
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        }, 500);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, designers.length]);

  if (loading) {
    return (
      <section className="pt-16 pb-20 bg-white">
        <div className="w-full flex justify-center items-center h-[500px]">
          <div className="text-gray-500">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="w-full">
        <div className="relative h-[400px] overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(calc(-${currentIndex * 340}px + 50vw - 170px))` }}
          >
            {extendedDesigners.map((designer, index) => (
              <div
                key={`${designer.id}-${index}`}
                className="relative flex-shrink-0 w-80 h-[350px] rounded-3xl overflow-hidden shadow-xl mx-3 flex flex-col"
              >
                {/* 上部：写真エリア */}
                <div className="relative h-2/3 overflow-hidden">
                  {designer.thumbnail?.url && (
                    <Image
                      src={designer.thumbnail.url}
                      alt={designer.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                {/* 下部：テキストエリア */}
                <div 
                  className="h-1/3 p-4 text-white flex flex-col justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#60a5fa' : '#3b82f6'} 0%, ${index % 2 === 0 ? '#3b82f6' : '#2563eb'} 100%)`
                  }}
                >
                  <h3 className="text-lg font-bold mb-1">{designer.title}</h3>
                  {designer.publishedAt && (
                    <p className="text-xs opacity-80">
                      {new Date(designer.publishedAt).toLocaleDateString('ja-JP')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {designers.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === (currentIndex - 3) % designers.length ? 'bg-blue-500 w-8' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index + 3)}
            />
          ))}
        </div>
        
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mt-12">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg">
              過去者5%のトップデザイナーを見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>

      <div className="relative mt-24 text-center px-4 overflow-hidden w-full">
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex animate-slide whitespace-nowrap">
            {Array(20).fill(null).map((_, i) => (
              <span key={i} className="text-7xl md:text-9xl font-bold text-gray-50/50 uppercase tracking-wider select-none mr-8">
                Excellent Designers
              </span>
            ))}
            {Array(20).fill(null).map((_, i) => (
              <span key={`dup-${i}`} className="text-7xl md:text-9xl font-bold text-gray-50/50 uppercase tracking-wider select-none mr-8">
                Excellent Designers
              </span>
            ))}
          </div>
        </div> */}
        {/* <h2 className="relative text-4xl md:text-5xl font-bold mb-6 py-4">
          <span className="text-purple-600">デザインの力を信じる</span>
          <span className="text-gray-900">先進的な企業が利用しています。</span>
        </h2> */}
      </div>

      {/* <div className="flex justify-center mt-12 gap-3">
        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div> */}
    </section>
  );
};

export default DesignerCards;