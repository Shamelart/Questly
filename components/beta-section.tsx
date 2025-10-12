"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, CheckCircle, Sparkles, UserPlus } from "lucide-react"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

export function BetaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const playBetaJoinSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      
      // Create an epic gaming sound with multiple tones
      const createTone = (frequency: number, startTime: number, duration: number, volume: number) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + startTime)
        oscillator.type = 'sine'
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + startTime)
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + startTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + startTime + duration)
        
        oscillator.start(audioContext.currentTime + startTime)
        oscillator.stop(audioContext.currentTime + startTime + duration)
      }
      
      // Create an epic gaming chord progression
      createTone(523.25, 0, 0.6, 0.2)    // C5 - Power chord
      createTone(659.25, 0.1, 0.5, 0.15) // E5
      createTone(783.99, 0.2, 0.4, 0.1) // G5
      createTone(1046.5, 0.3, 0.3, 0.15) // C6 - Epic high note
      createTone(1318.5, 0.4, 0.2, 0.1)  // E6 - Final flourish
      
    } catch (error) {
      // Silently fail if audio context is not supported
      console.log('Audio not supported')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Play epic gaming sound when joining beta
    playBetaJoinSound()
    
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await recaptchaRef.current?.executeAsync()
      
      // EmailJS configuration
      const serviceId = 'service_m1o8xbo' // Your EmailJS service ID
      const templateId = 'template_gp159q9' // Your template ID
      const publicKey = '2SXLgSxFoZjE-vixJ' // Your public key
      
      // Send notification email to you
      await emailjs.send(
        serviceId,
        'template_notification', // New template for notifications
        {
          to_name: 'Questly Team',
          from_name: 'Beta Tester',
          from_email: email,
          message: `Nuevo registro para Beta de Questly!\n\nEmail: ${email}\n\nFecha: ${new Date().toLocaleString('es-ES')}`,
          reply_to: email,
          'g-recaptcha-response': recaptchaToken || ''
        },
        publicKey
      )

      // Send auto-reply to user
      await emailjs.send(
        serviceId,
        templateId, // Original template for auto-reply
        {
          to_name: 'Beta Tester',
          from_name: 'Questly Team',
          from_email: email,
          message: `¡Bienvenido a la aventura de Questly!\n\nTu email: ${email}\n\n¡Prepárate para transformar tu vida en un juego épico!`,
          reply_to: 'kastergames8@gmail.com',
          'g-recaptcha-response': recaptchaToken || ''
        },
        publicKey
      )
      
      setIsSubmitted(true)
      setIsLoading(false)
    } catch (error) {
      console.error('Error sending email:', error)
      setIsLoading(false)
      // Still show success to user even if email fails
      setIsSubmitted(true)
    }
  }

  return (
    <section id="beta" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden pt-20 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-float opacity-30" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-300 to-cyan-300 rounded-full animate-float-delayed opacity-25" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-float-slow opacity-30" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Beta Privada</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            Únete a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Aventura Épica</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up delay-300">
            Sé de los primeros en experimentar Questly. Acceso exclusivo a la beta privada donde tu vida se convierte en el juego definitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-8 animate-fade-in-up delay-400">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Acceso Exclusivo</h3>
                  <p className="text-white/70">Sé de los primeros en vivir la revolución de la gamificación personal.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Feedback Directo</h3>
                  <p className="text-white/70">Tu opinión moldea el futuro de Questly. Sé parte de la evolución.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ventajas Especiales</h3>
                  <p className="text-white/70">Beneficios exclusivos para los primeros aventureros de Questly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in-up delay-500">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl animate-pulse-glow">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">¡Únete a la Aventura!</h3>
                      <p className="text-white/70">Déjanos tu email y pronto recibirás la invitación a tu aventura épica.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>

                      {/* reCAPTCHA - Hidden but functional */}
                      <div style={{ display: 'none' }}>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6Ldn7eYrAAAAABvCKmmbN6dhZLKDaRfaMBMkL0gD"
                          size="invisible"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            ¡Unirme a la Beta!
                          </div>
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">¡Éxito!</h3>
                    <p className="text-white/70 mb-6">
                      Te has unido a la aventura épica. Te notificaremos cuando Questly esté listo para ti.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-300">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm font-medium">¡Bienvenido a la Beta!</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
