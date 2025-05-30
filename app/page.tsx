import Hero from "@/components/Hero"
import RepairServices from "@/components/RepairServices"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RepairServices />
      <Features />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
