'use client';

import React from 'react';

interface OEMPartnerSectionProps {
  themeColor?: string;
}

const OEMPartnerSection: React.FC<OEMPartnerSectionProps> = ({
  themeColor = "#8b5cf6"
}) => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}1a` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: `${themeColor}0d` }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ビジネスパートナー募集
          </h2>
          <p className="text-lg text-gray-300">
            OEMパートナーとして、一緒にビジネスを拡大しませんか？
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://partner.cldv.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ backgroundColor: themeColor }}
          >
            <span>⚡</span>
            OEMでパートナーになってくれる方はこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default OEMPartnerSection;
