import { Phone } from "lucide-react"

const FinalCTA = () => {
  return (
    <section className="py-20 bg-green-600 relative">
      <div className="container">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            İşletmeniz İçin En İyi Çözüm
          </h2>
          <p className="text-xl lg:text-2xl text-green-50 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Binlerce cep telefonu servis işletmesi gibi siz de MasterCep ile iş süreçlerinizi modernleştirin.
            <strong className="text-white"> Ücretsiz demo ve danışmanlık</strong> için hemen iletişime geçin.
          </p>
          <button className="btn-secondary group hover:scale-105 transition-all duration-300">
            <Phone className="w-5 h-5 mr-2" />
            Hemen Ara
            <span className="ml-2 opacity-90">+90 (552) 176 45 53</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
