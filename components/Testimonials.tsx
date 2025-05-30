"use client"

import type React from "react"

import { Star, CheckCircle, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    device: "",
    service: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    console.log("Review submitted:", reviewForm)
    alert("Değerlendirmeniz için teşekkür ederiz! İncelendikten sonra yayınlanacaktır.")
    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      device: "",
      service: "",
      comment: "",
    })
  }

  const stats = [
    { label: "Ortalama Değerlendirme", value: "4.9/5", icon: Star },
    { label: "Toplam Değerlendirme", value: "2,847+", icon: CheckCircle },
    { label: "Tekrar Müşteri Oranı", value: "%94", icon: CheckCircle },
  ]

  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Müşteri Deneyimleri</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Müşterilerimiz{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Binlerce müşterimizin deneyimleri ve değerlendirmeleri ile güvenilir hizmet kalitemizi keşfedin.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Deneyiminizi Paylaşın</h3>
              <p className="text-slate-600">
                Hizmetimizden memnun kaldıysanız, deneyiminizi diğer müşterilerimizle paylaşın.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-posta Adresiniz *</label>
                  <input
                    type="email"
                    required
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cihazınız</label>
                  <input
                    type="text"
                    value={reviewForm.device}
                    onChange={(e) => setReviewForm({ ...reviewForm, device: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Örn: iPhone 14 Pro, Samsung Galaxy S23"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Aldığınız Hizmet</label>
                  <select
                    value={reviewForm.service}
                    onChange={(e) => setReviewForm({ ...reviewForm, service: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Hizmet seçin</option>
                    <option value="Ekran Değişimi">Ekran Değişimi</option>
                    <option value="Batarya Değişimi">Batarya Değişimi</option>
                    <option value="Anakart Onarımı">Anakart Onarımı</option>
                    <option value="Su Hasarı Onarımı">Su Hasarı Onarımı</option>
                    <option value="Kamera Değişimi">Kamera Değişimi</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Değerlendirmeniz *</label>
                <div className="flex items-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className={`text-2xl ${
                        star <= reviewForm.rating ? "text-yellow-400" : "text-slate-300"
                      } hover:text-yellow-400 transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-sm text-slate-600 ml-2">({reviewForm.rating}/5 yıldız)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Yorumunuz *</label>
                <textarea
                  required
                  rows={4}
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Deneyiminizi detaylı olarak paylaşın..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Değerlendirme Gönder</span>
                </button>
                <p className="text-sm text-slate-500 mt-3">Değerlendirmeniz incelendikten sonra yayınlanacaktır.</p>
              </div>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Gerçek Müşteri Yorumları</h3>
            <p className="text-slate-600">
              Tüm değerlendirmeler gerçek müşterilerimiz tarafından yazılmıştır. Sahte yorumlara izin vermiyoruz ve her
              değerlendirmeyi dikkatli bir şekilde inceliyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
