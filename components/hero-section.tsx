"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [completedMissions, setCompletedMissions] = useState<number[]>([])
  const [currentXP, setCurrentXP] = useState(880)
  const [currentLevel, setCurrentLevel] = useState(88)
  const [showParticles, setShowParticles] = useState(false)
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [missions, setMissions] = useState([
    { id: 1, name: "Commit diario", xp: 100, icon: "⚡", color: "blue" },
    { id: 2, name: "Stream 2h", xp: 150, icon: "🎮", color: "purple" },
    { id: 3, name: "Ejercicio 45min", xp: 75, icon: "🎯", color: "orange" },
    { id: 4, name: "Aprender AI/ML", xp: 200, icon: "💻", color: "cyan" }
  ])

  const allMissions = [
    { id: 1, name: "Commit diario", xp: 100, icon: "⚡", color: "blue" },
    { id: 2, name: "Stream 2h", xp: 150, icon: "🎮", color: "purple" },
    { id: 3, name: "Ejercicio 45min", xp: 75, icon: "🎯", color: "orange" },
    { id: 4, name: "Aprender AI/ML", xp: 200, icon: "💻", color: "cyan" },
    { id: 5, name: "Code Review", xp: 120, icon: "🔍", color: "green" },
    { id: 6, name: "Gaming 3h", xp: 180, icon: "🎮", color: "red" },
    { id: 7, name: "Meditar 20min", xp: 60, icon: "🧘", color: "yellow" },
    { id: 8, name: "Leer documentación", xp: 80, icon: "📚", color: "pink" },
    { id: 9, name: "Refactorizar código", xp: 140, icon: "🔧", color: "blue" },
    { id: 10, name: "Tutorial online", xp: 90, icon: "🎓", color: "purple" },
    { id: 11, name: "Caminar 30min", xp: 50, icon: "🚶", color: "green" },
    { id: 12, name: "Debugging", xp: 110, icon: "🐛", color: "red" }
  ]

    const playMissionCompleteSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        // Create a pleasant "ding" sound
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        // Set frequency for a pleasant chime (C5 note)
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(659.25, audioContext.currentTime + 0.1)
        
        // Set volume envelope
        gainNode.gain.setValueAtTime(0, audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
        
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.3)
      } catch (error) {
        // Silently fail if audio context is not supported
        console.log('Audio not supported')
      }
    }

    const playLevelUpSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        // Create an epic level up sound with multiple tones
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
        
        // Create a triumphant chord progression
        createTone(523.25, 0, 0.8, 0.2)    // C5
        createTone(659.25, 0.1, 0.7, 0.15) // E5
        createTone(783.99, 0.2, 0.6, 0.1)  // G5
        createTone(1046.5, 0.3, 0.5, 0.15) // C6 (high note for triumph)
        
      } catch (error) {
        // Silently fail if audio context is not supported
        console.log('Audio not supported')
      }
    }

    const handleMissionClick = (missionId: number, xp: number) => {
      if (!completedMissions.includes(missionId)) {
        // Play completion sound
        playMissionCompleteSound()
        
        setCompletedMissions([...completedMissions, missionId])
        const newXP = currentXP + xp
        setCurrentXP(newXP)
        
        // Trigger particles effect
        setShowParticles(true)
        setTimeout(() => setShowParticles(false), 2000)
        
        // Level up logic - reduced XP requirement for more frequent level ups
        const xpNeededForNextLevel = 1000 // Reduced from 10000 to 1000
        if (newXP >= xpNeededForNextLevel) {
          setCurrentLevel(currentLevel + 1)
          setCurrentXP(newXP - xpNeededForNextLevel)
          
          // Play level up sound
          playLevelUpSound()
          
          // Trigger level up animation
          setShowLevelUp(true)
          setTimeout(() => setShowLevelUp(false), 3000)
        }
        
        // Regenerate mission after 2 seconds
        setTimeout(() => {
          setCompletedMissions(prev => prev.filter(id => id !== missionId))
          // Get 4 random missions from the pool
          const shuffled = [...allMissions].sort(() => Math.random() - 0.5)
          setMissions(shuffled.slice(0, 4))
        }, 2000)
      }
    }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Floating Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile floating elements */}
        <div className="absolute top-16 left-4 w-3 h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-float opacity-30 shadow-sm shadow-purple-300/20 md:hidden" />
        <div className="absolute top-32 right-6 w-4 h-4 bg-gradient-to-r from-pink-300 to-cyan-300 rounded-full animate-float-delayed opacity-25 shadow-sm shadow-pink-300/20 md:hidden" />
        <div className="absolute bottom-24 left-6 w-2 h-2 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-float-slow opacity-30 shadow-sm shadow-cyan-300/20 md:hidden" />
        
        {/* Desktop floating elements */}
        <div className="hidden md:block absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-float opacity-30 shadow-sm shadow-purple-300/20" />
        <div className="hidden md:block absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-300 to-cyan-300 rounded-full animate-float-delayed opacity-25 shadow-sm shadow-pink-300/20" />
        <div className="hidden md:block absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-float-slow opacity-30 shadow-sm shadow-cyan-300/20" />
        <div className="hidden md:block absolute bottom-20 right-10 w-5 h-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-float opacity-25 shadow-sm shadow-purple-200/20" />

        {/* Geometric shapes - Desktop only */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-32 h-20 border-2 border-cyan-200/30 bg-cyan-200/3 rounded-lg animate-pulse-slow opacity-40 shadow-sm shadow-cyan-200/15" />
        <div className="hidden lg:block absolute top-1/3 right-1/3 w-24 h-16 border-2 border-purple-200/30 bg-purple-200/3 rounded-lg animate-pulse-slow delay-500 opacity-40 shadow-sm shadow-purple-200/15" />
        <div className="hidden lg:block absolute bottom-1/3 left-1/2 w-28 h-18 border-2 border-pink-200/30 bg-pink-200/3 rounded-lg animate-pulse-slow delay-1000 opacity-40 shadow-sm shadow-pink-200/15" />
                </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up text-white">
              La vida no era un juego <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">¡Hasta ahora!</span> <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">👾</span>
                </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed animate-fade-in-up delay-200">
                ¿Aburrido de tu rutina diaria? Questly convierte tus tareas en aventuras épicas con IA. 
                ¡Completa misiones, sube de nivel y domina tu vida como un verdadero héroe!
                </p>

                {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6 animate-fade-in-up delay-300">
                  <Button
                    size="lg"
                  className="group text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
                      onClick={() => document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                      Unirme a la Beta en Google Play
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                      onClick={() => document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                      Cómo Funciona
                  </Button>
                </div>
              </div>

          {/* Right Column - Visual */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full h-80 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"></div>
              
              {/* Level Up Animation */}
              {showLevelUp && (
                <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl shadow-2xl animate-level-up-pop animate-level-up-glow text-center">
                    <div className="text-4xl mb-2 animate-bounce">🏆</div>
                    <div className="text-2xl font-bold">¡LEVEL UP!</div>
                    <div className="text-lg">Nivel {currentLevel}</div>
                  </div>
                </div>
              )}

              {/* Particles Effect */}
              {showParticles && (
                <div className="absolute inset-0 pointer-events-none z-20">
                  {/* Confetti particles */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={`confetti-${i}`}
                      className="absolute animate-confetti"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: '-10%',
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${1.5 + Math.random() * 1}s`
                      }}
                    >
                      <div className="text-2xl opacity-90">
                        {['🎉', '✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 5)]}
                  </div>
                  </div>
                  ))}
                  
                  {/* Star burst effect */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`star-${i}`}
                      className="absolute animate-star-burst"
                      style={{
                        left: `${30 + Math.random() * 40}%`,
                        top: `${30 + Math.random() * 40}%`,
                        animationDelay: `${0.2 + Math.random() * 0.3}s`,
                        animationDuration: `${1 + Math.random() * 0.5}s`
                      }}
                    >
                      <div className="text-3xl opacity-80">
                        {['✨', '⭐', '🌟'][Math.floor(Math.random() * 3)]}
                  </div>
                </div>
                  ))}
                </div>
              )}

              {/* Mission Simulation Animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 overflow-y-auto">
                {/* User Avatar */}
                <div className="relative mb-2 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl animate-bounce-slow">
                    🧙‍♂️
              </div>
                  {/* Level Badge */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-500 text-black text-xs font-bold px-1 py-0.5 sm:px-2 sm:py-1 rounded-full animate-pulse">
                    LVL {currentLevel}
        </div>
      </div>

                {/* User Info */}
                <div className="text-center mb-2 sm:mb-3">
                  <div className="text-xs sm:text-sm font-bold text-white">Mago del Código</div>
                  <div className="text-xs text-gray-300">Full Stack Developer</div>
                </div>

                {/* XP Bar */}
                <div className="w-24 sm:w-32 md:w-40 bg-gray-700/50 rounded-full h-1.5 sm:h-2 mb-2 sm:mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full animate-pulse" style={{width: `${(currentXP / 1000) * 100}%`}}></div>
                </div>
                <div className="text-xs text-gray-400 mb-2 sm:mb-4">{currentXP.toLocaleString()} / 1,000 XP</div>

                {/* Mission Cards */}
                <div className="space-y-1 sm:space-y-2 w-full max-w-xs px-1">
                  {missions.map((mission, index) => {
                    const isCompleted = completedMissions.includes(mission.id)
                    const isFirstMission = index === 0
                    const colorClasses = {
                      blue: 'bg-blue-500/20 border-blue-400/30',
                      purple: 'bg-purple-500/20 border-purple-400/30',
                      orange: 'bg-orange-500/20 border-orange-400/30',
                      cyan: 'bg-cyan-500/20 border-cyan-400/30',
                      green: 'bg-green-500/20 border-green-400/30',
                      red: 'bg-red-500/20 border-red-400/30',
                      yellow: 'bg-yellow-500/20 border-yellow-400/30',
                      pink: 'bg-pink-500/20 border-pink-400/30'
                    }
                    const textColors = {
                      blue: 'text-blue-400',
                      purple: 'text-purple-400',
                      orange: 'text-orange-400',
                      cyan: 'text-cyan-400',
                      green: 'text-green-400',
                      red: 'text-red-400',
                      yellow: 'text-yellow-400',
                      pink: 'text-pink-400'
                    }
                    
                    return (
                      <div 
                        key={mission.id}
                        className={`${isCompleted ? 'bg-green-500/20 border-green-400/30' : colorClasses[mission.color as keyof typeof colorClasses]} border rounded-lg p-1.5 sm:p-2 flex items-center justify-between animate-fade-in-up cursor-pointer hover:scale-105 transition-all duration-300 ${isFirstMission && !isCompleted ? 'animate-pulse' : ''}`}
                        style={{ animationDelay: `${500 + index * 200}ms` }}
                        onClick={() => handleMissionClick(mission.id, mission.xp)}
                      >
                        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
                          <span className="text-sm sm:text-lg flex-shrink-0">{isCompleted ? '✅' : mission.icon}</span>
                          <span className="text-xs text-white truncate">{mission.name}</span>
                        </div>
                        <span className={`text-xs font-bold flex-shrink-0 ml-2 ${isCompleted ? 'text-green-400' : textColors[mission.color as keyof typeof textColors]}`}>
                          {isCompleted ? `+${mission.xp} XP` : 'Completar misión'}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Rewards - Tech themed */}
                <div className="absolute top-4 left-4 animate-float">
                  <div className="text-2xl">🏆</div>
                </div>
                <div className="absolute top-4 right-4 animate-float-delayed">
                  <div className="text-2xl">💻</div>
                </div>
                <div className="absolute bottom-4 left-4 animate-float-slow">
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="absolute bottom-4 right-4 animate-float">
                  <div className="text-2xl">🚀</div>
                </div>
                <div className="absolute top-1/2 left-2 animate-float-delayed">
                  <div className="text-xl">🎮</div>
                </div>
                <div className="absolute top-1/2 right-2 animate-float">
                  <div className="text-xl">🔥</div>
                </div>
              </div>
          </div>
        </div>
      </div>

      </div>

      {/* Decorative elements - Desktop only */}
      <div className="hidden xl:block absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float opacity-60"></div>
      <div className="hidden xl:block absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full animate-float-delayed opacity-40"></div>
    </section>
  )
}
