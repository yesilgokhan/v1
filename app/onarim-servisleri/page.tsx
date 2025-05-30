import {
  Camera,
  Download,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onarım Servisleri - Profesyonel Cep Telefonu Onarımı | MasterCep",
  description:
    "iPhone, Samsung, Xiaomi, Oppo ve tüm marka cep telefonları için profesyonel onarım hizmetleri. Hızlı, güvenilir ve garantili servis.",
  keywords: "cep telefonu onarımı, iPhone onarım, Samsung onarım, ekran değişimi, batarya değişimi",
}

const services = [
  {
    title: "Ekran Değişimi",
    description:
      "Kırık, çatlak veya arızalı ekranlar için hızlı ve güvenilir çözüm. Orijinal kalitede parçalar kullanıyoruz.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-monitor-smartphone"
      >
        <rect width="12" height="8" x="2" y="4" rx="2"></rect>
        <line x1="2" x2="14" y1="16" y2="16"></line>
        <path d="M17 8h-1v8h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17"></path>
      </svg>
    ),
    href: "/ekran-degisimi",
    gradient: "from-red-500 to-orange-600",
    price: "₺899",
    duration: "30 dk",
    features: ["Orijinal Ekran", "Hızlı Onarım", "Garantili İşlem", "Ücretsiz Kontrol"],
  },
  {
    title: "Pil Değişimi",
    description: "Performans düşüklüğü veya şarj sorunları için yeni pil montajı. Uzun ömürlü bataryalar.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-battery-charging"
      >
        <rect width="16" height="10" x="2" y="7" rx="2"></rect>
        <line x1="6" x2="6" y1="7" y2="3"></line>
        <path d="M13 7v5l3-3"></path>
      </svg>
    ),
    href: "/batarya-degisimi",
    gradient: "from-yellow-500 to-yellow-600",
    price: "₺399",
    duration: "20 dk",
    features: ["Orijinal Pil", "Uzun Ömürlü", "Hızlı Değişim", "Pil Sağlığı Testi"],
  },
  {
    title: "Şarj Soketi Değişimi",
    description: "Şarj almama veya bağlantı sorunları için çözüm. Hızlı şarj desteği ile tam performans.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-power-plug"
      >
        <path d="M12 19v-3"></path>
        <circle cx="12" cy="6" r="3"></circle>
        <path d="M5 17l-2 2"></path>
        <path d="M19 17l2 2"></path>
      </svg>
    ),
    href: "/sarj-soketi-degisimi",
    gradient: "from-purple-500 to-purple-600",
    price: "₺599",
    duration: "25 dk",
    features: ["Orijinal Soket", "Hızlı Onarım", "Şarj Testi", "Garantili İşlem"],
  },
  {
    title: "Kamera Değişimi",
    description: "Ön kamera, arka kamera ve kamera camı değişimi. Profesyonel fotoğraf kalitesi.",
    icon: <Camera className="h-12 w-12" />,
    href: "/kamera-degisimi",
    gradient: "from-green-500 to-emerald-600",
    price: "₺699",
    duration: "45 dk",
    features: ["Ön Kamera Değişimi", "Arka Kamera Değişimi", "Kamera Camı Onarımı", "30-60 Dakika Servis"],
  },
  {
    title: "Lazerli Arka Cam Değişimi",
    description: "En son lazer teknolojisi ile arka cam değişimi. Cihaza zarar vermeden onarım.",
    icon: <Zap className="h-12 w-12" />,
    href: "/lazerli-arka-cam-degisimi",
    gradient: "from-purple-500 to-violet-600",
    price: "₺1.299",
    duration: "60 dk",
    features: ["Lazer Teknolojisi", "İç Parçalara Zarar Vermez", "Su Geçirmezlik Korunur", "Fabrika Kalitesi"],
  },
  {
    title: "Yazılım Güncelleme",
    description: "iOS/Android güncelleme ve yazılım sorun giderme hizmeti. Güvenli sistem optimizasyonu.",
    icon: <Download className="h-12 w-12" />,
    href: "/yazilim-guncelleme",
    gradient: "from-blue-500 to-cyan-600",
    price: "₺299",
    duration: "30 dk",
    features: ["iOS/Android Güncelleme", "Sistem Optimizasyonu", "Bootloop Onarımı", "Veri Güvenliği"],
  },
]

