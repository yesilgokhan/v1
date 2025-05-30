import { Calendar, Clock, User, ArrowRight, Smartphone, Shield, Wrench, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Cep Telefonu Onarım Rehberi | MasterCep",
  description: "Cep telefonu bakımı, onarım ipuçları ve teknoloji rehberleri. Uzman tavsiyelerini keşfedin.",
  keywords: "cep telefonu bakımı, onarım ipuçları, teknoloji rehberi, telefon koruma",
}

const blogPosts = [
  {
    id: "telefon-ekrani-nasil-korunur",
    title: "Telefon Ekranını Koruma: 7 Etkili Yöntem",
    excerpt:
      "Telefon ekranınızı çiziklerden ve kırılmalardan korumak için pratik ipuçları ve öneriler. Doğru koruyucu seçimi ve kullanım alışkanlıkları.",
    author: "MasterCep Uzman Ekibi",
    date: "2024-01-15",
    readTime: "5 dk",
    category: "Koruma",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["ekran koruma", "telefon bakımı", "aksesuar"],
    featured: true,
  },
  {
    id: "batarya-omru-uzatma",
    title: "Telefon Bataryasının Ömrünü Uzatmanın 10 Yolu",
    excerpt:
      "Telefon bataryanızın daha uzun süre dayanması için uygulamanız gereken pratik yöntemler. Şarj alışkanlıkları ve enerji tasarrufu.",
    author: "MasterCep Uzman Ekibi",
    date: "2024-01-10",
    readTime: "7 dk",
    category: "Bakım",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["batarya", "enerji tasarrufu", "telefon bakımı"],
    featured: true,
  },
  {
    id: "su-hasari-ilk-yardim",
    title: "Telefonunuz Suya Düştüğünde İlk Yapmanız Gerekenler",
    excerpt:
      "Su hasarı durumunda telefonu kurtarmak için kritik ilk adımlar ve acil müdahale yöntemleri. Zarar görmeden önce yapılması gerekenler.",
    author: "MasterCep Uzman Ekibi",
    date: "2024-01-05",
    readTime: "4 dk",
    category: "Acil Durum",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["su hasarı", "acil müdahale", "telefon kurtarma"],
    featured: false,
  },
  {
    id: "orijinal-parca-onemi",
    title: "Orijinal Parça Kullanımının Önemi",
    excerpt:
      "Telefon onarımında orijinal parça kullanmanın avantajları ve kaliteli parça seçim kriterleri. Sahte parçalardan nasıl kaçınılır?",
    author: "MasterCep Uzman Ekibi",
    date: "2023-12-28",
    readTime: "6 dk",
    category: "Onarım",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["orijinal parça", "kalite", "onarım"],
    featured: false,
  },
  {
    id: "telefon-temizligi",
    title: "Telefon Temizliği: Hijyen ve Bakım Rehberi",
    excerpt:
      "Telefonunuzu güvenli ve etkili şekilde temizlemek için doğru yöntemler ve önerilen ürünler. Hijyen kuralları ve temizlik sıklığı.",
    author: "MasterCep Uzman Ekibi",
    date: "2023-12-20",
    readTime: "3 dk",
    category: "Bakım",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["temizlik", "hijyen", "bakım"],
    featured: false,
  },
  {
    id: "garanti-hakki",
    title: "Telefon Onarımında Garanti Hakkınız",
    excerpt:
      "Onarım sonrası garanti süreçleri, haklarınız ve garanti kapsamında neler olduğu hakkında bilgiler. Tüketici hakları rehberi.",
    author: "MasterCep Uzman Ekibi",
    date: "2023-12-15",
    readTime: "5 dk",
    category: "Hukuki",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["garanti", "hukuki haklar", "onarım"],
    featured: false,
  },
]

const categories = [
  { name: "Tümü", count: blogPosts.length, icon: Smartphone },
  { name: "Koruma", count: 1, icon: Shield },
  { name: "Bakım", count: 2, icon: Wrench },
  { name: "Onarım", count: 1, icon: Wrench },
  { name: "Acil Durum", count: 1, icon: Shield },
  { name: "Hukuki", count: 1, icon: Shield },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Teknoloji Rehberi</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Cep telefonu bakımı, onarım ipuçları ve teknoloji dünyasından en güncel bilgiler
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              className="w-full px-4 py-3 pl-12 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Öne Çıkan Yazılar</h2>
              <p className="text-lg text-slate-600 dark:text-gray-300">En popüler ve faydalı rehberlerimiz</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Öne Çıkan
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <span>Devamını Oku</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Kategoriler</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700 dark:text-gray-300">{category.name}</span>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Popular Tags */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Popüler Etiketler</h4>
                <div className="flex flex-wrap gap-2">
                  {["telefon bakımı", "ekran koruma", "batarya", "onarım", "temizlik", "garanti"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Tüm Blog Yazıları</h2>
            </div>

            <div className="grid gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>

                      <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          <span>Devamını Oku</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Teknoloji Güncellemelerini Kaçırmayın</h3>
              <p className="text-blue-100 mb-6">
                En son teknoloji haberleri ve onarım ipuçları için bültenimize abone olun
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
