import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "MasterCep - Profesyonel Cep Telefonu Onarım Hizmetleri | Samsung iPhone Xiaomi Oppo Tamiri",
  description:
    "Samsung, iPhone, Xiaomi, Oppo, Realme, Huawei cep telefonu onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı. Hızlı, güvenilir ve profesyonel cep telefonu tamiri.",
  keywords:
    "samsung onarım, iphone onarım, xiaomi onarım, oppo onarım, realme onarım, huawei onarım, ekran değişimi, batarya değişimi, anakart onarımı, cep telefonu tamiri",
  authors: [{ name: "MasterCep" }],
  creator: "MasterCep",
  publisher: "MasterCep",
  robots: "index, follow",
  openGraph: {
    title: "MasterCep - Profesyonel Cep Telefonu Onarım Hizmetleri",
    description: "Samsung, iPhone, Xiaomi, Oppo ve tüm marka cep telefonları için profesyonel onarım hizmetleri.",
    url: "https://mastercep.com.tr",
    siteName: "MasterCep",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://mastercep.com.tr",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
