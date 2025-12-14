import { supabase } from './supabase';

export interface Website {
  id: string; // uuid型に変更
  title: string;
  category: string;
  description: string;
  domain: string | null;
  image?: string;
  tags: string[];
  created_at?: string;
  updated_at?: string;
  form_id?: string | null;
  industry?: string | null;
  likes_count?: number;
}

export async function getActiveWebsites(): Promise<Website[]> {
  try {
    console.log('Fetching websites from Supabase...');
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + '...');

    // websitesとform_submissions、likes_websitesをJOINして取得
    const { data, error } = await supabase
      .from('websites')
      .select(`
        *,
        form_submissions!form_id (
          industry,
          company_name,
          service_name
        ),
        likes_websites (
          likes_count
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching websites:', error);
      return [];
    }

    // domainが存在し、空文字列でないものをフィルタリング
    const filteredData = (data || []).filter((item: { domain?: string | null }) =>
      item.domain && item.domain !== ''
    );

    console.log('Fetched websites from database:', filteredData.length, 'records (filtered from', data?.length || 0, 'total)');

    // データの整形 - form_submissionsのindustryを優先的に使用
    const mappedData = filteredData.map((item: Record<string, unknown>) => {
      // form_submissionsからのindustryを取得
      const formSubmission = item.form_submissions as { industry?: string } | undefined;
      const industry = formSubmission?.industry;

      // industryからカテゴリーを決定
      const category = mapIndustryToCategory(industry) || determineCategory(item.name as string, item.description as string);

      // タグの生成
      const settings = (item.settings as { tags?: string[] } | undefined) || {};
      const tags = settings.tags || determineTags(item.name as string, item.description as string, industry);

      // likes_websitesからいいね数を集計
      const likesData = (item.likes_websites as { likes_count?: number }[] | undefined) || [];
      const totalLikes = likesData.reduce((sum: number, like: { likes_count?: number }) => {
        return sum + (like.likes_count || 0);
      }, 0);

      return {
        id: item.id as string,
        title: (item.name as string) || 'Untitled',
        category: category,
        description: (item.description as string) || '',
        domain: item.domain as string | null,
        image: (item.page_image as string) || '',
        tags: Array.isArray(tags) ? tags : [],
        created_at: item.created_at as string,
        updated_at: item.updated_at as string,
        form_id: item.form_id as string | null,
        industry: industry,
        likes_count: totalLikes,
      };
    });

    // いいね数で降順ソート（多い順）、同数の場合は作成日時で降順ソート
    mappedData.sort((a, b) => {
      if (b.likes_count !== a.likes_count) {
        return b.likes_count - a.likes_count;
      }
      // いいね数が同じ場合は作成日時で比較
      return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
    });

    console.log('Top 5 websites by likes:', mappedData.slice(0, 5).map(w => `${w.title}: ${w.likes_count} likes`));

    return mappedData;
  } catch (error) {
    console.error('Unexpected error fetching websites:', error);
    return [];
  }
}

// industryをカテゴリーにマッピングする関数
function mapIndustryToCategory(industry: string | null | undefined): string | null {
  if (!industry) return null;

  const mapping: { [key: string]: string } = {
    'エンタメ': 'エンタメ',
    '採用・コーポレート': 'コーポレートサイト',
    'レジャー': 'レジャー',
    '不動産・住宅': '不動産・住宅',
    'エステ・美容': '美容・エステ',
    '医療・クリニック': '医療・クリニック',
    '宿泊・トラベル': '宿泊・旅行',
    '飲食・カフェ': 'グルメ・飲食店',
    '士業・コンサル': 'ビジネスサービス',
    '製造・工場': '製造業',
    'その他': 'その他'
  };

  return mapping[industry] || 'その他';
}

// 名前や説明からカテゴリーを推定する関数
function determineCategory(name: string, description: string): string {
  const text = `${name} ${description}`.toLowerCase();

  // 特定のサイト名による分類
  if (text.includes('fireworkz')) {
    return 'コーポレートサイト';
  }

  if (text.includes('飲食') || text.includes('レストラン') || text.includes('bar') || text.includes('カフェ') || text.includes('食')) {
    return 'グルメ・飲食店';
  }
  if (text.includes('corporation') || text.includes('株式会社') || text.includes('コーポレート')) {
    return 'コーポレートサイト';
  }
  if (text.includes('美容') || text.includes('salon') || text.includes('hair')) {
    return '美容室';
  }
  if (text.includes('sport') || text.includes('park') || text.includes('レジャー')) {
    return 'レジャー';
  }
  if (text.includes('tech') || text.includes('it') || text.includes('システム')) {
    return 'IT・テクノロジー';
  }

  return 'サービス';
}

// 名前や説明、業種からタグを生成する関数
function determineTags(name: string, description: string, industry?: string | null): string[] {
  const tags: string[] = [];
  const text = `${name} ${description}`.toLowerCase();

  // 業種に基づくタグ
  if (industry) {
    const industryTags: { [key: string]: string[] } = {
      'エンタメ': ['エンターテインメント', 'メディア'],
      '採用・コーポレート': ['採用', 'コーポレート', '企業'],
      'レジャー': ['レジャー', 'アクティビティ'],
      '不動産・住宅': ['不動産', '住宅', '建築'],
      'エステ・美容': ['美容', 'エステ', 'ビューティー'],
      '医療・クリニック': ['医療', 'ヘルスケア', 'クリニック'],
      '宿泊・トラベル': ['宿泊', '旅行', 'ホテル'],
      '飲食・カフェ': ['飲食', 'レストラン', 'グルメ'],
      '士業・コンサル': ['コンサルティング', 'ビジネス'],
      '製造・工場': ['製造業', 'ものづくり']
    };

    const relatedTags = industryTags[industry];
    if (relatedTags) {
      tags.push(...relatedTags.slice(0, 2));
    }
  }

  // 技術関連のタグ
  if (text.includes('next')) tags.push('Next.js');
  if (text.includes('react')) tags.push('React');
  if (text.includes('wordpress')) tags.push('WordPress');
  if (text.includes('typescript')) tags.push('TypeScript');

  // デザイン関連のタグ
  if (text.includes('レスポンシブ')) tags.push('レスポンシブ');
  if (text.includes('モダン')) tags.push('モダンデザイン');
  if (text.includes('ブランド')) tags.push('ブランディング');

  // タグの重複を削除
  const uniqueTags = Array.from(new Set(tags));

  // デフォルトタグ
  if (uniqueTags.length === 0) {
    uniqueTags.push('ウェブサイト', 'デザイン');
  }

  return uniqueTags.slice(0, 3); // 最大3つまで
}

// カテゴリ一覧を取得する関数
export async function getCategories(): Promise<string[]> {
  // industryから生成されるカテゴリリストを返す
  const categories = [
    '全て',
    'エンタメ',
    'レジャー',
    '美容・エステ',
    '医療・クリニック',
    '宿泊・旅行',
    'グルメ・飲食店',
    'ビジネスサービス',
    '製造業',
    'その他'
  ];

  return categories;
}