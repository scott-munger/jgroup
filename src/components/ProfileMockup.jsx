import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ProfileMockup.css'
import '../pages/Profile.css'

function ProfileMockup() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statRef = useRef(null)
  const timerRef = useRef(null)
  const barcodeRef = useRef(null)

  useEffect(() => {
    const currentRef = statRef.current
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
                setCount(target)
                clearInterval(timer)
                if (timerRef.current) {
                  timerRef.current = null
                }
              } else {
                setCount(current)
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

  useEffect(() => {
    if (barcodeRef.current) {
      import('jsbarcode').then((module) => {
        const JsBarcode = module.default || module
        // Using CODE128 format which accepts any string
        const cardNumber = 'JGROUP123456'
        try {
          JsBarcode(barcodeRef.current, cardNumber, {
            format: 'CODE128',
            width: 2.5,
            height: 40,
            displayValue: false,
            background: 'transparent',
            lineColor: '#ffffff',
            margin: 0
          })
        } catch (error) {
          console.error('Error generating barcode:', error)
        }
      }).catch((error) => {
        console.error('Error loading jsbarcode:', error)
      })
    }
  }, [])

  return (
    <section className="profile-mockup">
      <div className="profile-mockup-container">
        <h2 className="profile-mockup-title">Un compte simple, des avantages concrets</h2>
        
        <div className="profile-mockup-stats">
          <div className="stat-item" ref={statRef}>
            <div className="stat-number">{count}K+</div>
            <div className="stat-label">Clients satisfaits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25%</div>
            <div className="stat-label">Réduction dès l'inscription</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10</div>
            <div className="stat-label">Départements couverts</div>
          </div>
        </div>
        
        <div className="profile-mockup-content">
          <div className="feature-cards">
            <div className="gold-card">
              <div className="gold-card-top">
                <span className="gold-card-label">Gold card</span>
                <span className="gold-card-brand">JGroup</span>
              </div>
              <div className="gold-card-name">Sarah Pierre</div>
              <div className="gold-card-barcode">
                <svg ref={barcodeRef} className="barcode-svg"></svg>
              </div>
              <div className="gold-card-bottom">
                <span className="gold-card-discount">25% Réduction</span>
                <span className="gold-card-expiry">09/26</span>
              </div>
            </div>
          </div>
          
          <div className="profile-mockup-benefits">
            <ul className="benefits-list">
              <li className="benefit-item">Accédez à votre solde,</li>
              <li className="benefit-item">suivez vos commandes</li>
              <li className="benefit-item">bénéficiez d'avantages réservés aux clients inscrits.</li>
            </ul>
            <Link to="/profile" className="btn-secondary">Créer un compte</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileMockup
