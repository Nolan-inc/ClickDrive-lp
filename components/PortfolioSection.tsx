'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SitePreviewModal from './SitePreviewModal';

interface PortfolioItem {
  id: number | string; // uuid型とnumber型の両方をサポート
  title: string;
  category: string;
  description: string;
  image?: string;
  domain?: string | null;
  tags: string[];
  likes_count?: number;
}

// デフォルトの作品リスト（フォールバック用）
const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'ClickDrive Corporation',
    category: 'コーポレートサイト',
    description: 'レスポンシブデザインで制作したモダンなコーポレートサイト。シンプルで洗練されたデザインにより、ブランドイメージを向上させました。',
    domain: 'https://nolan.co.jp',
    image: '',
    tags: ['Next.js', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Aicon Corporation',
    category: 'コーポレートサイト',
    description: '最新技術を活用したIT企業のコーポレートサイト。革新的なデザインで企業の技術力をアピールしています。',
    domain: 'https://aicon-mu.vercel.app/',
    image: '',
    tags: ['React', 'TypeScript', 'アニメーション']
  },
  {
    id: 3,
    title: 'BarBond',
    category: 'グルメ・飲食店',
    description: '美しいデザインを活かしたバーサイト。洗練された雰囲気とブランディングで集客効果を実現。',
    domain: 'https://barbond-z42g.vercel.app/',
    image: '',
    tags: ['WordPress', 'デザイン', 'ブランディング']
  },
  {
    id: 4,
    title: 'FOOTBALLPARK SHIBUYA',
    category: 'レジャー',
    description: 'ユーザビリティを重視したタレント事務所サイト。直感的な操作性で顧客体験を向上させました。',
    domain: 'https://foot-ball-park.vercel.app/',
    image: '',
    tags: ['React', 'UX/UI', 'CMS']
  },
  {
    id: 5,
    title: 'Paruoni',
    category: 'レジャー',
    description: '魅力的なECサイト。スムーズな購入フローとユーザビリティで売上向上に貢献しました。',
    domain: 'https://pk-oni.or.jp/',
    image: '',
    tags: ['EC', 'Stripe', 'React']
  },
  {
    id: 6,
    title: 'YOGI',
    category: 'グルメ・飲食店',
    description: 'モダンで洗練された飲食店サイト。魅力的なビジュアルと使いやすさで集客力を向上。',
    domain: 'https://yogigreekyogurt.com/',
    image: '',
    tags: ['Next.js', 'レスポンシブ', 'ブランディング']
  },
  {
    id: 7,
    title: 'Briller',
    category: '美容室',
    description: 'スタイリッシュで洗練された美容室サイト。ブランドイメージを高め、予約獲得に貢献。',
    domain: 'https://www.briller-hair.com/',
    image: '',
    tags: ['WordPress', 'レスポンシブ', 'ブランディング']
  },
  {
    id: 8,
    title: 'Tori Design',
    category: 'コーポレートサイト',
    description: 'クリエイティブなデザインエージェンシーのポートフォリオサイト。洗練されたビジュアルで制作実績を魅力的に展示。',
    domain: 'https://toridesign.vercel.app/',
    image: '',
    tags: ['Next.js', 'ポートフォリオ', 'デザイン']
  },
  {
    id: 9,
    title: 'Aura Pro',
    category: 'コーポレートサイト',
    description: 'プロフェッショナルなコーポレートサイト。モダンなデザインで企業の信頼性と専門性をアピール。',
    domain: 'https://www.aura-pro.tokyo/',
    image: '',
    tags: ['React', 'コーポレート', 'レスポンシブ']
  },
  {
    id: 10,
    title: 'Wahrheit',
    category: 'コーポレートサイト',
    description: 'エレガントで洗練されたコーポレートサイト。ブランドの価値を効果的に伝えるデザイン。',
    domain: 'https://wahrheit.cldv.jp/',
    image: '',
    tags: ['ブランディング', 'エレガント', 'デザイン']
  },
  {
    id: 11,
    title: 'Riksol',
    category: 'コーポレートサイト',
    description: '革新的なソリューションを提供する企業のサイト。技術力とイノベーションを表現したデザイン。',
    domain: 'https://riksol.vercel.app/',
    image: '',
    tags: ['Next.js', 'イノベーション', 'テクノロジー']
  },
  {
    id: 12,
    title: 'ZERO1',
    category: 'コーポレートサイト',
    description: '未来志向のテクノロジー企業サイト。クリーンでモダンなデザインが特徴。',
    domain: 'https://zer01-2.vercel.app/',
    image: '/zisseki/ZERO1_top.gif',
    tags: ['Next.js', 'モダンデザイン', 'テクノロジー']
  },
  {
    id: 13,
    title: 'eLife Partners',
    category: 'コーポレートサイト',
    description: 'ライフスタイルをサポートする企業のサイト。親しみやすく信頼感のあるデザイン。',
    domain: 'https://elife-partners.vercel.app/',
    image: '/zisseki/株式会社AG_top.gif',
    tags: ['React', 'UX/UI', 'コーポレート']
  },
  {
    id: 14,
    title: 'マダムシュリンプ銀座',
    category: 'グルメ・飲食店',
    description: '高級感漂う銀座の飲食店サイト。洗練されたビジュアルで上質な雰囲気を演出。',
    domain: 'https://madameshrimp.vercel.app/',
    image: '/zisseki/田代(マダムシュリンプ銀座)_top.gif',
    tags: ['高級レストラン', 'ブランディング', 'レスポンシブ']
  },
  {
    id: 15,
    title: 'セブンナインナインワン',
    category: 'コーポレートサイト',
    description: '数字にこだわるユニークな企業サイト。インパクトのあるデザインが特徴。',
    domain: 'https://7991-nine.vercel.app/',
    image: '/zisseki/株式会社Luxe_top.gif',
    tags: ['ユニークデザイン', 'ブランディング', 'React']
  },
  {
    id: 16,
    title: 'NEXT PASS',
    category: 'IT・テクノロジー',
    description: '次世代のパスポートシステムを提供する革新的なサービス。未来的なUIが特徴。',
    domain: 'https://nextpass-delta.vercel.app/',
    image: '/zisseki/株式会社RISE(PP)_top.gif',
    tags: ['Next.js', 'イノベーション', 'UI/UX']
  },
  {
    id: 17,
    title: 'ぷくぷく',
    category: 'サービス',
    description: '楽しさと親しみやすさを重視したサービスサイト。ポップでカラフルなデザイン。',
    domain: 'https://10062-7366-pukupuku.vercel.app/',
    image: '/zisseki/株式会社Fun9_top.gif',
    tags: ['ポップデザイン', 'サービスサイト', 'レスポンシブ']
  },
  {
    id: 18,
    title: '株式会社SOOL',
    category: 'コーポレートサイト',
    description: 'シンプルで洗練されたコーポレートサイト。ミニマルデザインで情報を効果的に伝える。',
    domain: 'https://sool.vercel.app/',
    image: '/zisseki/株式会社SOOL_top.gif',
    tags: ['ミニマルデザイン', 'コーポレート', 'Next.js']
  }
];

