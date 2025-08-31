import { supabase } from './supabase'
import type { Database } from '@/types/database'

type Article = Database['public']['Tables']['articles']['Row']
type Category = Database['public']['Tables']['categories']['Row']

export interface ArticleWithCategory extends Article {
  category?: Category | null
}

// 記事取得関数
export async function getArticles(): Promise<ArticleWithCategory[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('published_at', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching articles:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

// スラグで記事を取得
export async function getArticleBySlug(slug: string): Promise<ArticleWithCategory | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('slug', slug)
      .eq('published_at', true)
      .single()

    if (error) {
      console.error('Error fetching article by slug:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching article by slug:', error)
    return null
  }
}

// カテゴリ取得関数
export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (error) {
      console.error('Error fetching categories:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}