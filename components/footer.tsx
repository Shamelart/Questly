"use client"

import { Heart, Instagram, Mail, Smartphone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 border-t border-purple-500/20 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="container px-4 py-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left max-w-7xl">
              {/* Brand */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse-glow">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Questly</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  "Transformando rutinas en aventuras épicas desde el día uno. ¡Tu vida, tu juego, tu leyenda!"
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-lg">⚡</span>
                  <span>Powered by AI & Gamification</span>
                </div>
              </div>

              {/* Enlaces Rápidos */}
              <div className="space-y-6">
                <h4 className="font-bold text-white text-lg flex items-center gap-2">
                  <span className="text-xl">⚔️</span>
                  Enlaces Rápidos
                </h4>
                <ul className="space-y-3 text-base">
                  <li>
                    <button 
                      onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>🏠</span>
                      <span>Inicio</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>🔮</span>
                      <span>¡Unirme a la Beta!</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>⚔️</span>
                      <span>Características Épicas</span>
                    </button>
                  </li>
                  <li>
                    <a 
                      href="/privacy"
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>📋</span>
                      <span>Política de Privacidad</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/terms"
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>📜</span>
                      <span>Términos y Condiciones</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* El Futuro */}
              <div className="space-y-6">
                <h4 className="font-bold text-white text-lg flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  El Futuro
                </h4>
                <ul className="space-y-3 text-base">
                  <li className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">👥 Modo Social</li>
                  <li className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">⌚ Integración con Wearables</li>
                  <li className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">🎯 Packs de Misiones Temáticos</li>
                  <li className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">🔗 Privacidad en Blockchain</li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="space-y-6">
                <h4 className="font-bold text-white text-lg flex items-center gap-2">
                  <span className="text-xl">💬</span>
                  Contacto
                </h4>
                <div className="space-y-3 text-base">
                  <a 
                    href="https://instagram.com/questly.world" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@questly.world</span>
                  </a>
                  <a 
                    href="mailto:contact@questly.fun"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <Mail className="h-5 w-5" />
                    <span>contact@questly.fun</span>
                  </a>
                  <a 
                    href="https://tiktok.com/@questly.world" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>@questly.world</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-500/20 mt-16 pt-8 flex flex-col items-center justify-center text-center space-y-4">
            <p className="text-base text-gray-400">
              © 2025 Questly. Todos los derechos reservados. ¡Play your Life! 🎮
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>🔒 Privacidad Total</span>
              <span>•</span>
              <span>🚀 Innovación Constante</span>
              <span>•</span>
              <span>🎯 Gamificación Épica</span>
            </div>
          </div>
      </div>
    </footer>
  )
}
