"use client"

import { useEffect } from "react"

export function ProjectEffects() {
  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const progressBar = document.getElementById('project-progress')
      if (progressBar) {
        const total = document.documentElement.scrollHeight - window.innerHeight
        const progress = (window.scrollY / total) * 100
        progressBar.style.width = progress + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Intersection observer for section reveals
    const sections = document.querySelectorAll('.bespoke-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })

    sections.forEach(s => observer.observe(s))

    // Stagger metric cards on entry
    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.bespoke-metric')
          cards.forEach((c: any, i) => {
            setTimeout(() => {
              c.style.opacity = '1'
              c.style.transform = 'translateY(0)'
            }, i * 80)
          })
          metricsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.bespoke-metrics').forEach(m => {
      m.querySelectorAll('.bespoke-metric').forEach((c: any) => {
        c.style.opacity = '0'
        c.style.transform = 'translateY(12px)'
        c.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      })
      metricsObserver.observe(m)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      metricsObserver.disconnect()
    }
  }, [])

  return null
}
