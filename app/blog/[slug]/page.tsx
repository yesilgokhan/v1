import { Calendar, Clock, User, ArrowLeft, Share2, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

// Blog post data - in a real app this would come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "telefon-ekrani-nasil-korunur": {
      title: "Telefon Ekranını Koruma: 7 Etkili Yöntem",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Telefon Ekranınızı Korumak Neden Önemli?</h2>
          <p>Günümüzde akıllı telefonlar hayatımızın vazgeçilmez bir parçası haline geldi. Bu değerli cihazlarımızın en hassas kısmı olan ekranları, günlük kullanım sırasında birçok riske maruz kalıyor. Ekran değişimi maliyetli bir işlem olduğu için, önleyici tedbirler almak çok daha mantıklı bir yaklaşımdır.</p>
          
          <h3>1. Kaliteli Ekran Koruyucu Kullanın</h3>
          <p>Temperli cam ekran koruyucular, ekranınızı çiziklerden ve darbelere karşı korur. 9H sertlik derecesine sahip koruyucular en iyi korumayı sağlar. Ekran koruyucu seçerken şu özelliklere dikkat edin:</p>
          <ul>
            <li>9H sertlik derecesi</li>
            <li>Oleofobik kaplama (parmak izi önleyici)</li>
            <li>Yüksek şeffaflık oranı</li>
            <li>Dokunmatik hassasiyeti koruma</li>
          </ul>
          
          <h3>2. Koruyucu Kılıf Seçimi</h3>
          <p>Kenarları yükseltilmiş kılıflar, telefon düştüğünde ekranın yere değmesini engeller. Silikon veya TPU malzemeli kılıflar darbe emici özellik gösterir. İdeal bir kılıfta bulunması gereken özellikler:</p>
          <ul>
            <li>Ekran ve kamera kenarlarını koruyacak yükseklik</li>
            <li>Darbe emici malzeme</li>
            <li>Kolay takılıp çıkarılabilir tasarım</li>
            <li>Port ve düğmelere kolay erişim</li>
          </ul>
          
          <h3>3. Doğru Taşıma Alışkanlıkları</h3>
          <p>Telefonu anahtarlar veya madeni paralarla aynı cepte taşımaktan kaçının. Bu metal objeler ekranda çiziklere neden olabilir. Taşıma önerileri:</p>
          <ul>
            <li>Telefon için ayrı cep kullanın</li>
            <li>Çanta kullanıyorsanız özel telefon bölmesi tercih edin</li>
            <li>Ekranı bacağınıza gelecek şekilde taşımayın</li>
            <li>Araç içinde güvenli yerlere koyun</li>
          </ul>
          
          <h3>4. Düzenli Temizlik</h3>
          <p>Mikrofiber bez kullanarak ekranı düzenli olarak temizleyin. Kimyasal temizleyiciler yerine özel ekran temizleme solüsyonları tercih edin. Temizlik ipuçları:</p>
          <ul>
            <li>Günde en az bir kez mikrofiber bezle silin</li>
            <li>Alkol bazlı temizleyicilerden kaçının</li>
            <li>Suya dayanıklı olsa bile direkt su kullanmayın</li>
            <li>Temizlik öncesi telefonu kapatın</li>
          </ul>
          
          <h3>5. Sıcaklık Değişimlerine Dikkat</h3>
          <p>Aşırı sıcak veya soğuk ortamlarda telefonu bırakmayın. Ani sıcaklık değişimleri ekranda çatlaklar oluşturabilir. Dikkat edilmesi gerekenler:</p>
          <ul>
            <li>Araç içinde direkt güneş ışığına maruz bırakmayın</li>
            <li>Kış aylarında dışarıdan içeri geçerken ani ısınmaya dikkat edin</li>
            <li>Şarj sırasında aşırı ısınmaya izin vermeyin</li>
            <li>Soğuk havada pil performansının düştüğünü unutmayın</li>
          </ul>
          
          <h3>6. Doğru Kullanım Teknikleri</h3>
          <p>Ekrana aşırı basınç uygulamayın. Parmak uçlarınızla nazikçe dokunun ve sivri objelerle ekrana temas etmeyin. Kullanım önerileri:</p>
          <ul>
            <li>Tırnaklarınızla ekrana dokunmayın</li>
            <li>Kalem veya sivri objeler kullanmayın</li>
            <li>Ekranı temizlerken aşırı basınç uygulamayın</li>
            <li>Çok kuvvetli dokunuşlardan kaçının</li>
          </ul>
          
          <h3>7. Profesyonel Bakım</h3>
          <p>Düzenli aralıklarla profesyonel temizlik ve kontrol yaptırın. Küçük sorunlar büyümeden önce tespit edilebilir. Profesyonel bakım avantajları:</p>
          <ul>
            <li>Erken arıza tespiti</li>
            <li>Profesyonel temizlik</li>
            <li>Yazılım optimizasyonu</li>
            <li>Donanım kontrolü</li>
          </ul>
          
          <h2>Sonuç</h2>
          <p>Bu 7 basit yöntemi uygulayarak telefon ekranınızın ömrünü önemli ölçüde uzatabilirsiniz. Unutmayın ki önlem tedaviden daha iyidir. Ekran değişimi maliyetli bir işlem olduğu için, bu basit adımları takip etmek size hem zaman hem de para kazandıracaktır.</p>
          
          <p>Eğer ekranınızda herhangi bir hasar meydana geldiyse, profesyonel onarım hizmeti almaktan çekinmeyin. MasterCep olarak, tüm marka telefonlar için kaliteli ve garantili ekran değişimi hizmeti sunuyoruz.</p>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2024-01-15",
      readTime: "5 dk",
      category: "Koruma",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["ekran koruma", "telefon bakımı", "aksesuar"],
    },
    "batarya-omru-uzatma": {
      title: "Telefon Bataryasının Ömrünü Uzatmanın 10 Yolu",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Batarya Ömrü Neden Önemli?</h2>
          <p>Akıllı telefon bataryaları zamanla kapasitelerini kaybeder. Doğru kullanım alışkanlıkları ile bu süreci yavaşlatabilir ve bataryanızın daha uzun süre verimli çalışmasını sağlayabilirsiniz.</p>
          
          <h3>1. Doğru Şarj Alışkanlıkları</h3>
          <p>Bataryanızı %20-80 arasında tutmaya çalışın. Tam boşalma ve tam dolum döngülerinden kaçının.</p>
          
          <h3>2. Gece Şarjından Kaçının</h3>
          <p>Telefonu gece boyunca şarjda bırakmak batarya ömrünü kısaltır. Mümkünse gündüz şarj edin.</p>
          
          <h3>3. Hızlı Şarj Kullanımını Sınırlayın</h3>
          <p>Hızlı şarj teknolojisi pratik olsa da bataryayı daha çok yorar. Acil durumlar dışında normal şarj tercih edin.</p>
          
          <h3>4. Sıcaklık Kontrolü</h3>
          <p>Batarya aşırı sıcaklıktan zarar görür. Telefonu sıcak ortamlarda bırakmayın ve şarj sırasında ısınmasına dikkat edin.</p>
          
          <h3>5. Arka Plan Uygulamalarını Kontrol Edin</h3>
          <p>Gereksiz arka plan uygulamaları bataryayı hızla tüketir. Düzenli olarak kontrol edip kapatın.</p>
          
          <h3>6. Ekran Parlaklığını Ayarlayın</h3>
          <p>Ekran en çok batarya tüketen bileşendir. Otomatik parlaklık kullanın veya manuel olarak düşük tutun.</p>
          
          <h3>7. Gereksiz Özellikleri Kapatın</h3>
          <p>Bluetooth, WiFi, GPS gibi özellikleri kullanmadığınızda kapatın.</p>
          
          <h3>8. Güç Tasarrufu Modunu Kullanın</h3>
          <p>Batarya düşük olduğunda güç tasarrufu modunu aktif edin.</p>
          
          <h3>9. Uygulamaları Güncel Tutun</h3>
          <p>Güncel uygulamalar genellikle daha az batarya tüketir.</p>
          
          <h3>10. Kaliteli Şarj Aleti Kullanın</h3>
          <p>Orijinal veya sertifikalı şarj aletleri kullanın. Kalitesiz şarj aletleri bataryaya zarar verebilir.</p>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2024-01-10",
      readTime: "7 dk",
      category: "Bakım",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["batarya", "enerji tasarrufu", "telefon bakımı"],
    },
    "su-hasari-ilk-yardim": {
      title: "Telefonunuz Suya Düştüğünde İlk Yapmanız Gerekenler",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Su Hasarı Acil Durum Rehberi</h2>
          <p>Telefon suya düştüğünde panik yapmayın. Doğru adımları takip ederek cihazınızı kurtarma şansınızı artırabilirsiniz.</p>
          
          <h3>İlk 30 Saniye - Kritik Adımlar</h3>
          <ul>
            <li>Telefonu hemen sudan çıkarın</li>
            <li>Gücü kapatın (açıksa)</li>
            <li>Kılıf ve ekran koruyucuyu çıkarın</li>
            <li>SIM kartı ve hafıza kartını çıkarın</li>
          </ul>
          
          <h3>İlk 5 Dakika</h3>
          <ul>
            <li>Telefonu kuru bezle silin</li>
            <li>Portları ve delikleri temizleyin</li>
            <li>Çalkalamayın veya sallamayın</li>
            <li>Föne tutmayın</li>
          </ul>
          
          <h3>Sonraki Adımlar</h3>
          <ul>
            <li>Pirinç içine gömün (24-48 saat)</li>
            <li>Silika jel kullanabilirsiniz</li>
            <li>Sabırlı olun, açmaya çalışmayın</li>
            <li>Profesyonel yardım alın</li>
          </ul>
          
          <h3>Yapmamanız Gerekenler</h3>
          <ul>
            <li>Telefonu açmaya çalışmayın</li>
            <li>Şarj etmeyin</li>
            <li>Sıcak hava uygulamayın</li>
            <li>Çok beklemeyip profesyonel yardım alın</li>
          </ul>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2024-01-05",
      readTime: "4 dk",
      category: "Acil Durum",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["su hasarı", "acil müdahale", "telefon kurtarma"],
    },
    "orijinal-parca-onemi": {
      title: "Orijinal Parça Kullanımının Önemi",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Neden Orijinal Parça?</h2>
          <p>Telefon onarımında kullanılan parçaların kalitesi, cihazınızın performansını ve ömrünü doğrudan etkiler.</p>
          
          <h3>Orijinal Parça Avantajları</h3>
          <ul>
            <li>Uzun ömür ve dayanıklılık</li>
            <li>Mükemmel uyumluluk</li>
            <li>Garanti kapsamı</li>
            <li>Güvenlik standartları</li>
          </ul>
          
          <h3>Sahte Parça Riskleri</h3>
          <ul>
            <li>Kısa ömür</li>
            <li>Performans sorunları</li>
            <li>Güvenlik riskleri</li>
            <li>Garanti kaybı</li>
          </ul>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2023-12-28",
      readTime: "6 dk",
      category: "Onarım",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["orijinal parça", "kalite", "onarım"],
    },
    "telefon-temizligi": {
      title: "Telefon Temizliği: Hijyen ve Bakım Rehberi",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Telefon Hijyeni</h2>
          <p>Telefonlar günlük hayatta en çok kullandığımız objelerden biri. Düzenli temizlik hem hijyen hem de cihaz ömrü için önemli.</p>
          
          <h3>Günlük Temizlik</h3>
          <ul>
            <li>Mikrofiber bez kullanın</li>
            <li>Alkol bazlı mendil (70% alkol)</li>
            <li>Portları temizleyin</li>
            <li>Kılıfı da unutmayın</li>
          </ul>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2023-12-20",
      readTime: "3 dk",
      category: "Bakım",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["temizlik", "hijyen", "bakım"],
    },
    "garanti-hakki": {
      title: "Telefon Onarımında Garanti Hakkınız",
      content: `
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h2>Garanti Hakları</h2>
          <p>Telefon onarımı sonrası garanti hakkınızı bilin ve haklarınızı koruyun.</p>
          
          <h3>Garanti Kapsamı</h3>
          <ul>
            <li>İşçilik garantisi</li>
            <li>Parça garantisi</li>
            <li>Garanti süresi</li>
            <li>Garanti şartları</li>
          </ul>
        </div>
      `,
      author: "MasterCep Uzman Ekibi",
      date: "2023-12-15",
      readTime: "5 dk",
      category: "Hukuki",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["garanti", "hukuki haklar", "onarım"],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı | MasterCep",
    }
  }

  return {
    title: `${post.title} | MasterCep Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-slate-600 dark:text-gray-300 mb-8">
            Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Blog'a Dön</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Blog'a Dön</span>
            </Link>
            <button className="flex items-center space-x-2 text-slate-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-gray-200 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Paylaş</span>
            </button>
          </div>

          {/* Content */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">İlgili Yazılar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/batarya-omru-uzatma"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">
                  Telefon Bataryasının Ömrünü Uzatmanın 10 Yolu
                </h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm">
                  Batarya ömrünü uzatmak için pratik ipuçları...
                </p>
              </Link>
              <Link
                href="/blog/su-hasari-ilk-yardim"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">Su Hasarı İlk Yardım</h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm">
                  Telefonunuz suya düştüğünde yapmanız gerekenler...
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Profesyonel Onarım Hizmeti Alın</h3>
            <p className="text-blue-100 mb-6">
              Telefonunuzda herhangi bir sorun mu var? Uzman ekibimizle iletişime geçin.
            </p>
            <Link
              href="https://wa.me/905521764553"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              WhatsApp'tan Randevu Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
