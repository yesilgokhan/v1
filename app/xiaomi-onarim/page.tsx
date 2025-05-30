import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Smartphone,
  Shield,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  Wrench,
  Battery,
  Camera,
  Monitor,
  Cpu,
  Droplets,
  Zap,
  ArrowRight,
  Award,
  ThumbsUp,
  Wifi,
  Volume2,
} from "lucide-react"

export default function XiaomiOnarimPage() {
  const services = [
    {
      icon: Monitor,
      title: "Xiaomi Ekran Değişimi",
      description:
        "Kırık, çatlak veya dokunmatik sorunu yaşayan Xiaomi ekranlarınızı orijinal kalitede AMOLED/IPS panellerle değiştiriyoruz. Always On Display ve parmak izi okuyucu fonksiyonları korunur.",
      price: "₺699",
      duration: "30 dakika",
      warranty: "6 ay",
      features: [
        "Orijinal kalite AMOLED ekran",
        "Parmak izi okuyucu korunur",
        "Always On Display desteği",
        "120Hz yenileme hızı",
        "Dokunmatik hassasiyet testi",
        "Renk kalibrasyonu",
      ],
      popular: true,
    },
    {
      icon: Battery,
      title: "Xiaomi Batarya Değişimi",
      description:
        "Xiaomi bataryanızın kapasitesi düştüyse veya şişmişse, yüksek kapasiteli bataryalarla değiştiriyoruz. Turbo Charge ve kablosuz şarj desteği korunur.",
      price: "₺299",
      duration: "25 dakika",
      warranty: "12 ay",
      features: [
        "Yüksek kapasiteli batarya",
        "Turbo Charge desteği",
        "Kablosuz şarj uyumlu",
        "Hızlı şarj teknolojisi",
        "Güvenlik sertifikası",
        "Şişme koruması",
      ],
    },
    {
      icon: Camera,
      title: "Xiaomi Kamera Onarımı",
      description:
        "Ön ve arka kamera modüllerinde yaşanan sorunları çözüyoruz. Bulanık görüntü, odaklama sorunu ve lens çatlakları için profesyonel onarım. Ultra wide ve macro kameralar dahil.",
      price: "₺599",
      duration: "35 dakika",
      warranty: "6 ay",
      features: [
        "Ön/arka kamera onarımı",
        "Ultra wide kamera",
        "Macro lens onarımı",
        "4K video kalitesi",
        "Gece modu optimizasyonu",
        "AI kamera özellikleri",
      ],
    },
    {
      icon: Cpu,
      title: "Xiaomi Anakart Onarımı",
      description:
        "Anakart arızalarını mikroişlemci seviyesinde onarıyoruz. Snapdragon ve MediaTek işlemciler için uzman müdahale. Veri kaybı olmadan profesyonel onarım.",
      price: "₺1.199",
      duration: "2-3 gün",
      warranty: "6 ay",
      features: [
        "Snapdragon/MediaTek onarımı",
        "Veri korunur",
        "Chip seviyesi müdahale",
        "MIUI optimizasyonu",
        "Termal yönetim",
        "Fonksiyon testleri",
      ],
    },
    {
      icon: Zap,
      title: "Xiaomi Şarj Soketi Onarımı",
      description:
        "USB-C şarj soketinde yaşanan bağlantı sorunları, gevşeklik ve şarj alamama problemlerini çözüyoruz. Turbo Charge desteği korunur.",
      price: "₺249",
      duration: "25 dakika",
      warranty: "6 ay",
      features: [
        "USB-C soket değişimi",
        "Turbo Charge desteği",
        "Veri aktarım testi",
        "Bağlantı optimizasyonu",
        "Toz/nem koruması",
        "Dayanıklılık testi",
      ],
    },
    {
      icon: Volume2,
      title: "Xiaomi Hoparlör Onarımı",
      description:
        "Hoparlör, mikrofon ve ses kalitesi sorunlarını çözüyoruz. Hi-Res Audio ses deneyimi ve kristal netliğinde ses kalitesi için profesyonel onarım.",
      price: "₺349",
      duration: "30 dakika",
      warranty: "6 ay",
      features: [
        "Stereo hoparlör değişimi",
        "Mikrofon onarımı",
        "Hi-Res Audio desteği",
        "Ses seviyesi optimizasyonu",
        "Titreşim motoru",
        "Ses kalitesi testi",
      ],
    },
    {
      icon: Droplets,
      title: "Xiaomi Su Hasarı Onarımı",
      description:
        "Suya düşen veya sıvı teması olan Xiaomi telefonları özel temizlik ve kurutma işlemleriyle kurtarıyoruz. IP68 su geçirmezlik standardı korunur.",
      price: "₺499",
      duration: "1-2 gün",
      warranty: "3 ay",
      features: [
        "Ultrasonik temizlik",
        "Korozyon temizliği",
        "Komponent değişimi",
        "IP68 standardı korunur",
        "Fonksiyon testleri",
        "Önleyici bakım",
      ],
    },
    {
      icon: Wifi,
      title: "Xiaomi Wifi/Bluetooth Onarımı",
      description:
        "Wifi bağlantı sorunları, Bluetooth çalışmaması ve 5G ağ problemlerini çözüyoruz. Antenna ve RF modülü onarımları yapıyoruz.",
      price: "₺399",
      duration: "40 dakika",
      warranty: "6 ay",
      features: [
        "Wifi 6 antenna onarımı",
        "Bluetooth 5.0 modülü",
        "5G RF kalibrasyonu",
        "Sinyal güçlendirme",
        "Ağ optimizasyonu",
        "Bağlantı testleri",
      ],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Ücretsiz Teşhis",
      description: "Xiaomi telefonunuzu getirin, uzman teknisyenlerimiz ücretsiz olarak teşhis edelim.",
      icon: Wrench,
    },
    {
      step: "02",
      title: "Fiyat Teklifi",
      description: "Tespit edilen arızaya göre şeffaf fiyat teklifi sunuyoruz.",
      icon: Calculator,
    },
    {
      step: "03",
      title: "Profesyonel Onarım",
      description: "Kaliteli parçalarla uzman ellerde güvenli onarım işlemi.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Test & Teslim",
      description: "Kapsamlı testlerden geçen cihazınızı garanti ile teslim ediyoruz.",
      icon: CheckCircle,
    },
  ]

  const supportedModels = [
    {
      series: "Xiaomi 14 Serisi",
      models: ["Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14"],
    },
    {
      series: "Xiaomi 13 Serisi",
      models: ["Xiaomi 13 Ultra", "Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 13 Lite"],
    },
    {
      series: "Xiaomi 12 Serisi",
      models: ["Xiaomi 12 Pro", "Xiaomi 12", "Xiaomi 12 Lite", "Xiaomi 12X"],
    },
    {
      series: "Redmi Note Serisi",
      models: ["Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro"],
    },
    {
      series: "Redmi Serisi",
      models: ["Redmi 13C", "Redmi 12", "Redmi A3", "Redmi A2"],
    },
    {
      series: "POCO Serisi",
      models: ["POCO X6 Pro", "POCO X6", "POCO F6", "POCO M6 Pro"],
    },
    {
      series: "Mi Serisi",
      models: ["Mi 11 Ultra", "Mi 11 Pro", "Mi 11", "Mi 10T Pro"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-6 py-2 text-sm font-medium">
              <Smartphone className="w-4 h-4 mr-2" />
              Xiaomi & Redmi Onarım Uzmanı
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
              Xiaomi & Redmi Onarım Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Xiaomi, Redmi ve POCO telefonlarınızda yaşadığınız tüm sorunları çözmek için buradayız. Xiaomi 14, 13,
              Redmi Note ve POCO serisi için uzman teknisyenlerimizle hizmetinizdeyiz. Kaliteli parçalar ve profesyonel
              hizmet garantisi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-orange-600 mb-2">8.500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Xiaomi Onarımı</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-green-600 mb-2">%96</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-red-600 mb-2">30 dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">12 ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti Süresi</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905521764553"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara: 0552 176 45 53
              </a>
              <a
                href="https://wa.me/905521764553"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Xiaomi & Redmi Onarım Hizmetlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tüm Xiaomi, Redmi ve POCO modellerine uyumlu, profesyonel onarım hizmetleri. Kaliteli parçalar ve uzman
              teknisyenlerle güvenilir hizmet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm group hover:scale-105 ${
                  service.popular ? "ring-2 ring-orange-500 ring-opacity-50" : ""
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 text-sm font-medium rounded-t-lg">
                    ⭐ En Popüler Hizmet
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{service.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Shield className="w-4 h-4" />
                        {service.warranty} garanti
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                    <Calendar className="w-5 h-5" />
                    Randevu Al
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Onarım Sürecimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Xiaomi onarım sürecimiz şeffaf, hızlı ve güvenilirdir. Her adımda sizi bilgilendiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Desteklenen Xiaomi & Redmi Modelleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Xiaomi 14'ten Redmi A serisine kadar tüm Xiaomi ve Redmi modellerinde uzman onarım hizmeti veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedModels.map((series, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center text-orange-600 dark:text-orange-400 mb-4">
                    {series.series}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {series.models.map((model, modelIndex) => (
                      <div
                        key={modelIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        <Smartphone className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Neden MasterCep?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Xiaomi onarımında İzmir'in en güvenilir adresi. Kalite, hız ve güvenilirlik bir arada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Kaliteli Parçalar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Yüksek kaliteli ve uyumlu parçalar kullanıyoruz. Cihazınızın performansını koruyoruz.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Hızlı Servis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Çoğu Xiaomi onarımını 30 dakikada tamamlıyoruz. Acil durumlar için express servis seçeneği.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Uzman Teknisyen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Xiaomi sertifikalı teknisyenlerimiz 7+ yıl deneyimle en karmaşık MIUI onarımlarını gerçekleştiriyor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Garanti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Tüm Xiaomi onarımlarımızda 6 ay ila 12 ay arası garanti veriyoruz. Güvenle tercih edin.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Xiaomi'nizi Uzman Ellere Teslim Edin</h2>
            <p className="text-xl mb-8 opacity-90">
              Profesyonel ekibimiz ve kaliteli parçalarımızla Xiaomi telefonunuzu en iyi şekilde onarıyoruz. Ücretsiz
              teşhis için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905521764553"
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0552 176 45 53
              </a>
              <a
                href="https://wa.me/905521764553"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Calculator icon component
function Calculator({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="16" y1="14" x2="16" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="16" y1="18" x2="16" y2="18" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <line x1="8" y1="18" x2="8" y2="18" />
    </svg>
  )
}
