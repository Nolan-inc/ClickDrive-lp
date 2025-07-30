import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white pt-32 pb-0 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 flex items-center justify-center overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap">
          {Array(20).fill(null).map((_, i) => (
            <span key={i} className="text-7xl md:text-9xl font-bold text-blue-100/50 uppercase tracking-wider select-none mr-8">
              Designer Match
            </span>
          ))}
          {Array(20).fill(null).map((_, i) => (
            <span key={`dup-${i}`} className="text-7xl md:text-9xl font-bold text-blue-100/50 uppercase tracking-wider select-none mr-8">
              Designer Match
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="relative">
            <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight py-4">
              <span className="text-sky-400">安い</span>
              <span className="text-gray-900">と</span>
              <span className="text-sky-400">高品質</span>
              <span className="text-gray-900">って両立できるんだ。</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            最短1週間で公開！<br />
            安いのに超高品質webサイトを月額9,800円で作れる！
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">継続率</p>
            <p className="text-4xl md:text-5xl font-bold text-sky-400">98%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">累計制作件数</p>
            <p className="text-4xl md:text-5xl font-bold text-sky-400">100<span className="text-2xl">件〜</span></p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">ご相談後最短</p>
            <p className="text-3xl md:text-4xl font-bold text-sky-400">即日対応</p>
          </div>
          <div className="relative">
            <div className="bg-pink-50 rounded-2xl px-5 py-4 relative border border-pink-200">
              <div className="flex items-center gap-2">
                <div className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-lg text-pink-600 font-bold leading-tight">初期費用0円！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;