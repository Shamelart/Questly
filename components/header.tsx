"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionIds = ['inicio', 'caracteristicas', 'beta', /*'contacto'*/]
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="/"
                className="cursor-pointer"
              >
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
                href="/#inicio"
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === 'inicio' 
                    ? 'text-purple-400 font-semibold bg-purple-500/20' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
                }`}
              >
                Inicio
              </a>
              <a
                href="/#beta"
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === 'beta'
                    ? 'text-purple-400 font-semibold bg-purple-500/20'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
                }`}
              >
                ¡Unirme a la Beta!
              </a>
              <a 
                href="/#caracteristicas"
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === 'caracteristicas' 
                    ? 'text-purple-400 font-semibold bg-purple-500/20' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
                }`}
              >
                Características Épicas
              </a>

            {/* <a 
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
            </a> */}
          </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                asChild
              >
                <a href="/#beta">Prueba la Beta</a>
              </Button>
            </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700/50">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="/#inicio"
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'inicio' 
                      ? 'bg-purple-500/20 text-purple-400 font-semibold border-l-4 border-purple-400' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-purple-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a 
                  href="/#beta"
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'beta' 
                      ? 'bg-purple-500/20 text-purple-400 font-semibold border-l-4 border-purple-400' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-purple-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¡Unirme a la Beta!
                </a>
                <a 
                  href="/#caracteristicas"
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'caracteristicas' 
                      ? 'bg-purple-500/20 text-purple-400 font-semibold border-l-4 border-purple-400' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-purple-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Características Épicas
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="justify-start text-gray-300 hover:text-purple-400 hover:bg-gray-800/50">
                    Iniciar Sesión
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white justify-start"
                    asChild
                  >
                    <a href="/#beta" onClick={() => setIsMenuOpen(false)}>Prueba la Beta</a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
      </div>
    </header>
  )
}