const defaultCategories = [
  '全て',
  'エンタメ',
  'コーポレートサイト',
  'レジャー',
  '不動産・住宅',
  '美容・エステ',
  '医療・クリニック',
  '宿泊・旅行',
  'グルメ・飲食店',
  'ビジネスサービス',
  '製造業',
  'その他'
];

interface PortfolioSectionProps {
  portfolioItems?: PortfolioItem[];
  categories?: string[];
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  lineUrl?: string | null;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems = defaultPortfolioItems,
  categories = defaultCategories,
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed",
  secondaryColor = null,
  accentColor = null,
  lineUrl = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [showAll, setShowAll] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<number | string>>(new Set());
  const [failedIframes, setFailedIframes] = useState<Set<number | string>>(new Set());
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: ''
  });

  const filteredItems = selectedCategory === '全て' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // 表示数制限の実装（PC: 12個、モバイル: 4個）
  const getDisplayLimit = () => {
    if (typeof window === 'undefined') return 12;
    return window.innerWidth >= 768 ? 12 : 4;
  };

  const [displayLimit, setDisplayLimit] = useState(getDisplayLimit);

  React.useEffect(() => {
    const handleResize = () => {
      setDisplayLimit(getDisplayLimit());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // カテゴリ変更時にshowAllをリセット
  React.useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, displayLimit);
  const hasMoreItems = filteredItems.length > displayLimit;

  const handlePreview = (url: string, title: string) => {
    setPreviewModal({ isOpen: true, url, title });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, url: '', title: '' });
  };

  const handleImageError = (itemId: number | string) => {
    setFailedImages(prev => new Set(prev).add(itemId));
  };

  const handleIframeError = (itemId: number | string) => {
    setFailedIframes(prev => new Set(prev).add(itemId));
  };

  // Get category button color based on index
  const getCategoryColor = (index: number) => {
    const colors = [themeColor, secondaryColor || primaryColor, accentColor || primaryColor, primaryColor];
    return colors[index % colors.length];
  };

  // Get design style based on category
  const getCategoryStyle = (category: string) => {
    const styles: Record<string, {
      primary: string;
      secondary: string;
      gradient: string;
      accent: string;
    }> = {
      'コーポレートサイト': {
        primary: '#3b82f6', // Blue
        secondary: '#1e40af',
        gradient: 'from-blue-500 to-blue-700',
        accent: '#60a5fa'
      },
      'グルメ・飲食店': {
        primary: '#f97316', // Orange
        secondary: '#c2410c',
        gradient: 'from-orange-500 to-red-600',
        accent: '#fb923c'
      },
      'レジャー': {
        primary: '#10b981', // Green
        secondary: '#047857',
        gradient: 'from-green-500 to-emerald-600',
        accent: '#34d399'
      },
      '美容室': {
        primary: '#ec4899', // Pink
        secondary: '#be185d',
        gradient: 'from-pink-500 to-rose-600',
        accent: '#f472b6'
      }
    };
    return styles[category] || {
      primary: themeColor,
      secondary: primaryColor,
      gradient: 'from-purple-500 to-purple-700',
      accent: themeColor
    };
  };

  return (
    <section className="relative py-20 bg-transparent overflow-hidden" style={{ maxWidth: '100vw' }}>
      {/* Background decoration with multiple colors */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] font-bold uppercase select-none whitespace-nowrap bg-gradient-to-r from-gray-100/30 via-gray-100/20 to-gray-100/30 bg-clip-text text-transparent">
          Works
        </span>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {secondaryColor && (
          <div 
            className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl opacity-10"
            style={{ backgroundColor: secondaryColor }}
          />
        )}
        {accentColor && (
          <div 
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-2xl opacity-10"
            style={{ backgroundColor: accentColor }}
          />
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-12 lg:px-[100px] overflow-x-hidden w-full max-w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            制作実績
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            私たちの作品
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            様々な業界のクライアント様と共に作り上げた、成果にこだわったウェブサイトをご紹介します
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex gap-3 px-4" style={{ minWidth: 'max-content' }}>
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-600 shadow-md hover:opacity-80'
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === category ? getCategoryColor(index) : undefined 
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Flex wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 shadow-md hover:opacity-80'
                }`}
                style={{ 
                  backgroundColor: selectedCategory === category ? getCategoryColor(index) : undefined 
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {itemsToShow.map((item) => {
            const categoryStyle = getCategoryStyle(item.category);
            return (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                borderTop: `4px solid ${categoryStyle.primary}`
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {item.domain && !failedIframes.has(item.id) ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <iframe
                      src={item.domain}
                      className="w-full h-full border-0 transform scale-50 origin-top-left"
                      style={{
                        width: '200%',
                        height: '200%',
                        pointerEvents: 'none',
                        maxWidth: 'none'
                      }}
                      title={`Preview of ${item.title}`}
                      loading="lazy"
                      onError={() => handleIframeError(item.id)}
                      onLoad={() => {
                        if (item.domain?.includes('d-office-ikeda.com')) {
                          handleIframeError(item.id);
                          return;
                        }
                      }}
                    />
                    {/* Overlay for interaction */}
                    <div
                      className="absolute inset-0 bg-transparent cursor-pointer group"
                      onClick={() => handlePreview(item.domain!, item.title)}
                    >
                      <div className="absolute inset-0 transition-all duration-200 flex items-center justify-center" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${categoryStyle.primary}20`} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: categoryStyle.primary }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : item.image && !failedImages.has(item.id) ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${categoryStyle.primary}20`, color: categoryStyle.primary }}>
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors" style={{
                  color: 'inherit'
                }} onMouseEnter={(e) => e.currentTarget.style.color = categoryStyle.primary} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show More ({filteredItems.length - displayLimit}件)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            あなたのプロジェクトも私たちと一緒に成功させませんか？
          </p>
          <a
            href={lineUrl || "https://lin.ee/llRUGcG"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            無料相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Preview Modal */}
      <SitePreviewModal
        isOpen={previewModal.isOpen}
        onClose={closePreview}
        url={previewModal.url}
        title={previewModal.title}
      />
    </section>
  );
};

export default PortfolioSection;