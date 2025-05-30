import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FinalCTA from "@/components/FinalCTA"
import {
  Smartphone,
  Battery,
  Monitor,
  Camera,
  Droplets,
  Cpu,
  Clock,
  Shield,
  ThumbsUp,
  Banknote,
  Award,
  CheckCircle,
} from "lucide-react"

export const metadata = {
  title: "Realme Telefon Onarım Servisi | MasterCep",
  description:
    "Realme telefonunuz için profesyonel ekran değişimi, batarya değişimi, anakart onarımı ve daha fazlası. Aynı gün servis ve orijinal parça garantisi.",
  keywords:
    "realme onarım, realme ekran değişimi, realme batarya değişimi, realme servis, realme teknik servis, realme telefon tamiri",
}

export default function RealmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Realme Telefon Onarım Servisi</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Realme telefonunuz için profesyonel onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı
              ve daha fazlası için uzman ekibimize güvenin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://wa.me/905521764553">Hemen WhatsApp'tan Yazın</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-orange-500 font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="#services">Hizmetlerimiz</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Realme Onarım Hizmetlerimiz
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Ekran Değişimi</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Çatlak, kırık veya görüntü sorunu olan Realme ekranlarını orijinal kalitede yedek parçalarla
                  değiştiriyoruz.
                </p>
                <p className="text-2xl font-bold text-orange-500">₺1.200'den başlayan fiyatlarla</p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Battery className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Batarya Değişimi</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Şarj sorunu yaşayan veya hızlı şarj bitiren Realme telefonunuz için batarya değişimi yapıyoruz.
                </p>
                <p className="text-2xl font-bold text-green-500">₺600'den başlayan fiyatlarla</p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Anakart Onarımı</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Açılmayan, donma sorunu yaşayan veya yazılım hatası veren Realme telefonunuzun anakart onarımını
                  yapıyoruz.
                </p>
                <p className="text-2xl font-bold text-blue-500">₺800'den başlayan fiyatlarla</p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Camera className="h-8 w-8 text-purple-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Kamera Değişimi</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bulanık çeken, açılmayan veya hata veren Realme telefon kameralarını değiştiriyoruz.
                </p>
                <p className="text-2xl font-bold text-purple-500">₺700'den başlayan fiyatlarla</p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Droplets className="h-8 w-8 text-cyan-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Su Hasarı Onarımı</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Suya düşen Realme telefonunuzu özel ekipmanlarla kurutup, korozyon temizliği yapıyoruz.
                </p>
                <p className="text-2xl font-bold text-cyan-500">₺900'den başlayan fiyatlarla</p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-indigo-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Yazılım Güncelleme</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Realme telefonunuzun yazılımını güncelliyor, format atıyor ve veri kurtarma işlemleri yapıyoruz.
                </p>
                <p className="text-2xl font-bold text-indigo-500">₺400'den başlayan fiyatlarla</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Repair Process Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Onarım Sürecimiz</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Arıza Tespiti</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Realme telefonunuzu detaylı inceleyerek sorunun kaynağını tespit ediyoruz.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Fiyat Onayı</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tespit sonrası net fiyat bilgisi veriyor ve onayınızı alıyoruz.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Onarım</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Uzman teknisyenlerimiz orijinal parçalarla onarım işlemini gerçekleştiriyor.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Test ve Teslim</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Onarım sonrası kapsamlı testler yapıp, garanti belgesiyle teslim ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Models Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Desteklenen Realme Modelleri
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Realme GT",
                "Realme GT Neo",
                "Realme GT Master",
                "Realme 9 Pro+",
                "Realme 9 Pro",
                "Realme 9",
                "Realme 8 Pro",
                "Realme 8",
                "Realme 7 Pro",
                "Realme 7",
                "Realme 6 Pro",
                "Realme 6",
                "Realme C35",
                "Realme C25",
                "Realme C21",
                "Realme C11",
                "Realme X7 Pro",
                "Realme X7",
                "Realme X3",
                "Realme X2 Pro",
                "Realme X2",
                "Realme X50 Pro",
                "Realme X50",
              ].map((model) => (
                <Badge key={model} className="bg-orange-100 text-orange-600 hover:bg-orange-200 px-4 py-2 text-sm">
                  {model}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Neden MasterCep?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Çoğu Realme onarımını aynı gün içinde tamamlıyoruz. Zamanınız değerli!
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Garanti</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tüm Realme onarım hizmetlerimiz 6 ay garantilidir. İçiniz rahat olsun!
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <ThumbsUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Uzman Ekip</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Realme telefonlar konusunda uzmanlaşmış teknisyenlerimiz hizmetinizde.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <Banknote className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Uygun Fiyat</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Fiyat-performans garantisi!
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <Award className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Orijinal Parçalar</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sadece orijinal veya orijinal kalitesinde yedek parçalar kullanıyoruz.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700">
                <CheckCircle className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Ücretsiz Kontrol</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Realme telefonunuzu ücretsiz kontrol ediyor, sonra fiyat teklifi sunuyoruz.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <FinalCTA
          title="Realme Telefonunuz için Profesyonel Destek Alın"
          description="Realme telefonunuzla ilgili her türlü sorun için uzman ekibimiz yanınızda. Hemen iletişime geçin, en kısa sürede çözüm sunalım."
          buttonText="WhatsApp'tan Yazın"
          buttonLink="https://wa.me/905521764553"
        />
      </main>
    </div>
  )
}
