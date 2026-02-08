import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const [clientCount, setClientCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const badgeRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const currentRef = badgeRef.current
    if (!currentRef || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const target = 75
            const duration = 2000
            const steps = target
            const stepDuration = duration / steps
            let current = 0

            const timer = setInterval(() => {
              current += 1
              if (current >= target) {
                setClientCount(target)
                clearInterval(timer)
                if (timerRef.current) {
                  timerRef.current = null
                }
              } else {
                setClientCount(current)
              }
            }, stepDuration)

            timerRef.current = timer
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [hasAnimated])

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-main">
            <h1 className="hero-title">JGroup Entreprise</h1>
            <p className="hero-subtitle">
            Nous accompagnons les entreprises, les institutions et les particuliers dans la gestion de leurs ressources critiques.
            Grâce à notre plateforme, vous centralisez vos commandes, suivez vos opérations et contrôlez vos coûts, en toute transparence.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn-commander">Commencer</a>
            </div>
          </div>
          <div className="hero-images-grid">
            <div className="hero-image-item hero-image-item-construction">
              <img src="/assets_images/WhatsApp Image 2026-01-30 at 17.36.52.jpeg" alt="Construction" />
            </div>
            <div className="hero-image-item hero-image-item-entrepot">
              <img src="/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif" alt="Entrepôt" />
            </div>
            <div className="hero-image-item hero-stats">
              <div className="hero-stat-main">
                <div className="stat-number">10</div>
                <div className="stat-text">Départements du pays</div>
              </div>
        
            </div>
            <div className="hero-image-item hero-image-item-transport">
              <img src="/assets_images/pngtree-rear-and-side-view-of-tanker-truck-vehicle-image_15661785.jpg" alt="Transport" />
            </div>
          </div>
        </div>
     
        </div>
  
    </section>
  )
}

export default Hero
