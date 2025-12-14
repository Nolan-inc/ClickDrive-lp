'use client';

import React, { useState } from 'react';

interface MEODetailSectionProps {
  themeColor?: string;
  primaryColor?: string;
}

const MEODetailSection: React.FC<MEODetailSectionProps> = ({
  themeColor = "#8b5cf6",
  primaryColor = "#7c3aed"
}) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [activeDemo, setActiveDemo] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [showGeneratedImage, setShowGeneratedImage] = useState(false);
  const [generatedImagePath, setGeneratedImagePath] = useState('');
  const [isGeneratingBlog, setIsGeneratingBlog] = useState(false);
  const [generatedBlog, setGeneratedBlog] = useState('');
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [selectedIndustry, setSelectedIndustry] = useState('restaurant');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDaySelector, setShowDaySelector] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [showAIScheduleDialog, setShowAIScheduleDialog] = useState(false);
  const [aiScheduleType, setAiScheduleType] = useState<'instagram' | 'meo' | 'blog' | ''>('');

  // 業界タイプの定義
  const industries = [
    { id: 'restaurant', label: '飲食', icon: '🍽️' },
    { id: 'beauty', label: '美容', icon: '💄' },
    { id: 'apparel', label: 'アパレル', icon: '👗' },
    { id: 'corporate', label: 'コーポレート', icon: '🏢' },
    { id: 'realestate', label: '不動産', icon: '🏘️' }
  ];

  // 業界別のサンプルデータ
  const getIndustryData = () => {
    switch(selectedIndustry) {
      case 'beauty':
        return {
          storeName: 'Beauty Salon Lumière',
          storeType: '美容サロン',
          reviews: [
            { id: 1, author: '山田 美咲', rating: 5, date: '2024年12月1日', comment: 'カットとカラーをお願いしました。仕上がりが素晴らしく、スタッフの方も親切でした！', sentiment: 'positive' },
            { id: 2, author: '佐藤 麻衣', rating: 4, date: '2024年11月28日', comment: 'トリートメントが気持ちよかったです。もう少し予約が取りやすいと嬉しいです。', sentiment: 'neutral' }
          ],
          posts: ['新作ヘアカラー入荷！', '冬のケアキャンペーン', 'スタッフ募集中'],
          categories: ['ヘアケア', 'スキンケア', 'メイク', 'ネイル'],
          features: ['カット', 'カラー', 'パーマ', 'トリートメント', 'ヘッドスパ']
        };
      case 'apparel':
        return {
          storeName: 'Fashion Store TREND',
          storeType: 'アパレルショップ',
          reviews: [
            { id: 1, author: '高橋 優子', rating: 5, date: '2024年12月1日', comment: 'スタッフのコーディネート提案が的確で、素敵な服が見つかりました！', sentiment: 'positive' },
            { id: 2, author: '伊藤 結衣', rating: 4, date: '2024年11月28日', comment: 'おしゃれな商品が多いです。サイズ展開がもっと増えると嬉しいです。', sentiment: 'neutral' }
          ],
          posts: ['冬の新作入荷！', 'セール開催中', '新ブランド取扱開始'],
          categories: ['トップス', 'ボトムス', 'アウター', 'アクセサリー'],
          features: ['レディース', 'メンズ', 'キッズ', 'バッグ', 'シューズ']
        };
      case 'corporate':
        return {
          storeName: 'Tech Solutions Corp',
          storeType: 'IT企業',
          reviews: [
            { id: 1, author: '株式会社ABC', rating: 5, date: '2024年12月1日', comment: '開発から運用まで一貫してサポートいただき、大変助かりました。', sentiment: 'positive' },
            { id: 2, author: '合同会社XYZ', rating: 4, date: '2024年11月28日', comment: 'システムの品質は高いです。納期がもう少し早いと助かります。', sentiment: 'neutral' }
          ],
          posts: ['新サービス開始', 'セミナー開催', '採用情報更新'],
          categories: ['プレスリリース', '技術ブログ', '採用情報', '事例紹介'],
          features: ['システム開発', 'コンサルティング', 'クラウド', 'AI/ML', 'セキュリティ']
        };
      case 'realestate':
        return {
          storeName: '不動産プラザ',
          storeType: '不動産会社',
          reviews: [
            { id: 1, author: '木村 太郎', rating: 5, date: '2024年12月1日', comment: '物件の提案が的確で、理想の住まいが見つかりました。', sentiment: 'positive' },
            { id: 2, author: '渡辺 美穂', rating: 4, date: '2024年11月28日', comment: '丁寧な対応でした。もう少し物件数が多いと良いかと思います。', sentiment: 'neutral' }
          ],
          posts: ['新築物件情報', 'オープンハウス開催', '賃貸特集'],
          categories: ['新築', '中古', '賃貸', '土地', '投資物件'],
          features: ['売買仲介', '賃貸仲介', '管理', '査定', 'リフォーム']
        };
      default: // restaurant
        return {
          storeName: 'ビストロ・リュミエール',
          storeType: 'モダンフレンチビストロ',
          reviews: [
            { id: 1, author: '田中 太郎', rating: 5, date: '2024年12月1日', comment: '仔羊の煮込みパイ包み焼きが絶品でした！シェフの丁寧な仕事が光る素晴らしい料理。窓から差し込む自然光も心地よく、また訪れたいお店です。', sentiment: 'positive' },
            { id: 2, author: '鈴木 花子', rating: 5, date: '2024年11月28日', comment: '本日の鮮魚のポワレが最高でした。ビオワインのペアリングも完璧。ランチの予約必須です！', sentiment: 'positive' },
            { id: 3, author: '佐藤 健一', rating: 4, date: '2024年11月25日', comment: '日替わりランチがコスパ抜群。低温調理の豚肉が柔らかくて美味しい。平日ランチで通いたくなる味です。', sentiment: 'positive' }
          ],
          posts: ['本日のおすすめ：鮮魚のポワレ', '仔羊の煮込みパイ包み', 'ビオワインフェア開催中'],
          categories: ['ランチ', 'ディナー', 'コース', 'ビオワイン', 'デザート'],
          features: ['鮮魚料理', '仔羊料理', 'ビオワイン', 'デリプレート', 'クレームブリュレ']
        };
    }
  };

  const industryData = getIndustryData();


  // ビジネス投稿サンプルデータ
  const businessPosts = [
    {
      id: 1,
      type: 'イベント告知',
      title: '🎄 クリスマスディナーコース予約開始',
      content: '特別な夜を彩る豪華ディナーコースをご用意しました。12月24日・25日限定。',
      scheduled: '2024年12月10日 18:00'
    },
    {
      id: 2,
      type: '新メニュー',
      title: '🍝 冬の新作パスタ登場',
      content: '北海道産ホタテとトリュフの贅沢パスタが新登場。期間限定でお楽しみください。',
      scheduled: '2024年12月5日 12:00'
    }
  ];

  // Instagram投稿サンプル
  const instagramPosts = [
    {
      id: 1,
      caption: '本日のおすすめは、新鮮な魚介を使用したアクアパッツァです🐟✨ #イタリアン #ディナー #おすすめ',
      likes: 342,
      scheduled: '2024年12月3日 19:00'
    },
    {
      id: 2,
      caption: 'ランチタイム限定！パスタセットが1,200円でお楽しみいただけます🍝 #ランチ #パスタ #お得',
      likes: 256,
      scheduled: '2024年12月2日 11:30'
    }
  ];

  // ブログ記事サンプル
  const blogPosts = [
    {
      id: 1,
      title: '【2024年版】飲食店のMEO対策完全ガイド',
      category: 'SEO対策',
      status: '公開済み',
      views: 1234,
      date: '2024年12月1日'
    },
    {
      id: 2,
      title: 'Instagram運用で集客を3倍にする方法',
      category: 'SNS運用',
      status: '予約投稿',
      views: 0,
      date: '2024年12月5日'
    }
  ];

  const currentReview = industryData.reviews[activeDemo];

  // カレンダーイベントデータ（状態管理）
  const [calendarEvents, setCalendarEvents] = useState([
    { id: 1, date: new Date(2024, 11, 10), time: '10:00', title: 'ブログ投稿: 冬の新メニュー紹介', type: 'blog', isAI: true },
    { id: 2, date: new Date(2024, 11, 10), time: '14:00', title: 'Instagram: ランチタイム投稿', type: 'instagram', isAI: true },
    { id: 3, date: new Date(2024, 11, 11), time: '09:00', title: 'MEO: 営業時間更新', type: 'meo', isAI: false },
    { id: 4, date: new Date(2024, 11, 12), time: '18:00', title: 'イベント: クリスマスディナー告知', type: 'event', isAI: true },
    { id: 5, date: new Date(2024, 11, 15), time: '12:00', title: 'Instagram: 週末特別メニュー', type: 'instagram', isAI: true },
  ]);

  // カレンダーヘルパー関数
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // 前月の日付を埋める
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    // 当月の日付
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    // 次月の日付を埋める（6週分表示）
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    return days;
  };

  const getEventsForDate = (date: Date) => {
    return calendarEvents.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventColor = (type: string) => {
    switch(type) {
      case 'blog': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'instagram': return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'meo': return 'bg-green-50 text-green-700 border-green-200';
      case 'event': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  // Instagram自動作成：曜日選択後にイベント追加
  const handleInstagramAutoCreate = () => {
    setShowDaySelector(true);
  };

  const handleDayToggle = (dayIndex: number) => {
    setSelectedDays(prev =>
      prev.includes(dayIndex)
        ? prev.filter(d => d !== dayIndex)
        : [...prev, dayIndex]
    );
  };

  const createInstagramSchedule = () => {
    if (selectedDays.length === 0) return;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const newEvents: Array<{ id: number; date: Date; time: string; title: string; type: string; isAI: boolean }> = [];

    // 選択された曜日に該当する日付を全て取得
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      if (selectedDays.includes(date.getDay())) {
        const eventId = calendarEvents.length + newEvents.length + 1;
        newEvents.push({
          id: eventId,
          date: date,
          time: '12:00',
          title: 'Instagram: AI自動投稿',
          type: 'instagram',
          isAI: true
        });
      }
    }

    setCalendarEvents(prev => [...prev, ...newEvents]);
    setShowDaySelector(false);
    setSelectedDays([]);
  };

  // Google Maps自動作成
  const handleMeoAutoCreate = () => {
    setAiScheduleType('meo');
    setShowAIScheduleDialog(true);
  };

  // Blog自動作成
  const handleBlogAutoCreate = () => {
    setAiScheduleType('blog');
    setShowAIScheduleDialog(true);
  };

  const confirmAISchedule = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const newEvents: Array<{ id: number; date: Date; time: string; title: string; type: string; isAI: boolean }> = [];

    // 毎週自動投稿（デフォルトで月・水・金）
    const defaultDays = [1, 3, 5]; // 月・水・金

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      if (defaultDays.includes(date.getDay())) {
        const eventId = calendarEvents.length + newEvents.length + 1;
        let title = '';
        let type = '';

        if (aiScheduleType === 'meo') {
          title = 'Google Maps: AI最新情報投稿';
          type = 'meo';
        } else if (aiScheduleType === 'blog') {
          title = 'Blog: AI記事自動投稿';
          type = 'blog';
        }

        newEvents.push({
          id: eventId,
          date: date,
          time: '10:00',
          title: title,
          type: type,
          isAI: true
        });
      }
    }

    setCalendarEvents(prev => [...prev, ...newEvents]);
    setShowAIScheduleDialog(false);
    setAiScheduleType('');
  };

  // ビジネス投稿生成
  const generateBusinessPost = () => {
    setIsGeneratingPost(true);
    setGeneratedPost('');

    setTimeout(() => {
      let samplePost = '';
      switch(selectedIndustry) {
        case 'beauty':
          samplePost = '【冬の乾燥対策キャンペーン】保湿トリートメント30%OFF✨\n\n乾燥が気になる季節、髪と頭皮に潤いを。\n高濃度ケラチントリートメントで、艶やかな美髪へ導きます。\n\n12月限定のキャンペーン実施中！\nご予約はプロフィールリンクから。\n\n#美容室 #トリートメント #冬のヘアケア';
          break;
        case 'apparel':
          samplePost = '【Winter Collection】新作コート入荷しました🧥\n\nトレンドのオーバーサイズシルエットから、定番のチェスターコートまで豊富にご用意。\n\n2点以上で10%OFFキャンペーン中！\nお気に入りの一着を見つけてください。\n\n#冬コーデ #新作 #コート';
          break;
        case 'corporate':
          samplePost = '【新サービスリリース】AI Business Assistant📊\n\n業務効率化を実現する新サービスを開始しました。\n導入初月無料トライアル実施中。\n\nオンラインセミナーも開催予定です。\n詳細はウェブサイトをご覧ください。\n\n#AI活用 #業務効率化 #DX';
          break;
        case 'realestate':
          samplePost = '【新築物件】渋谷駅徒歩5分の好立地🏢\n\n南向きバルコニー付き、最新設備完備のマンションが完成。\nペット可、駐車場あり。\n\nオープンハウス開催中！\nご予約優先でご案内いたします。\n\n#新築マンション #渋谷 #不動産';
          break;
        default:
          samplePost = '【期間限定】12月限定の特別コースをご用意しました🎄\n\n厳選された食材を使用した全7品のコースで、大切な方との特別なひとときをお過ごしください。\n\nご予約はプロフィールのリンクから、またはお電話にて承っております。\n\n#クリスマスディナー #期間限定 #特別コース';
      }
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < samplePost.length) {
          setGeneratedPost(samplePost.substring(0, index + 1));
          index++;
        } else {
          setIsGeneratingPost(false);
          clearInterval(typingInterval);
        }
      }, 30);
    }, 1500);
  };

  // ブログ記事生成
  const generateBlogPost = () => {
    setIsGeneratingBlog(true);
    setGeneratedBlog('');

    setTimeout(() => {
      const sampleBlog = '# 飲食店のInstagram集客を成功させる5つのポイント\n\n## 1. ビジュアルファーストを意識する\n飲食店のInstagramでは、料理の写真が最も重要です。自然光を活用し、料理の美味しさが伝わる写真を投稿しましょう。\n\n## 2. ストーリーズを活用する\n24時間で消えるストーリーズは、限定感を演出できます。今日のおすすめメニューや、厨房の裏側など、リアルタイムな情報を発信しましょう。\n\n## 3. ハッシュタグを戦略的に使う\n地域名＋ジャンル（例：#渋谷イタリアン）など、見つけてもらいやすいハッシュタグを選びましょう。';
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < sampleBlog.length) {
          setGeneratedBlog(sampleBlog.substring(0, index + 1));
          index++;
        } else {
          setIsGeneratingBlog(false);
          clearInterval(typingInterval);
        }
      }, 15);
    }, 1500);
  };

  // Instagram画像生成
  const generateInstagramImage = () => {
    setIsGeneratingImage(true);
    setShowGeneratedImage(false);

    setTimeout(() => {
      // 飲食店の場合はgourmetフォルダーの画像をランダムに選択
      if (selectedIndustry === 'restaurant') {
        const gourmetImages = [
          '/Instagram/gourmet/ai-generated-image-1765430199691-1.png',
          '/Instagram/gourmet/ai-generated-image-1765430676292-1.png',
          '/Instagram/gourmet/ai-generated-image-1765434481178-1.png',
          '/Instagram/gourmet/ai-generated-image-1765434674517-1.png'
        ];
        const randomImage = gourmetImages[Math.floor(Math.random() * gourmetImages.length)];
        setGeneratedImagePath(randomImage);
      } else {
        setGeneratedImagePath('');
      }

      setIsGeneratingImage(false);
      setShowGeneratedImage(true);
    }, 3000);
  };

  // 静的な返信テキスト取得
  const getResponseText = () => {
    if (selectedIndustry === 'beauty') {
      return 'この度は当サロンをご利用いただき、誠にありがとうございます。お客様にご満足いただける仕上がりとサービスをご提供できましたこと、スタッフ一同大変嬉しく思います。またのご来店を心よりお待ちしております。';
    } else if (selectedIndustry === 'apparel') {
      return 'この度は当店でのお買い物をありがとうございます。お客様にぴったりのコーディネートをご提案でき、素敵なお洋服が見つかったとのこと、大変嬉しく思います。次回のご来店もお待ちしております。';
    } else if (selectedIndustry === 'corporate') {
      return 'この度は弊社のサービスをご利用いただき、誠にありがとうございます。開発から運用まで一貫したサポートがお役に立てたようで、大変光栄です。今後もより良いサービスを提供できるよう努めて参ります。';
    } else if (selectedIndustry === 'realestate') {
      return 'この度は弊社をご利用いただき、誠にありがとうございます。お客様の理想の住まい探しのお手伝いができましたこと、大変嬉しく思います。今後もお住まいに関するご相談がございましたら、お気軽にお声がけください。';
    } else {
      return 'この度は当店をご利用いただき、誠にありがとうございます。お料理とサービスにご満足いただけたようで、スタッフ一同大変嬉しく思っております。またのご来店を心よりお待ちしております。';
    }
  };

  // タブメニュー
  const tabs = [
    {
      id: 'settings',
      label: '店舗設定',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'reviews',
      label: '口コミ管理',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      id: 'business',
      label: 'ビジネス投稿',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'blog',
      label: 'ブログ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'calendar',
      label: 'カレンダー',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'preview',
      label: 'プレビュー',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      label: '分析',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Purple Glow Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Full Width Container */}
      <div className="w-full px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <span>🎯</span>
            <span>AI統合管理システム</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <span style={{ color: themeColor }}>すべての集客</span>を
            <span style={{ color: primaryColor }}> ワンストップ管理</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MEO・SNS・ブログ・口コミ対応をAIが24時間365日自動化
          </p>
        </div>

        {/* Industry Selector - Demo Control */}
        <div className="mb-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm text-gray-300 mb-4">業界を選択してデモをご覧ください</p>
            <div className="flex justify-center gap-2 md:gap-4">
              {industries.map(industry => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-3 md:px-6 md:py-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-purple-600 bg-purple-50 shadow-lg transform scale-105'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-900 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl md:text-3xl mb-1">{industry.icon}</div>
                  <div className="text-xs md:text-sm font-medium text-gray-300">
                    {industry.label}
                  </div>
                </button>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-purple-600 font-medium">
                選択中: {industries.find(i => i.id === selectedIndustry)?.label}業界
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Container - Full Width */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-[1800px] mx-auto">
          {/* Dashboard Header */}
          <div className="bg-gray-900 border border-gray-800 p-5 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-bold text-xl">{industryData.storeName}</h3>
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">{industryData.storeType}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>システム稼働中</span>
                </div>
                <div className="text-gray-400">
                  最終更新: {new Date().toLocaleTimeString('ja-JP')}
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="flex min-h-[700px]">
            {/* Sidebar */}
            <div className="w-56 bg-gray-800 border-r border-gray-700">
              <div className="py-4">
                <nav>
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-200 relative ${
                        activeTab === tab.id
                          ? 'bg-purple-50 text-purple-700 font-medium before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-purple-600'
                          : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <span className="flex-shrink-0">{tab.icon}</span>
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Stats */}
                <div className="border-t border-gray-700 mt-4 pt-4 px-6">
                  <div className="text-gray-400 text-xs font-semibold uppercase mb-3 tracking-wider">本日の実績</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">自動返信</span>
                      <span className="text-green-600 font-semibold">12件</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">投稿作成</span>
                      <span className="text-blue-600 font-semibold">8件</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ブログ更新</span>
                      <span className="text-purple-600 font-semibold">3記事</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">エンゲージ</span>
                      <span className="text-pink-600 font-semibold">+42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area - Expanded */}
            <div className="flex-1 bg-gray-900 border border-gray-800 overflow-auto">
              {/* Tab Content */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {industryData.storeName} - 店舗設定
                    </h4>

                    {/* Store Information */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                        <h5 className="font-bold text-white mb-4">基本情報</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">店舗名</label>
                            <input
                              type="text"
                              value={industryData.storeName}
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">業種</label>
                            <input
                              type="text"
                              value={industryData.storeType}
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">電話番号</label>
                            <input
                              type="text"
                              placeholder="03-1234-5678"
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">営業時間</label>
                            <input
                              type="text"
                              placeholder="10:00 - 22:00"
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                        <h5 className="font-bold text-white mb-4">住所・アクセス</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">郵便番号</label>
                            <input
                              type="text"
                              placeholder="150-0001"
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">都道府県</label>
                            <select className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
                              <option>東京都</option>
                              <option>大阪府</option>
                              <option>愛知県</option>
                              <option>福岡県</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">市区町村</label>
                            <input
                              type="text"
                              placeholder="渋谷区神宮前"
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">番地・建物名</label>
                            <input
                              type="text"
                              placeholder="1-2-3 〇〇ビル 3F"
                              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm mt-6">
                      <h5 className="font-bold text-white mb-4">サービス・特徴</h5>
                      <div className="grid grid-cols-5 gap-3">
                        {industryData.features.map((feature, index) => (
                          <label key={index} className="flex items-center text-gray-300">
                            <input
                              type="checkbox"
                              className="mr-2"
                              defaultChecked={index < 3}
                            />
                            <span className="text-sm">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* AI Settings */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                        <h5 className="font-bold text-white mb-4">AI自動返信設定</h5>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">口コミ自動返信</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">返信トーン</span>
                            <select className="p-2 border border-gray-700 rounded-lg text-sm bg-gray-800 text-white">
                              <option>丁寧</option>
                              <option>カジュアル</option>
                              <option>プロフェッショナル</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">返信速度</span>
                            <select className="p-2 border border-gray-700 rounded-lg text-sm bg-gray-800 text-white">
                              <option>即時（1分以内）</option>
                              <option>早め（5分以内）</option>
                              <option>通常（30分以内）</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                        <h5 className="font-bold text-white mb-4">コンテンツ生成設定</h5>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">ブログ自動投稿</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">投稿頻度</span>
                            <select className="p-2 border border-gray-700 rounded-lg text-sm bg-gray-800 text-white">
                              <option>毎日</option>
                              <option>週3回</option>
                              <option>週1回</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Instagram連携</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}

                    {/* AI Prompt Settings */}
                    <div className="mt-6">
                      <h5 className="font-bold text-white mb-4 text-lg">AIプロンプト設定</h5>
                      <p className="text-sm text-gray-400 mb-4">各機能で使用するAIプロンプトをカスタマイズできます</p>

                      <div className="space-y-4">
                        {/* MEO Prompt */}
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">📍</span>
                            <h6 className="font-bold text-white">MEO対策プロンプト</h6>
                          </div>
                          <textarea
                            className="w-full p-3 border border-gray-700 rounded-lg text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white"
                            rows={3}
                            placeholder={
                              selectedIndustry === 'restaurant' ?
                                '当店は[料理ジャンル]を提供する飲食店です。メニューの特徴や店舗の雰囲気を踏まえて、Googleビジネスプロフィールの投稿を作成してください。' :
                              selectedIndustry === 'beauty' ?
                                '当サロンは[施術内容]を提供する美容サロンです。サービスの特徴やお客様の悩みに寄り添った投稿を作成してください。' :
                              selectedIndustry === 'apparel' ?
                                '当店は[商品カテゴリー]を扱うアパレルショップです。最新のトレンドや商品の魅力を伝える投稿を作成してください。' :
                              selectedIndustry === 'corporate' ?
                                '弊社は[サービス内容]を提供するIT企業です。技術力や実績を活かした情報発信をしてください。' :
                                '当社は[業種]です。サービスの特徴や顧客メリットを伝える投稿を作成してください。'
                            }
                          />
                        </div>

                        {/* Instagram Prompt */}
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">📸</span>
                            <h6 className="font-bold text-white">Instagram投稿プロンプト</h6>
                          </div>
                          <textarea
                            className="w-full p-3 border border-gray-700 rounded-lg text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white"
                            rows={3}
                            placeholder={
                              selectedIndustry === 'restaurant' ?
                                'メニューをもとにInstagramの投稿を考えてください。料理の見た目や味の特徴、おすすめの食べ方などを魅力的に伝えてください。' :
                              selectedIndustry === 'beauty' ?
                                '施術内容やビフォーアフターをもとに、お客様の悩み解決につながる投稿を作成してください。' :
                              selectedIndustry === 'apparel' ?
                                '新作アイテムやコーディネート提案をもとに、トレンドを意識した投稿を作成してください。' :
                              selectedIndustry === 'corporate' ?
                                '技術ブログや事例紹介をもとに、専門性をアピールする投稿を作成してください。' :
                                'サービスや商品の魅力を視覚的に伝える投稿を作成してください。'
                            }
                          />
                        </div>

                        {/* SEO Prompt */}
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">📝</span>
                            <h6 className="font-bold text-white">SEO記事プロンプト</h6>
                          </div>
                          <textarea
                            className="w-full p-3 border border-gray-700 rounded-lg text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white"
                            rows={3}
                            placeholder={
                              selectedIndustry === 'restaurant' ?
                                '[料理ジャンル] [地域名]で検索上位を狙える記事を作成してください。お店の特徴やおすすめメニューを自然に盛り込んでください。' :
                              selectedIndustry === 'beauty' ?
                                '[施術内容] [地域名]で検索上位を狙える記事を作成してください。お客様の悩みに寄り添った内容にしてください。' :
                              selectedIndustry === 'apparel' ?
                                '[商品カテゴリー] [トレンドキーワード]で検索上位を狙える記事を作成してください。コーディネート提案を含めてください。' :
                              selectedIndustry === 'corporate' ?
                                '[技術キーワード] [課題キーワード]で検索上位を狙える記事を作成してください。専門性と実績をアピールしてください。' :
                                '[サービス] [地域名]で検索上位を狙える記事を作成してください。顧客の課題解決につながる内容にしてください。'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-right">
                      <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200">
                        設定を保存
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white">口コミ管理</h4>
                    <p className="text-sm text-gray-400 mt-1">AIが自動で口コミに返信します</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Reviews List */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                      <h5 className="font-semibold text-white mb-4">未返信の口コミ</h5>
                      <div className="space-y-3">
                        {industryData.reviews.map((review, index) => (
                          <div
                            key={review.id}
                            onClick={() => {
                              setActiveDemo(index);
                              setShowResponse(false);
                              setTypedText('');
                            }}
                            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                              activeDemo === index
                                ? 'border-purple-500 bg-purple-900/30'
                                : 'border-gray-700 hover:border-gray-600 bg-gray-800'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-semibold text-sm text-white">{review.author}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-xs ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                review.sentiment === 'positive' ? 'bg-green-900/50 text-green-400' :
                                review.sentiment === 'negative' ? 'bg-red-900/50 text-red-400' :
                                'bg-yellow-900/50 text-yellow-400'
                              }`}>
                                {review.sentiment === 'positive' ? '😊' : review.sentiment === 'negative' ? '😔' : '😐'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400 line-clamp-2">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                      <h5 className="font-semibold text-white mb-4">AI自動返信</h5>
                      {currentReview && (
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 mb-4">
                          <p className="text-xs text-gray-400 mb-1">選択された口コミ:</p>
                          <p className="text-sm text-white">{currentReview.comment}</p>
                        </div>
                      )}

                      {!showResponse ? (
                        <button
                          onClick={() => {
                            setShowResponse(true);
                            setIsTyping(true);
                            setTypedText('');

                            // ダミーのローディング（1.5秒後に返信表示）
                            setTimeout(() => {
                              setIsTyping(false);
                              setTypedText(getResponseText());
                            }, 1500);
                          }}
                          className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:opacity-90 transition-all duration-200"
                        >
                          🤖 AI返信を生成
                        </button>
                      ) : (
                        <div className="space-y-3">
                          {isTyping && typedText.length === 0 && (
                            <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700 rounded-lg">
                              <div className="flex gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                              </div>
                              <span className="ml-3 text-sm text-purple-400">AI分析中...</span>
                            </div>
                          )}

                          {typedText.length > 0 && (
                            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700 rounded-lg p-4">
                              <p className="text-sm text-white leading-relaxed">
                                {typedText}
                                {isTyping && <span className="animate-pulse">|</span>}
                              </p>
                            </div>
                          )}

                          {!isTyping && typedText.length > 0 && (
                            <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200">
                              ✓ 返信を投稿
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'business' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-white">Googleビジネス投稿</h4>
                    <button
                      onClick={generateBusinessPost}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                      ✨ AI投稿作成
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* 投稿作成 */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">新規投稿作成</h5>

                      {isGeneratingPost ? (
                        <div className="h-64 flex items-center justify-center">
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                            <p className="text-sm text-gray-400">AIが投稿内容を作成中...</p>
                          </div>
                        </div>
                      ) : generatedPost ? (
                        <div className="space-y-4">
                          <textarea
                            className="w-full h-40 p-3 border border-gray-700 rounded-lg resize-none bg-gray-800 text-white"
                            value={generatedPost}
                            readOnly
                          />
                          <div className="flex gap-3">
                            <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                              投稿する
                            </button>
                            <button
                              onClick={() => setGeneratedPost('')}
                              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200"
                            >
                              クリア
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <select className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
                            <option>投稿タイプを選択</option>
                            <option>イベント告知</option>
                            <option>新メニュー</option>
                            <option>営業時間変更</option>
                            <option>キャンペーン</option>
                          </select>
                          <input
                            type="text"
                            placeholder="キーワード（例：クリスマス、ランチ）"
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                          />
                          <button
                            onClick={generateBusinessPost}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all duration-200"
                          >
                            AI生成開始
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 予約投稿 */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">予約投稿</h5>
                      <div className="space-y-3">
                        {businessPosts.map(post => (
                          <div key={post.id} className="p-3 border border-gray-700 rounded-lg bg-gray-800">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs px-2 py-1 bg-blue-900/50 text-blue-400 rounded-full">
                                {post.type}
                              </span>
                              <span className="text-xs text-gray-400">{post.scheduled}</span>
                            </div>
                            <h6 className="font-semibold text-sm mb-1 text-white">{post.title}</h6>
                            <p className="text-xs text-gray-400">{post.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'instagram' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-white">Instagram自動投稿</h4>
                    <button
                      onClick={generateInstagramImage}
                      className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200"
                    >
                      🎨 AI画像生成
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* 画像生成 */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">AI画像生成</h5>

                      {isGeneratingImage ? (
                        <div className="aspect-square bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg flex items-center justify-center border border-gray-700">
                          <div className="text-center">
                            <div className="mb-4">
                              <div className="inline-block">
                                <div className="flex gap-3">
                                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">AI画像生成中...</p>
                            <p className="text-xs text-gray-400 mt-2">プロンプト解析・スタイル適用</p>
                          </div>
                        </div>
                      ) : showGeneratedImage ? (
                        <div className="space-y-4">
                          <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center overflow-hidden">
                            {selectedIndustry === 'restaurant' && generatedImagePath ? (
                              <img
                                src={generatedImagePath}
                                alt="AI生成画像"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-center">
                                <span className="text-6xl">🍝</span>
                                <p className="mt-2 text-sm text-gray-600">AI生成画像</p>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-3">
                            <button className="flex-1 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200">
                              投稿する
                            </button>
                            <button
                              onClick={generateInstagramImage}
                              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200"
                            >
                              再生成
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <select className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
                            <option>画像スタイルを選択</option>
                            <option>料理写真（接写）</option>
                            <option>店内風景</option>
                            <option>イベント告知</option>
                            <option>メニュー紹介</option>
                          </select>
                          <textarea
                            placeholder="画像の詳細説明..."
                            className="w-full h-24 p-3 border border-gray-700 rounded-lg resize-none bg-gray-800 text-white placeholder-gray-400"
                          />
                          <button
                            onClick={generateInstagramImage}
                            className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"
                          >
                            画像生成開始
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 投稿スケジュール */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">投稿スケジュール</h5>
                      <div className="space-y-3">
                        {instagramPosts.map(post => (
                          <div key={post.id} className="p-3 border border-gray-700 rounded-lg bg-gray-800">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-lg"></div>
                              <div className="flex-1">
                                <p className="text-sm text-white line-clamp-2">{post.caption}</p>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-xs text-gray-400">❤️ {post.likes}</span>
                                  <span className="text-xs text-gray-400">{post.scheduled}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'blog' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-white">ブログ記事管理</h4>
                    <button
                      onClick={generateBlogPost}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200"
                    >
                      📝 AI記事作成
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* 記事作成 */}
                    <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">新規記事作成</h5>

                      {isGeneratingBlog ? (
                        <div className="h-96 flex items-center justify-center">
                          <div className="text-center">
                            <div className="mb-4">
                              <div className="w-20 h-20 mx-auto relative">
                                <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">AIが記事を執筆中...</p>
                            <p className="text-xs text-gray-400 mt-2">SEO最適化・構成作成</p>
                          </div>
                        </div>
                      ) : generatedBlog ? (
                        <div className="space-y-4">
                          <div className="bg-gray-800 rounded-lg p-4 h-80 overflow-auto border border-gray-700">
                            <pre className="whitespace-pre-wrap text-sm text-white font-sans">
                              {generatedBlog}
                            </pre>
                          </div>
                          <div className="flex gap-3">
                            <button className="flex-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
                              記事を公開
                            </button>
                            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200">
                              下書き保存
                            </button>
                            <button
                              onClick={() => setGeneratedBlog('')}
                              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200"
                            >
                              クリア
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="記事タイトル"
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                          />
                          <select className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
                            <option>カテゴリーを選択</option>
                            <option>SEO対策</option>
                            <option>SNS運用</option>
                            <option>MEO対策</option>
                            <option>集客ノウハウ</option>
                          </select>
                          <textarea
                            placeholder="記事の概要・キーワード"
                            className="w-full h-32 p-3 border border-gray-700 rounded-lg resize-none bg-gray-800 text-white placeholder-gray-400"
                          />
                          <button
                            onClick={generateBlogPost}
                            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:opacity-90 transition-all duration-200"
                          >
                            AI執筆開始
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 記事一覧 */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-white mb-4">公開記事</h5>
                      <div className="space-y-3">
                        {blogPosts.map(post => (
                          <div key={post.id} className="p-3 border border-gray-700 rounded-lg bg-gray-800">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-400 rounded-full">
                                {post.category}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                post.status === '公開済み'
                                  ? 'bg-green-900/50 text-green-400'
                                  : 'bg-yellow-900/50 text-yellow-400'
                              }`}>
                                {post.status}
                              </span>
                            </div>
                            <h6 className="font-semibold text-sm mb-1 text-white">{post.title}</h6>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-gray-400">👁 {post.views}</span>
                              <span className="text-xs text-gray-400">{post.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preview' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-white">ホームページプレビュー</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewDevice('desktop')}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                          previewDevice === 'desktop'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-900 border border-gray-800 text-gray-300'
                        }`}
                      >
                        💻 デスクトップ
                      </button>
                      <button
                        onClick={() => setPreviewDevice('tablet')}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                          previewDevice === 'tablet'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-900 border border-gray-800 text-gray-300'
                        }`}
                      >
                        📱 タブレット
                      </button>
                      <button
                        onClick={() => setPreviewDevice('mobile')}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                          previewDevice === 'mobile'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-900 border border-gray-800 text-gray-300'
                        }`}
                      >
                        📱 モバイル
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gray-700 p-3 border-b border-gray-600 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-sm text-gray-400">
                        https://your-restaurant.com
                      </div>
                    </div>

                    <div className={`mx-auto transition-all duration-500 ${
                      previewDevice === 'desktop' ? 'max-w-full' :
                      previewDevice === 'tablet' ? 'max-w-3xl' :
                      'max-w-md'
                    }`}>
                      <div className="p-8 bg-gradient-to-b from-purple-50 to-white min-h-[500px]">
                        {/* ヘッダー */}
                        <nav className="flex items-center justify-between mb-8">
                          <div className="text-2xl font-bold text-purple-600">🍝 レストラン花鳥風月</div>
                          <div className="flex gap-6">
                            <a href="#" className="text-gray-700 hover:text-purple-600">ホーム</a>
                            <a href="#" className="text-gray-700 hover:text-purple-600">メニュー</a>
                            <a href="#" className="text-gray-700 hover:text-purple-600">予約</a>
                            <a href="#" className="text-gray-700 hover:text-purple-600">アクセス</a>
                          </div>
                        </nav>

                        {/* ヒーローセクション */}
                        <div className="text-center py-12 mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            本格イタリアンを<br />カジュアルに楽しむ
                          </h1>
                          <p className="text-lg text-gray-600 mb-8">
                            厳選された食材と熟練シェフが織りなす極上の一皿
                          </p>
                          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-200">
                            予約する
                          </button>
                        </div>

                        {/* コンテンツグリッド */}
                        <div className="grid grid-cols-3 gap-6">
                          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                            <div className="aspect-video bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded mb-3"></div>
                            <h3 className="font-bold mb-2 text-white">本日のおすすめ</h3>
                            <p className="text-sm text-gray-400">新鮮な魚介のアクアパッツァ</p>
                          </div>
                          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                            <div className="aspect-video bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded mb-3"></div>
                            <h3 className="font-bold mb-2 text-white">ランチコース</h3>
                            <p className="text-sm text-gray-400">平日限定 1,200円〜</p>
                          </div>
                          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded mb-3"></div>
                            <h3 className="font-bold mb-2 text-white">ディナーコース</h3>
                            <p className="text-sm text-gray-400">特別な夜を演出</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white mb-6">分析ダッシュボード</h4>

                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">Map表示</span>
                        <span className="text-green-500 text-xs">↑ 34%</span>
                      </div>
                      <p className="text-2xl font-bold text-white">8,542</p>
                      <p className="text-xs text-gray-400">今月</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">来店数</span>
                        <span className="text-green-500 text-xs">↑ 28%</span>
                      </div>
                      <p className="text-2xl font-bold text-white">324</p>
                      <p className="text-xs text-gray-400">今月</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">口コミ返信率</span>
                        <span className="text-blue-500 text-xs">100%</span>
                      </div>
                      <p className="text-2xl font-bold text-white">45/45</p>
                      <p className="text-xs text-gray-400">今月</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">Instagram</span>
                        <span className="text-green-500 text-xs">↑ 52%</span>
                      </div>
                      <p className="text-2xl font-bold text-white">2.3K</p>
                      <p className="text-xs text-gray-400">フォロワー</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">ブログPV</span>
                        <span className="text-green-500 text-xs">↑ 67%</span>
                      </div>
                      <p className="text-2xl font-bold text-white">12.4K</p>
                      <p className="text-xs text-gray-400">今月</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                      <h5 className="font-bold text-white mb-4">エンゲージメント推移</h5>
                      <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex justify-center gap-2 mb-4">
                            {[40, 60, 45, 70, 85, 65, 90].map((height, i) => (
                              <div key={i} className="w-8 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{ height: `${height}%` }}></div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-400">過去7日間のエンゲージメント</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
                      <h5 className="font-bold text-white mb-4">コンテンツパフォーマンス</h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">ブログ記事</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-white">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Instagram</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div className="bg-pink-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-white">72%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">MEO</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '93%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-white">93%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">口コミ対応</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-white">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'calendar' && (
                <div className="p-8">
                  {/* Calendar Header */}
                  {/* 曜日選択モーダル */}
                  {showDaySelector && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">
                          Instagram投稿の曜日を選択
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          投稿する曜日を選択してください（複数選択可）
                        </p>

                        <div className="grid grid-cols-7 gap-2 mb-6">
                          {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                            <button
                              key={index}
                              onClick={() => handleDayToggle(index)}
                              className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                selectedDays.includes(index)
                                  ? 'bg-pink-500 text-white shadow-md'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setShowDaySelector(false);
                              setSelectedDays([]);
                            }}
                            className="flex-1 px-4 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200"
                          >
                            キャンセル
                          </button>
                          <button
                            onClick={createInstagramSchedule}
                            disabled={selectedDays.length === 0}
                            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                              selectedDays.length === 0
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-pink-500 text-white hover:bg-pink-600 shadow-md'
                            }`}
                          >
                            スケジュール作成
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI自動投稿確認ダイアログ（MEO/Blog） */}
                  {showAIScheduleDialog && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {aiScheduleType === 'meo' ? 'Google Maps自動投稿設定' : 'Blog自動投稿設定'}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          {aiScheduleType === 'meo'
                            ? '毎週月・水・金曜日にGoogle Mapsへ最新情報を自動投稿します。'
                            : '毎週月・水・金曜日にブログ記事を自動投稿します。'}
                        </p>

                        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-gray-700 rounded-lg p-4 mb-6">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white mb-1">AIが自動で最適化</p>
                              <p className="text-xs text-gray-400">
                                業界トレンドやユーザー行動を分析し、最適なコンテンツを自動生成します
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setShowAIScheduleDialog(false);
                              setAiScheduleType('');
                            }}
                            className="flex-1 px-4 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200"
                          >
                            キャンセル
                          </button>
                          <button
                            onClick={confirmAISchedule}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 font-medium transition-all duration-200 shadow-md"
                          >
                            設定する
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <h4 className="text-2xl font-bold text-white">投稿カレンダー</h4>
                      <span className="px-3 py-1 bg-purple-900/50 text-purple-400 rounded-full text-sm font-medium">
                        {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* AI Schedule Buttons */}
                      <button
                        onClick={handleInstagramAutoCreate}
                        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 font-medium shadow-sm"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                        </svg>
                        AI Instagram自動作成
                      </button>
                      <button
                        onClick={handleMeoAutoCreate}
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-sm"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        AI Google Maps自動作成
                      </button>
                      <button
                        onClick={handleBlogAutoCreate}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-sm"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        AI Blog自動作成
                      </button>
                      {/* Month Navigation */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                          className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setSelectedDate(new Date())}
                          className="px-3 py-1.5 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          今日
                        </button>
                        <button
                          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                          className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
                    {/* Day Headers */}
                    <div className="grid grid-cols-7 border-b border-gray-700">
                      {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                        <div
                          key={day}
                          className={`py-3 text-center text-sm font-semibold ${
                            index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-300'
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7">
                      {getDaysInMonth(selectedDate).map((dayInfo, index) => {
                        const events = getEventsForDate(dayInfo.date);
                        const isToday = dayInfo.date.toDateString() === new Date().toDateString();
                        const dayOfWeek = dayInfo.date.getDay();

                        return (
                          <div
                            key={index}
                            className={`min-h-[120px] p-2 border-b border-r border-gray-700 ${
                              !dayInfo.isCurrentMonth ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800'
                            } ${index % 7 === 6 ? 'border-r-0' : ''} ${
                              index >= 35 ? 'border-b-0' : ''
                            } transition-all duration-200 group`}
                          >
                            <div className="flex items-start justify-between mb-1">
                              <span className={`text-sm font-medium ${
                                !dayInfo.isCurrentMonth ? 'text-gray-600' :
                                dayOfWeek === 0 ? 'text-red-400' :
                                dayOfWeek === 6 ? 'text-blue-400' :
                                'text-gray-300'
                              } ${isToday ? 'bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center' : ''}`}>
                                {dayInfo.date.getDate()}
                              </span>
                              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-all duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                            </div>

                            {/* Events */}
                            <div className="space-y-1">
                              {events.slice(0, 3).map((event) => (
                                <div
                                  key={event.id}
                                  className={`text-xs px-2 py-1 rounded border ${getEventColor(event.type)} ${
                                    event.isAI ? 'border-dashed border-2' : ''
                                  } relative group/event`}
                                >
                                  <div className="flex items-center gap-1">
                                    {event.isAI && (
                                      <svg className="w-3 h-3 text-yellow-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                      </svg>
                                    )}
                                    <span className="truncate">{event.time}</span>
                                  </div>
                                  <p className="truncate font-medium">{event.title}</p>
                                </div>
                              ))}
                              {events.length > 3 && (
                                <div className="text-xs text-gray-500 text-center">
                                  +{events.length - 3} more
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Event Type Legend */}
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded"></div>
                      <span className="text-sm text-gray-600">ブログ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-pink-50 border border-pink-200 rounded"></div>
                      <span className="text-sm text-gray-600">Instagram</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-50 border border-green-200 rounded"></div>
                      <span className="text-sm text-gray-600">MEO (Google Maps)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-50 border border-orange-200 rounded"></div>
                      <span className="text-sm text-gray-600">イベント</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-dashed border-gray-400 rounded"></div>
                      <span className="text-sm text-gray-600">AI生成予定</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-5 gap-6 mt-12 max-w-[1800px] mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-lg font-bold text-white mb-2">リアルタイム対応</h4>
            <p className="text-sm text-gray-400">
              24時間365日、AIが即座に対応
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">📝</div>
            <h4 className="text-lg font-bold text-white mb-2">SEO記事自動生成</h4>
            <p className="text-sm text-gray-400">
              検索上位を狙う記事を自動作成
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2">最適化AI</h4>
            <p className="text-sm text-gray-400">
              投稿時間・内容を自動最適化
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-lg font-bold text-white mb-2">詳細分析</h4>
            <p className="text-sm text-gray-400">
              効果測定と改善提案を自動生成
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🔄</div>
            <h4 className="text-lg font-bold text-white mb-2">完全自動化</h4>
            <p className="text-sm text-gray-400">
              設定後は全て自動で運用
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://lin.ee/llRUGcG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            統合管理システムを始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MEODetailSection;