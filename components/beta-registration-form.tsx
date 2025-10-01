"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, Sparkles, Clock, Calendar } from "lucide-react"

export function BetaRegistrationForm() {
  const [formData, setFormData] = useState({
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [countdownStarted, setCountdownStarted] = useState(false)
  
  // Estado para la cuenta regresiva
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    if (countdownStarted) {
      const calculateTimeLeft = () => {
        const now = new Date()
        const targetDate = new Date(now)
        targetDate.setDate(now.getDate() + 7)
        
        const difference = targetDate.getTime() - now.getTime()
        
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          })
        }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)
      
      return () => clearInterval(timer)
    }
  }, [countdownStarted])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setCountdownStarted(true)
    
    // Aquí puedes agregar la lógica para enviar los datos a tu backend
    console.log("Datos del formulario:", formData)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur-sm border-gray-700">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <CheckCircle className="h-16 w-16 text-green-400 animate-bounce-slow" />
                <Sparkles className="h-6 w-6 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gradient-questly mb-2">
              ¡Registro Exitoso!
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 mb-6">
              Te has registrado exitosamente para el acceso beta de Questly. 
              Tu periodo de prueba de 7 días ha comenzado.
            </CardDescription>
            
            {/* Contador de cuenta regresiva activado */}
            {countdownStarted && (
              <div className="mb-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Tu Prueba Beta Activa</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Disfruta de 7 días completos para explorar Questly
                  </p>
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                  {/* Días */}
                  <div className="text-center">
                    <div className="bg-gradient-questly/20 border border-purple-500/30 rounded-xl p-3 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1 animate-pulse">
                        {timeLeft.days}
                      </div>
                      <div className="text-xs text-purple-300 font-medium">DÍAS</div>
                    </div>
                  </div>
                  
                  {/* Horas */}
                  <div className="text-center">
                    <div className="bg-gradient-questly/15 border border-purple-500/25 rounded-xl p-3 shadow-lg hover:shadow-purple-500/15 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-purple-300 font-medium">HORAS</div>
                    </div>
                  </div>
                  
                  {/* Minutos */}
                  <div className="text-center">
                    <div className="bg-gradient-questly/15 border border-purple-500/25 rounded-xl p-3 shadow-lg hover:shadow-purple-500/15 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-purple-300 font-medium">MIN</div>
                    </div>
                  </div>
                  
                  {/* Segundos */}
                  <div className="text-center">
                    <div className="bg-gradient-questly/15 border border-purple-500/25 rounded-xl p-3 shadow-lg hover:shadow-purple-500/15 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-purple-300 font-medium">SEG</div>
                    </div>
                  </div>
                </div>
                
                {/* Barra de progreso */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Tiempo restante</span>
                    <span>{Math.round((timeLeft.days / 7) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-questly h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${((7 - timeLeft.days) / 7) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-3">
              <div className="bg-gradient-questly/10 p-4 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-300 font-medium">
                  Email: {formData.email}
                </p>
                <p className="text-sm text-purple-300 font-medium mt-2">
                  Acceso activo hasta: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto relative">
      <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur-sm border-gray-700 animate-fade-in-up">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gradient-questly">
            Acceso Beta
          </CardTitle>
          <CardDescription className="text-lg text-gray-300">
            Únete a la lista de espera y sé de los primeros en probar Questly
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Información sobre la prueba beta */}
          <div className="mb-8 text-center">
            <div className="bg-gradient-questly/10 border border-purple-500/20 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">7 Días de Prueba Gratuita</span>
              </div>
              <p className="text-sm text-gray-300">
                Acceso completo a todas las funciones premium de Questly durante 7 días
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 transition-all duration-300 hover:shadow-lg"
                placeholder="tu@email.com"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-questly hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Procesando...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Unirme a la Beta
                </>
              )}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-gray-400">
                Al registrarte, aceptas recibir actualizaciones sobre Questly
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* Elementos decorativos animados */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400/40 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-20 right-12 w-6 h-6 bg-pink-400/30 rounded-full opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-16 w-3 h-3 bg-purple-500/50 rounded-full opacity-70 animate-bounce-slow"></div>
    </div>
  )
}