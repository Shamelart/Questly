import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { DownloadSection } from "../components/download-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}