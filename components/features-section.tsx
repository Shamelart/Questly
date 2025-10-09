import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Zap, Shield, Users, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Misiones Impulsadas por IA",
    description: "La inteligencia y conocimiento de 'Q' te ayudara en tus misiones diarias Nuestro algoritmo de inteligencia artificial analiza tus objetivos, hábitos y estado de ánimo para crear misiones diarias 100% personalizadas. ¿Quieres ser más productivo, saludable o aprender algo nuevo? Tu IA diseña el camino de misiones perfecto para ti. Olvídate de las listas genéricas o de marcar tareas en una app aburrida de productividad.",
  },
  {
    icon: Zap,
    title: "Gamificación Total",
    description: "Gana XP, Sube de Nivel y Colecciona Logros Completa misiones para ganar Puntos de Experiencia (XP) y subir de nivel. Desbloquea logros secretos y coleccionables por tus hazañas. Siente la satisfacción de ver tu progreso en una barra de experiencia y compite contigo mismo para batir tus récords.",
  },
  {
    icon: Shield,
    title: "Seguimiento y Recompensas",
    description: "Tu Resumen Semanal de Leyenda Como el 'Wrapped' de tu vida. Cada semana recibes un reporte épico con tus estadísticas: misiones completadas, niveles subidos y un análisis de tu productividad y bienestar. Motivación visual pura para que no pierdas el ritmo.",
  },
  {
    icon: Users,
    title: "Colaboración Real",
    description: "Trabaja en equipo sin fricciones con herramientas de comunicación y sincronización instantánea.",
  },
  {
    icon: Heart,
    title: "El Futuro es Ahora",
    description: "Questly está construido para evolucionar. Próximamente: integración con Blockchain. Creemos en que la privacidad de nuestros usuarios es un derecho, nuestro equipo esta evolucionando para proteger tus datos y tu privacidad. También recibiras coleccionables únicos por cada logro que consigas en tu vida, un reconocimiento de tu resiliencia en cada mision de tu vida. Con la capacidad de compartir tus logros con una comunidad global. Sé de los primeros en vivirlo.",
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-8 mt-3">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-white">
            Características que te <span className="text-gradient-questly">enamorarán</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
            Cada función de Questly ha sido diseñada pensando en tu éxito. Descubre cómo podemos transformar tu
            productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-700 bg-gray-800/90 backdrop-blur-sm hover:border-purple-500/50 py-1"
            >
              <CardContent className="pt-2">
                <div className="mb-4">
                  <div className="w-10 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 border border-purple-500/20">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
