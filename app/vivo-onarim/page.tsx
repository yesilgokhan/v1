import { Phone, Clock, Shield, Star, CheckCircle, Wrench, Smartphone, Battery, Monitor } from "lucide-react"

export default function VivoOnarimPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Vivo Onarım Hizmetleri</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Vivo cihazlarınız için profesyonel onarım çözümleri. Orijinal parçalar, uzman teknisyenler ve hızlı servis
              garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905521764553"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                WhatsApp'tan Randevu Al
              </a>
              <a
                href="tel:+905521764553"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                Hemen Ara: +90 552 176 45 53
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Vivo Onarım Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Ekran Değişimi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kırık, çizik veya dokunmatik sorunu yaşayan Vivo ekranlarınızı orijinal kalitede parçalarla
                değiştiriyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  AMOLED/LCD ekranlar
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Dokunmatik onarımı
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />6 ay garanti
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Batarya Değişimi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Şarj tutmayan, hızla biten veya şişen Vivo bataryalarınızı orijinal kapasiteli bataryalarla
                değiştiriyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Orijinal kapasite
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Hızlı şarj desteği
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 yıl garanti
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Anakart Onarımı</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Açılmama, donma, yeniden başlatma gibi sorunları mikro lehimleme ile çözüyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mikro lehimleme
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Chip değişimi
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Veri kurtarma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Desteklenen Vivo Modelleri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "X90 Pro",
              "X80 Pro",
              "X70 Pro",
              "X60 Pro",
              "V27 Pro",
              "V25 Pro",
              "V23 Pro",
              "V21 Pro",
              "Y77",
              "Y55",
              "Y35",
              "Y33",
              "S16",
              "S15",
              "S12",
              "S10",
            ].map((model) => (
              <div key={model} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Onarım Sürecimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Teşhis</h3>
              <p className="text-gray-600 dark:text-gray-300">Cihazınızın detaylı incelemesi ve sorun tespiti</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fiyat Teklifi</h3>
              <p className="text-gray-600 dark:text-gray-300">Şeffaf fiyatlandırma ve onayınızı alma</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Onarım</h3>
              <p className="text-gray-600 dark:text-gray-300">Uzman teknisyenlerimiz tarafından profesyonel onarım</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Teslim</h3>
              <p className="text-gray-600 dark:text-gray-300">Test edilmiş cihazınızın garanti ile teslimi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Neden MasterCep?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Hızlı Servis</h3>
              <p className="text-gray-600 dark:text-gray-300">Çoğu onarım 1-2 saat içinde tamamlanır</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Garanti</h3>
              <p className="text-gray-600 dark:text-gray-300">Tüm onarımlarımızda 6 ay-1 yıl garanti</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Kaliteli Parçalar</h3>
              <p className="text-gray-600 dark:text-gray-300">Sadece orijinal ve A+ kalite parçalar kullanıyoruz</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">7/24 Destek</h3>
              <p className="text-gray-600 dark:text-gray-300">WhatsApp üzerinden sürekli iletişim</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vivo Cihazınızı Hemen Onaralım!</h2>
          <p className="text-xl mb-8 opacity-90">Uzman ekibimizle hızlı ve güvenilir onarım hizmeti alın</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905521764553"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              WhatsApp'tan Randevu Al
            </a>
            <a
              href="tel:+905521764553"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30"
            >
              Hemen Ara: +90 552 176 45 53
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
