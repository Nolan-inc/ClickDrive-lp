import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Nolan 利用規約
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="mb-6 text-gray-700 leading-relaxed">
                この利用規約（以下「本規約」といいます。）は、株式会社Nolan（以下「当社」といいます。）が提供するホームページ制作、LP制作等のウェブサービス（以下「本サービス」といいます。）の利用条件を定めるものです。お客様（以下「ユーザー」といいます。）は、本規約および当社のプライバシーポリシーに同意の上、本サービスをご利用ください。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（定義）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>「ユーザー」とは、本規約に同意の上、当社と契約を締結し、本サービスを利用する個人・法人を指します。</li>
                  <li>「コンテンツ」とは、本サービスを通じて制作されるすべてのデータ（デザイン、文章、画像、動画、プログラム等）を指します。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（規約の変更）</h2>
                <p className="text-gray-700">
                  当社は、必要に応じてユーザーの承諾なく本規約を変更できるものとします。変更後の内容は当社ウェブサイト上での掲示をもって効力を生じるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（サービス内容）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>当社は、ユーザーに対し、ホームページ制作、LP制作およびこれに付随するサービス（保守、修正、オプション機能追加など）を提供します。</li>
                  <li>サービスの詳細・仕様は、個別の契約書または見積書に定めるものとします。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（利用料金・支払い）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>ユーザーは、本サービスの利用にあたり、当社が提示する見積書記載の制作料金および追加オプション料金を支払うものとします。</li>
                  <li>支払い方法・期限は当社が別途指定する方法に従うものとします。</li>
                  <li>ユーザーの都合による途中解約の場合でも、既に発生した制作作業分の料金は返金されません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（著作権・知的財産権）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>本サービスにおいて制作されたコンテンツの著作権は、納品完了後、当社が別途定める場合を除き、ユーザーに譲渡されます。ただし、当社が独自に保有するテンプレート・プログラム等の権利は当社に帰属します。</li>
                  <li>ユーザーは、当社の事前の承諾なく当社の著作物を第三者に譲渡、複製、改変、公衆送信等してはなりません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（禁止事項）</h2>
                <p className="mb-2 text-gray-700">ユーザーは以下の行為を行ってはなりません。</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当社または第三者の権利を侵害する行為</li>
                  <li>虚偽の情報を提供する行為</li>
                  <li>本サービスの運営を妨害する行為</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（免責事項）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>天災・システム障害等やむを得ない事由により、本サービスの提供が一時的に中断される場合があります。</li>
                  <li>本サービスの利用によりユーザーに生じた損害について、当社は故意または重過失がない限り一切の責任を負いません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第8条（契約解除）</h2>
                <p className="text-gray-700">
                  ユーザーが本規約に違反した場合、当社は事前通知なくサービス提供を停止し、契約を解除できるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第9条（個人情報）</h2>
                <p className="text-gray-700">
                  当社は、取得した個人情報を別途定めるプライバシーポリシーに従って適切に管理します。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第10条（準拠法・合意管轄）</h2>
                <p className="text-gray-700">
                  本規約の解釈は日本法に従います。本サービスに関して紛争が生じた場合、東京地方裁判所を専属的合意管轄裁判所とします。
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  制定日：2025年7月1日
                </p>
                <div className="mt-4 text-gray-600 text-sm">
                  <p className="font-semibold">株式会社Nolan</p>
                  <p>〒107-0052 東京都港区赤坂七丁目11番7号 三共赤坂ビル3階</p>
                  <p>電話番号：03-5797-7785</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}