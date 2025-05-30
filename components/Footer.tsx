import { Mail, MapPin, Phone, Wrench } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MasterCep</h3>
                <p className="text-sm text-gray-400">Cep Telefonu Onarım Uzmanı</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              İzmir'in en güvenilir cep telefonu onarım merkezi. Uzman ekibimizle Samsung, iPhone, Xiaomi, Oppo ve tüm
              marka cep telefonlarında kaliteli hizmet sunuyoruz.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">İletişim</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a
                  href="tel:+905521764553"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  +90 552 176 45 53
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:info@mastercep.com.tr"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  info@mastercep.com.tr
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/905521764553"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp'tan Yaz
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Hızlı Erişim</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 block">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 block">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 block">
                  Fiyat Listesi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 block">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white">Sosyal Medya</h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://g.co/kgs/mastercep"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/30"
                title="Google Maps"
              >
                <MapPin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/mastercep.repair"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-400/30"
                title="Instagram"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@mastercep"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-red-500 to-red-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-red-400/30"
                title="YouTube"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mastercep.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/30"
                title="Facebook"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@mastercep.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-black p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/30"
                title="TikTok"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 py-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 MasterCep. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
