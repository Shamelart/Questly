"use client"

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[], threshold = 0.5) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, {
          threshold: threshold,
          rootMargin: '-20% 0px -20% 0px'
        })
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [sectionIds, threshold])

  return activeSection
}