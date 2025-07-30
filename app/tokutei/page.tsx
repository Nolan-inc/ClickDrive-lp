import Link from 'next/link'

export default function TokuteiPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">特定商取引法に基づく表記</h1>
        
        <div className="space-y-8">
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">事業者名</h2>
            <p className="text-gray-700">株式会社ClickDrive</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">代表者名</h2>
            <p className="text-gray-700">代表取締役 [代表者名]</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">所在地</h2>
            <p className="text-gray-700">〒[郵便番号]<br />
            [都道府県][市区町村][番地]</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">電話番号</h2>
            <p className="text-gray-700">[電話番号]</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">メールアドレス</h2>
            <p className="text-gray-700">[メールアドレス]</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">販売価格</h2>
            <p className="text-gray-700">各サービスページに記載</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">商品代金以外の必要料金</h2>
            <p className="text-gray-700">消費税</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">支払方法</h2>
            <p className="text-gray-700">クレジットカード決済（Stripe）<br />
            銀行振込</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">支払時期</h2>
            <p className="text-gray-700">クレジットカード決済：お申込み時<br />
            銀行振込：ご請求後7日以内</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">商品の引渡し時期</h2>
            <p className="text-gray-700">ご契約後、打ち合わせにて決定した納期に従い納品いたします。</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">返品・キャンセルについて</h2>
            <p className="text-gray-700">サービスの性質上、お客様都合による返品・キャンセルはお受けできません。<br />
            ただし、当社の責に帰すべき事由により、サービスの提供が不可能となった場合は、お支払いいただいた料金を返金いたします。</p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">動作環境</h2>
            <p className="text-gray-700">制作するウェブサイトの動作環境については、別途ご相談の上決定いたします。</p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}