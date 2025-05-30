import Link from "next/link"
import { Smartphone, Tablet, Laptop } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Profesyonel Cihaz Onarım Merkezi
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Cep telefonları, tabletler ve bilgisayarlar için profesyonel onarım hizmetleri. Her cihaz türü için uzman
          çözümler ve orijinal kalitede parçalar kullanıyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cep Telefonu Onarımı</h3>
            <p className="text-gray-600 dark:text-gray-400">Tüm marka ve modellerde ekran, batarya, anakart onarımı</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Tablet className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tablet Onarımı</h3>
            <p className="text-gray-600 dark:text-gray-400">iPad ve Android tablet onarım hizmetleri</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Laptop className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bilgisayar Onarımı</h3>
            <p className="text-gray-600 dark:text-gray-400">MacBook, laptop ve masaüstü bilgisayar onarımı</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/905521764553"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            WhatsApp'tan Randevu Al
          </Link>
          <Link
            href="tel:+905521764553"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Hemen Ara: +90 552 176 45 53
          </Link>
        </div>
      </div>
    </section>
  )
}
