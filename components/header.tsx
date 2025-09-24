"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              //width={160}
              //height={50}
              //className="h-12 w-auto"
              width={280}
              height={84}
              className="h-24 w-auto hover:scale-105 transition-transform duration-200"
            />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors">
              Características
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
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
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors">
                Características
              </a>
              <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
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
