import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    emoji: "🔮",
    title: "Q, tu oráculo personal",
    description: "Tu sabio consejero digital que te conoce mejor que nadie. Chatea con Q cuando necesites motivación, consejos para tus misiones o simplemente alguien que entienda tu jornada épica. Tu mentor personal siempre a tu lado.",
  },
  {
    emoji: "⚔️",
    title: "Misiones Épicas con Q",
    description: "Q conoce tus objetivos y te potencia creando misiones 100% personalizadas. ¿Quieres ser más productivo, saludable o aprender algo nuevo? Q diseña tu camino perfecto. Olvídate de listas genéricas.",
  },
  {
    emoji: "🏆",
    title: "Sube niveles en tu vida",
    description: "Gana XP, sube de nivel y desbloquea logros épicos. Completa misiones para ganar experiencia y coleccionar recompensas únicas. Siente la satisfacción de ver tu progreso en tiempo real.",
  },
  {
    emoji: "🌠",
    title: "Tu Resumen de Leyenda",
    description: "Tu reporte semanal épico con estadísticas de tus hazañas: misiones completadas, niveles subidos y análisis de tu evolución. Motivación visual pura para mantener el ritmo.",
  },
  {
    emoji: "🎮",
    title: "Coleccionables Únicos",
    description: "Desbloquea NFT coleccionables por cada logro en tu vida. Comparte tus hazañas con una comunidad global y sé reconocido por tu resiliencia en cada misión.",
  },
  {
    emoji: "🚀",
    title: "El Futuro es Ahora",
    description: "Questly evoluciona constantemente. Próximamente: integración con Blockchain y privacidad total. Sé de los primeros en vivir la revolución de la gamificación personal.",
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questly</span> convierte tu vida en un juego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Cada función convierte tu rutina en una aventura épica. Descubre cómo tu vida se transforma en el juego definitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-purple-500/10"
            >
              <CardContent className="p-8">
                 <div className="mb-6">
                   <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25 animate-pulse-glow">
                     <span className="text-3xl">{feature.emoji}</span>
                   </div>
                 </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
