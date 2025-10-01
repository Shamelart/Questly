"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionIds = ['inicio', 'caracteristicas', 'testimonios', 'beta', 'contacto']
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio" className="cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-z2htDsHnnqI9YXifXIYrNbjnegknNc.png"
              alt="Questly"
              width={320}
              height={96}
              className="h-28 w-auto hover:scale-105 transition-transform duration-200"
            />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === 'inicio' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-foreground hover:text-purple-500'
              }`}
            >
              Inicio
              {activeSection === 'inicio' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-questly rounded-full"></span>
              )}
            </a>
            <a 
              href="#caracteristicas" 
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === 'caracteristicas' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-foreground hover:text-purple-500'
              }`}
            >
              Características
              {activeSection === 'caracteristicas' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-questly rounded-full"></span>
              )}
            </a>
            <a 
              href="#testimonios" 
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === 'testimonios' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-foreground hover:text-purple-500'
              }`}
            >
              Testimonios
              {activeSection === 'testimonios' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-questly rounded-full"></span>
              )}
            </a>
            <a 
              href="#beta" 
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === 'beta' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-foreground hover:text-purple-500'
              }`}
            >
              Acceso Beta
              {activeSection === 'beta' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-questly rounded-full"></span>
              )}
            </a>
            <a 
              href="#contacto" 
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === 'contacto' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-foreground hover:text-purple-500'
              }`}
            >
              Contacto
              {activeSection === 'contacto' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-questly rounded-full"></span>
              )}
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-questly hover:opacity-90 text-white">Descargar App</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'inicio' 
                    ? 'bg-purple-50 text-purple-600 font-semibold border-l-4 border-purple-500' 
                    : 'text-foreground hover:bg-gray-50 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#caracteristicas" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'caracteristicas' 
                    ? 'bg-purple-50 text-purple-600 font-semibold border-l-4 border-purple-500' 
                    : 'text-foreground hover:bg-gray-50 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#testimonios" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'testimonios' 
                    ? 'bg-purple-50 text-purple-600 font-semibold border-l-4 border-purple-500' 
                    : 'text-foreground hover:bg-gray-50 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a 
                href="#beta" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'beta' 
                    ? 'bg-purple-50 text-purple-600 font-semibold border-l-4 border-purple-500' 
                    : 'text-foreground hover:bg-gray-50 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Acceso Beta
              </a>
              <a 
                href="#contacto" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'contacto' 
                    ? 'bg-purple-50 text-purple-600 font-semibold border-l-4 border-purple-500' 
                    : 'text-foreground hover:bg-gray-50 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-questly hover:opacity-90 text-white justify-start">Descargar App</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
