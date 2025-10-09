import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
//import { TestimonialsSection } from "../components/testimonials-section"
import { BetaRegistrationForm } from "../components/beta-registration-form"
import { DownloadSection } from "../components/download-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      
      {/* Beta Registration Section */}
      {/* <section id="beta" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Sé Parte de la <span className="text-gradient-questly">Revolución</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Únete a nuestra lista de acceso beta y sé uno de los primeros en experimentar 
              las increíbles características de Questly antes del lanzamiento oficial.
            </p>
          </div>
          {/* <BetaRegistrationForm /> 
        </div>
        
         Background decorative elements 
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-bounce-slow"></div>
      </section> */}
      
      {/*<DownloadSection />*/}
      <Footer />
    </main>
  )
}