'use client';

import React from 'react';

const LineConsultation = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="relative">
            {/* Floating LINE icons */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-pulse delay-75"></div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* LINE green accent stripe */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    気軽に相談できる
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    LINEで無料相談
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    お問い合わせフォームよりも気軽に、LINEでご相談いただけます。<br />
                    専門スタッフが迅速に対応し、あなたの疑問にお答えします。
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">営業時間内は即レス対応</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">画像や資料の送信も簡単</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">過去の相談履歴も確認可能</span>
                    </li>
                  </ul>
                </div>
                
                {/* Right side - QR Code and Button */}
                <div className="flex flex-col items-center gap-6">
                  {/* QR Code placeholder - you can replace with actual QR code image */}
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-32 h-32 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 3h6v6H3zm2 2v2h2V5zm6-2h2v2h2v2h-2v2h2v2h-2v2h2v2h-4V9h2V7h-2zm4 0h6v6h-6zm2 2v2h2V5zM3 11h2v2h2v-2h2v4H7v2H5v-2H3zm6 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h2v4h-2v-2h-2v-2h2v-2h-2zM3 15h6v6H3zm2 2v2h2v-2zm10 0h2v2h2v2h-4z"/>
                        </svg>
                        <p className="text-xs text-gray-500">QRコードを読み取る</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://lin.ee/llRUGcG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3 group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.66 9.03 8.42 9.68.29.07.42-.13.42-.29v-1.02c-3.44.75-4.17-1.66-4.17-1.66-.56-1.43-1.37-1.81-1.37-1.81-1.12-.76.08-.75.08-.75 1.24.09 1.89 1.27 1.89 1.27 1.1 1.89 2.89 1.34 3.59 1.03.11-.8.43-1.34.78-1.65-2.74-.31-5.62-1.37-5.62-6.1 0-1.35.48-2.45 1.27-3.31-.13-.31-.55-1.56.12-3.26 0 0 1.04-.33 3.4 1.27.99-.27 2.04-.41 3.09-.41 1.05 0 2.11.14 3.09.41 2.36-1.6 3.4-1.27 3.4-1.27.67 1.7.25 2.95.12 3.26.79.86 1.27 1.96 1.27 3.31 0 4.74-2.89 5.79-5.64 6.09.44.38.84 1.13.84 2.28v3.38c0 .16.13.36.43.29C20.34 21.03 24 16.95 24 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    LINEで相談する
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <p className="text-sm text-gray-500 text-center">
                    友だち追加で<br />
                    <span className="text-green-600 font-semibold">無料相談クーポン</span>プレゼント！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineConsultation;