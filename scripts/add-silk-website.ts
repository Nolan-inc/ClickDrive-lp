import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function addSilkWebsite() {
  try {
    const { data, error } = await supabase
      .from('websites')
      .insert([
        {
          name: 'Silk',
          description: 'エレガントで洗練されたデザインのコーポレートサイト',
          domain: 'https://silk.unelimit.com/',
          page_image: '/zisseki/silk.png',
          settings: {
            tags: ['コーポレート', 'モダンデザイン', 'レスポンシブ']
          }
        }
      ])
      .select();

    if (error) {
      console.error('Error adding website:', error);
      return;
    }

    console.log('Successfully added Silk website:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addSilkWebsite();
