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

export default function SamsungOnarimPage() {
  const services = [
    {
      icon: Monitor,
      title: "Samsung Ekran Değişimi",
      description:
        "Kırık, çatlak veya dokunmatik sorunu yaşayan Samsung ekranlarınızı orijinal kalitede AMOLED/Super AMOLED panellerle değiştiriyoruz. Always On Display ve parmak izi okuyucu fonksiyonları korunur.",
      price: "₺799",
      duration: "35 dakika",
      warranty: "6 ay",
      features: [
        "Orijinal kalite AMOLED ekran",
        "Parmak izi okuyucu korunur",
        "Always On Display desteği",
        "Su geçirmezlik korunur",
        "Dokunmatik hassasiyet testi",
        "Renk kalibrasyonu",
      ],
      popular: true,
    },
    {
      icon: Battery,
      title: "Samsung Batarya Değişimi",
      description:
        "Samsung bataryanızın kapasitesi düştüyse veya şişmişse, orijinal Samsung sertifikalı bataryalarla değiştiriyoruz. Hızlı şarj ve kablosuz şarj desteği korunur.",
      price: "₺349",
      duration: "25 dakika",
      warranty: "12 ay",
      features: [
        "Orijinal Samsung batarya",
        "Yüksek kapasite garanti",
        "Hızlı şarj desteği",
        "Kablosuz şarj uyumlu",
        "Güvenlik sertifikası",
        "Şişme koruması",
      ],
    },
    {
      icon: Camera,
      title: "Samsung Kamera Onarımı",
      description:
        "Ön ve arka kamera modüllerinde yaşanan sorunları çözüyoruz. Bulanık görüntü, odaklama sorunu ve lens çatlakları için profesyonel onarım. Ultra wide ve telephoto kameralar dahil.",
      price: "₺649",
      duration: "40 dakika",
      warranty: "6 ay",
      features: [
        "Ön/arka kamera onarımı",
        "Ultra wide kamera",
        "Telephoto lens onarımı",
        "8K video kalitesi",
        "Gece modu optimizasyonu",
        "Optik zoom kalibrasyonu",
      ],
    },
    {
      icon: Cpu,
      title: "Samsung Anakart Onarımı",
      description:
        "Anakart arızalarını mikroişlemci seviyesinde onarıyoruz. Exynos ve Snapdragon işlemciler için uzman müdahale. Veri kaybı olmadan profesyonel onarım.",
      price: "₺1.299",
      duration: "2-3 gün",
      warranty: "6 ay",
      features: [
        "Exynos/Snapdragon onarımı",
        "Veri korunur",
        "Chip seviyesi müdahale",
        "Performans optimizasyonu",
        "Termal yönetim",
        "Fonksiyon testleri",
      ],
    },
    {
      icon: Zap,
      title: "Samsung Şarj Soketi Onarımı",
      description:
        "USB-C şarj soketinde yaşanan bağlantı sorunları, gevşeklik ve şarj alamama problemlerini çözüyoruz. Super Fast Charging desteği korunur.",
      price: "₺279",
      duration: "30 dakika",
      warranty: "6 ay",
      features: [
        "USB-C soket değişimi",
        "Super Fast Charging",
        "Veri aktarım testi",
        "Bağlantı optimizasyonu",
        "Toz/nem koruması",
        "Dayanıklılık testi",
      ],
    },
    {
      icon: Volume2,
      title: "Samsung Hoparlör Onarımı",
      description:
        "Hoparlör, mikrofon ve ses kalitesi sorunlarını çözüyoruz. Dolby Atmos ses deneyimi ve kristal netliğinde ses kalitesi için profesyonel onarım.",
      price: "₺379",
      duration: "35 dakika",
      warranty: "6 ay",
      features: [
        "Stereo hoparlör değişimi",
        "Mikrofon onarımı",
        "Dolby Atmos desteği",
        "Ses seviyesi optimizasyonu",
        "Titreşim motoru",
        "Ses kalitesi testi",
      ],
    },
    {
      icon: Droplets,
      title: "Samsung Su Hasarı Onarımı",
      description:
        "Suya düşen veya sıvı teması olan Samsung telefonları özel temizlik ve kurutma işlemleriyle kurtarıyoruz. IP68 su geçirmezlik standardı korunur.",
      price: "₺549",
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
      title: "Samsung Wifi/Bluetooth Onarımı",
      description:
        "Wifi bağlantı sorunları, Bluetooth çalışmaması ve 5G ağ problemlerini çözüyoruz. Antenna ve RF modülü onarımları yapıyoruz.",
      price: "₺429",
      duration: "45 dakika",
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
      description: "Samsung telefonunuzu getirin, uzman teknisyenlerimiz ücretsiz olarak teşhis edelim.",
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
      description: "Orijinal parçalarla uzman ellerde güvenli onarım işlemi.",
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
      series: "Galaxy S24 Serisi",
      models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24"],
    },
    {
      series: "Galaxy S23 Serisi",
      models: ["Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE"],
    },
    {
      series: "Galaxy S22 Serisi",
      models: ["Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22"],
    },
    {
      series: "Galaxy S21 Serisi",
      models: ["Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE"],
    },
    {
      series: "Galaxy Note Serisi",
      models: ["Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Note 10+", "Galaxy Note 10"],
    },
    {
      series: "Galaxy A Serisi",
      models: ["Galaxy A54", "Galaxy A34", "Galaxy A24", "Galaxy A14", "Galaxy A04"],
    },
    {
      series: "Galaxy Z Serisi",
      models: ["Galaxy Z Fold5", "Galaxy Z Flip5", "Galaxy Z Fold4", "Galaxy Z Flip4"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-medium">
              <Smartphone className="w-4 h-4 mr-2" />
              Samsung Onarım Uzmanı
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight">
              Samsung Onarım Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Samsung Galaxy telefonlarınızda yaşadığınız tüm sorunları çözmek için buradayız. Galaxy S24, S23, Note, A
              serisi ve katlanabilir modeller için uzman teknisyenlerimizle hizmetinizdeyiz. Orijinal Samsung parçaları
              ve profesyonel hizmet garantisi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">12.000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Samsung Onarımı</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-green-600 mb-2">%97</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">35 dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-orange-600 mb-2">12 ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti Süresi</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905521764553"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Samsung Onarım Hizmetlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tüm Samsung Galaxy modellerine uyumlu, profesyonel onarım hizmetleri. Orijinal Samsung parçaları ve uzman
              teknisyenlerle kaliteli hizmet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm group hover:scale-105 ${
                  service.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium rounded-t-lg">
                    ⭐ En Popüler Hizmet
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
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
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Onarım Sürecimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Samsung onarım sürecimiz şeffaf, hızlı ve güvenilirdir. Her adımda sizi bilgilendiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Desteklenen Samsung Modelleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Galaxy S24'ten Galaxy A serisine kadar tüm Samsung modellerinde uzman onarım hizmeti veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedModels.map((series, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center text-blue-600 dark:text-blue-400 mb-4">
                    {series.series}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {series.models.map((model, modelIndex) => (
                      <div
                        key={modelIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        <Smartphone className="w-5 h-5 text-blue-600" />
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neden MasterCep?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Samsung onarımında İzmir'in en güvenilir adresi. Kalite, hız ve güvenilirlik bir arada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Orijinal Parçalar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Sadece orijinal ve Samsung sertifikalı parçalar kullanıyoruz. Cihazınızın performansını koruyoruz.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Hızlı Servis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Çoğu Samsung onarımını 35 dakikada tamamlıyoruz. Acil durumlar için express servis seçeneği.
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
                  Samsung sertifikalı teknisyenlerimiz 8+ yıl deneyimle en karmaşık Galaxy onarımlarını
                  gerçekleştiriyor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Garanti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Tüm Samsung onarımlarımızda 6 ay ila 12 ay arası garanti veriyoruz. Güvenle tercih edin.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Samsung Galaxy'nizi Uzman Ellere Teslim Edin</h2>
            <p className="text-xl mb-8 opacity-90">
              Profesyonel ekibimiz ve kaliteli Samsung parçalarımızla Galaxy telefonunuzu en iyi şekilde onarıyoruz.
              Ücretsiz teşhis için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905521764553"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
