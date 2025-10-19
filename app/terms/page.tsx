import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones - Questly",
  description: "Lee los términos y condiciones de uso de Questly. Conoce tus derechos y responsabilidades como usuario de nuestra app de gamificación.",
  openGraph: {
    title: "Términos y Condiciones - Questly",
    description: "Lee los términos y condiciones de uso de Questly. Conoce tus derechos y responsabilidades como usuario de nuestra app de gamificación.",
    images: ['https://i.imgur.com/1Gn8lCu.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Términos y Condiciones - Questly",
    description: "Lee los términos y condiciones de uso de Questly. Conoce tus derechos y responsabilidades como usuario de nuestra app de gamificación.",
    images: ['https://i.imgur.com/1Gn8lCu.png'],
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-3xl">📜</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Términos y Condiciones</span>
              </h1>
              <p className="text-lg text-gray-600">
                Última actualización: 11 de octubre de 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* Acceptance of Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    Aceptación de Términos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Al usar Questly, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo 
                    con alguno de estos términos, no uses la aplicación.
                  </p>
                </section>

                {/* Service Description */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎮</span>
                    Descripción del Servicio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Questly es una aplicación móvil que ofrece herramientas de gamificación potenciadas por IA para 
                    ayudar a las personas a transformar sus vidas en un juego épico. El acceso a ciertas características 
                    requiere el uso de créditos o una membresía premium.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Definiciones:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>App:</strong> Questly y sus servicios asociados.</li>
                      <li><strong>Usuario:</strong> Persona que usa la App.</li>
                      <li><strong>Contenido:</strong> Misiones, objetivos y material creado en la App.</li>
                      <li><strong>Servicios:</strong> Funcionalidades proporcionadas por la App.</li>
                      <li><strong>IA:</strong> Inteligencia artificial utilizada para sugerencias y análisis.</li>
                    </ul>
                  </div>
                </section>

                {/* Registration and Account */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    Registro y Cuenta
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para usar Questly necesitas:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔐</span>
                      <div>Iniciar sesión con tu cuenta de Google.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔒</span>
                      <div>Mantener la confidencialidad de tu acceso.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🚨</span>
                      <div>Reportar cualquier uso no autorizado.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">👶</span>
                      <div>Tener 13 años o más o tener consentimiento parental.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🚫</span>
                      <div>No crear múltiples cuentas sin autorización.</div>
                    </li>
                  </ul>
                </section>

                {/* Acceptable Use */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    Uso Aceptable
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Como usuario, aceptas:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🚫</span>
                      <div>No usar la app para contenido ofensivo o ilegal.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">💎</span>
                      <div>No manipular el sistema de créditos o suscripción.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔐</span>
                      <div>No intentar acceso no autorizado a áreas restringidas.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">⚖️</span>
                      <div>Respetar los derechos de propiedad intelectual.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🛡️</span>
                      <div>No compartir contenido que infrinja derechos de terceros.</div>
                    </li>
                  </ul>
                </section>

                {/* Credits and Premium Membership */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">💎</span>
                    Créditos y Membresía Premium
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Questly utiliza un sistema de créditos para acceder a características premium:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">💳</span>
                      <div>Puedes comprar paquetes de créditos o activar una suscripción mensual.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔄</span>
                      <div>Los créditos no son reembolsables y solo se pueden usar dentro de la app.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🔄</span>
                      <div>La suscripción se renueva automáticamente a menos que se cancele.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">❌</span>
                      <div>No hay reembolsos por períodos no utilizados.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">💰</span>
                      <div>Los precios pueden cambiar y se mostrarán en la app.</div>
                    </li>
                  </ul>
                </section>

                {/* Advertising */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📺</span>
                    Publicidad
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La versión gratuita de la app muestra anuncios a través de Google AdMob. También se ofrecen 
                    anuncios recompensados como opción para ganar créditos adicionales.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🎯</span>
                      <div>Los anuncios están personalizados basados en el uso de la app.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🎁</span>
                      <div>Puedes optar por ver anuncios recompensados para ganar créditos.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">👑</span>
                      <div>La versión premium elimina los anuncios.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📋</span>
                      <div>Los anuncios cumplen con las políticas de Google AdMob.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">⚙️</span>
                      <div>Puedes gestionar tus preferencias de publicidad.</div>
                    </li>
                  </ul>
                </section>

                {/* Data Ownership */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    Propiedad de tus Datos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Los datos que creas o subes son tuyos. Los datos generados por IA a partir de tus entradas 
                    se consideran co-creados y puedes usarlos libremente, pero Questly no garantiza exclusividad. 
                    Nos autorizas a usar datos agregados y anónimos para mejorar el servicio.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-lg">👤</span>
                      <div>Eres dueño de tus datos originales.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">🤖</span>
                      <div>Los datos generados por IA son libres de usar.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">⚠️</span>
                      <div>No garantizamos exclusividad sobre las sugerencias de IA.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">📊</span>
                      <div>Podemos usar datos anónimos para mejorar el servicio.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg">⚖️</span>
                      <div>Respetamos tus derechos de propiedad intelectual.</div>
                    </li>
                  </ul>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📝</span>
                    Cambios a los Términos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos 
                    por email, notificación de la app, o a través de un aviso en nuestro sitio web. El uso continuado 
                    de la aplicación después de los cambios constituye tu aceptación de los términos actualizados.
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
                      Para preguntas sobre estos Términos:
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
