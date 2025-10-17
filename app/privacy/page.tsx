import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad - Questly",
  description: "Conoce cómo Questly protege tu privacidad y maneja tus datos personales. Política de privacidad transparente y segura.",
  openGraph: {
    title: "Política de Privacidad - Questly",
    description: "Conoce cómo Questly protege tu privacidad y maneja tus datos personales. Política de privacidad transparente y segura.",
    images: ['https://questly.app/image_seo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Política de Privacidad - Questly",
    description: "Conoce cómo Questly protege tu privacidad y maneja tus datos personales. Política de privacidad transparente y segura.",
    images: ['https://questly.app/image_seo.png'],
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-3xl">🔒</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Política de Privacidad</span>
              </h1>
              <p className="text-lg text-gray-600">
                Última actualización: 11 de octubre de 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Introducción
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Questly valora tu privacidad. Esta Política de Privacidad explica qué datos recopilamos, 
                    cómo los utilizamos y cómo protegemos tu información mientras usas nuestra aplicación de 
                    gamificación de vida potenciada por IA.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    Información que Recopilamos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recopilamos varios tipos de información:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">👤</span>
                      <div>
                        <strong>Información de Cuenta:</strong> Autenticación de Google (OAuth), ID de usuario, 
                        nombre y email.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🎮</span>
                      <div>
                        <strong>Contenido del Usuario:</strong> Misiones completadas, objetivos personales, 
                        preferencias de gamificación y progreso.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📈</span>
                      <div>
                        <strong>Datos de Uso:</strong> Interacciones con Q (IA), tiempo de pantalla, 
                        funciones utilizadas y patrones de comportamiento.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">💎</span>
                      <div>
                        <strong>Datos de Gamificación:</strong> XP ganado, niveles alcanzados, 
                        logros desbloqueados y recompensas obtenidas.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📱</span>
                      <div>
                        <strong>Información del Dispositivo:</strong> Tipo de dispositivo, sistema operativo 
                        y versión de la aplicación.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    Cómo Utilizamos tu Información
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizamos tus datos para:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🤖</span>
                      <div>Proporcionar herramientas de gamificación potenciadas por IA y características personalizadas.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🎯</span>
                      <div>Personalizar recomendaciones basadas en tus objetivos y comportamiento.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🚀</span>
                      <div>Mejorar continuamente la experiencia del usuario y la efectividad de Q.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🛠️</span>
                      <div>Manejar soporte técnico y consultas sobre tu progreso.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🏆</span>
                      <div>Gestionar recompensas, logros y sistemas de gamificación.</div>
                    </li>
                  </ul>
                </section>

                {/* Sharing with Third Parties */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🤝</span>
                    Compartir con Terceros
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Solo compartimos información con proveedores que nos ayudan a operar y mejorar la aplicación:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔐</span>
                      <div><strong>Google:</strong> Autenticación, almacenamiento y análisis.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🧠</span>
                      <div><strong>OpenAI:</strong> Procesamiento de texto de IA para Q.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📊</span>
                      <div><strong>Google Analytics:</strong> Análisis de uso y mejoras de producto.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">💳</span>
                      <div><strong>Google Play/App Store:</strong> Procesamiento de pagos y suscripciones.</div>
                    </li>
                  </ul>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🛡️</span>
                    Seguridad de Datos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Implementamos medidas de seguridad robustas:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔒</span>
                      <div>Cifrado HTTPS para toda la comunicación.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔐</span>
                      <div>Seguridad de datos en reposo con controles de acceso.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">👁️</span>
                      <div>Acceso restringido a información sensible.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📡</span>
                      <div>Monitoreo continuo de seguridad.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔄</span>
                      <div>Actualizaciones regulares de seguridad.</div>
                    </li>
                  </ul>
                </section>

                {/* User Control */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎮</span>
                    Control del Usuario
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tienes control sobre tu información:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🗑️</span>
                      <div>Puedes eliminar tu cuenta y datos desde la aplicación o por email.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📝</span>
                      <div>Puedes eliminar misiones y contenido específico en cualquier momento.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">⚙️</span>
                      <div>Puedes gestionar tus preferencias de privacidad.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📤</span>
                      <div>Puedes exportar tus datos cuando lo desees.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📧</span>
                      <div>Puedes optar por no recibir comunicaciones promocionales.</div>
                    </li>
                  </ul>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">⏰</span>
                    Retención de Datos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Mantenemos tu información mientras tu cuenta esté activa. Para cuentas inactivas por más de 24 meses, 
                    te notificaremos antes de eliminar los datos. El contenido generado por IA se procesa temporalmente 
                    y se descarta después de generar resultados.
                  </p>
                </section>

                {/* Minors */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">👶</span>
                    Menores de Edad
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Questly no está destinado para usuarios menores de 13 años. Si detectamos el uso por parte de un menor, 
                    eliminaremos la cuenta y los datos asociados.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📝</span>
                    Cambios a esta Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Te notificaremos de cambios significativos a través de la aplicación, email o nuestro sitio web. 
                    El uso continuado de la aplicación después de los cambios constituye tu aceptación de la política actualizada.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    Contacto
                  </h2>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ¿Preguntas sobre privacidad o tus derechos?
                    </p>
                    <div className="flex items-center gap-3 text-purple-600 font-semibold">
                      <span className="text-xl">📧</span>
                      <span>contact@questly.fun</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