const deviceCategories = [
  {
    title: "Cep Telefonu Onarımı",
    description: "iPhone, Samsung, Xiaomi, Oppo, Realme, Vivo ve tüm marka telefonlar",
    icon: Smartphone,
    color: "from-blue-500 to-blue-600",
    services: ["Ekran Değişimi", "Batarya Değişimi", "Kamera Onarımı", "Anakart Onarımı"],
    brands: ["iPhone", "Samsung", "Xiaomi", "Oppo", "Realme", "Vivo", "Huawei"],
  },
  {
    title: "Tablet Onarımı",
    description: "iPad ve Android tabletler için profesyonel onarım hizmetleri",
    icon: Tablet,
    color: "from-purple-500 to-purple-600",
    services: ["Ekran Değişimi", "Batarya Değişimi", "Şarj Soketi", "Hoparlör Onarımı"],
    brands: ["iPad", "Samsung Tab", "Huawei Tab", "Lenovo Tab"],
  },
  {
    title: "Bilgisayar Onarımı",
    description: "MacBook ve laptop onarım hizmetleri",
    icon: Laptop,
    color: "from-green-500 to-green-600",
    services: ["Klavye Değişimi", "Ekran Onarımı", "Batarya Değişimi", "Logic Board"],
    brands: ["MacBook", "Dell", "HP", "Lenovo", "Asus"],
  },
]

export default function OnarimServisleriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Profesyonel Onarım Hizmetleri</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Onarım Servisleri</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Cep telefonları, tabletler ve bilgisayarlar için profesyonel onarım hizmetleri. Her cihaz türü için uzman
            çözümler ve orijinal kalitede parçalar kullanıyoruz.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Device Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Cihaz Kategorileri</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Her cihaz türü için özel çözümler ve uzman hizmetler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Hizmetlerimiz:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Desteklenen Markalar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand, brandIndex) => (
                        <span key={brandIndex} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="https://wa.me/905521764553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Randevu Al</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Popüler Onarım Hizmetleri</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              En çok talep edilen onarım hizmetlerimiz ve fiyatları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center text-white`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>6 ay garanti</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-slate-500 text-sm block">başlangıç fiyatı</span>
                    </div>
                    <Link
                      href={service.href}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group-hover:scale-105"
                    >
                      <span>Detay</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Pages Navigation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Marka Bazlı Onarım Sayfaları</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Her marka için özel hazırlanmış detaylı onarım rehberleri
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "iPhone", href: "/iphone-onarim", color: "from-blue-500 to-blue-600" },
              { name: "Samsung", href: "/samsung-onarim", color: "from-blue-600 to-indigo-600" },
              { name: "Xiaomi", href: "/xiaomi-onarim", color: "from-orange-500 to-red-600" },
              { name: "Oppo", href: "/oppo-onarim", color: "from-green-500 to-emerald-600" },
              { name: "Realme", href: "/realme-onarim", color: "from-yellow-500 to-orange-600" },
              { name: "Vivo", href: "/vivo-onarim", color: "from-purple-500 to-violet-600" },
              { name: "Huawei", href: "/huawei-onarim", color: "from-red-500 to-pink-600" },
            ].map((brand, index) => (
              <Link
                key={index}
                href={brand.href}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 text-center group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${brand.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-800">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Ücretsiz Teşhis</h4>
            <p className="text-slate-600 text-sm">Tüm cihazlar için ücretsiz arıza teşhisi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Garanti</h4>
            <p className="text-slate-600 text-sm">Tüm onarımlar garanti kapsamında</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Hızlı Servis</h4>
            <p className="text-slate-600 text-sm">Çoğu onarım aynı gün teslim</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">Profesyonel Onarım Hizmeti Alın</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Cihazınızda herhangi bir sorun mu var? Uzman ekibimizle iletişime geçin ve ücretsiz teşhis hizmeti alın.
          </p>
          <Link
            href="https://wa.me/905521764553"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>WhatsApp'tan Randevu Al</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
