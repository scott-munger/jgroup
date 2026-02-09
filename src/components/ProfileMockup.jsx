import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ProfileMockup.css'
import '../pages/Profile.css'

function ProfileMockup() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [cardPosition, setCardPosition] = useState(0)
  const statRef = useRef(null)
  const timerRef = useRef(null)
  const barcodeRef1 = useRef(null)
  const barcodeRef2 = useRef(null)
  const barcodeRef3 = useRef(null)

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
    const generateBarcode = (ref, number) => {
      if (ref.current) {
        import('jsbarcode').then((module) => {
          const JsBarcode = module.default || module
          try {
            JsBarcode(ref.current, number, {
              format: 'CODE128',
              width: 2,
              height: 35,
              displayValue: false,
              background: 'transparent',
              lineColor: '#ffffff',
              margin: 0,
              valid: function(valid) {
                return valid;
              }
            })
          } catch (error) {
            console.error('Error generating barcode:', error)
          }
        }).catch((error) => {
          console.error('Error loading jsbarcode:', error)
        })
      }
    }

    generateBarcode(barcodeRef1, 'JGROUP001')
    generateBarcode(barcodeRef2, 'JGROUP002')
    generateBarcode(barcodeRef3, 'JGROUP003')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCardPosition((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="profile-mockup">
      <div className="profile-mockup-container">
        <h2 className="profile-mockup-title">Un compte simple, des avantages concrets</h2>
        
        <div className="profile-mockup-stats">
          <div className="stat-item" ref={statRef}>
            <div className="stat-number">{count}K+</div>
            <div className="stat-label">Clients actifs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25%</div>
            <div className="stat-label">Réduction maximale Gold</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Services disponibles</div>
          </div>
        </div>
        
        <div className="profile-mockup-content">
          <div className="feature-cards">
            <div className="membership-cards-stack">
              <div className={`membership-card bronze-card ${cardPosition === 0 ? 'animate-to-front' : cardPosition === 1 ? 'animate-to-back' : ''}`}>
                <div className="card-type">Bronze</div>
                <div className="card-brand">JGroup</div>
                <div className="card-name">Bassem Ali Kamal</div>
                <div className="card-barcode">
                  <svg ref={barcodeRef1} className="barcode-svg"></svg>
                </div>
                <div className="card-bottom-right">
                  <div className="card-discount">15% De Reduction</div>
                </div>
              </div>
              
              <div className={`membership-card black-card ${cardPosition === 1 ? 'animate-to-front' : cardPosition === 2 ? 'animate-to-back' : ''}`}>
                <div className="card-type">Silver</div>
                <div className="card-brand">JGroup</div>
                <div className="card-name">Bassem Ali Kamal</div>
                <div className="card-barcode">
                  <svg ref={barcodeRef2} className="barcode-svg"></svg>
                </div>
                <div className="card-bottom-right">
                  <div className="card-discount">20% De Reduction</div>
                </div>
              </div>
              
              <div className={`membership-card gold-card ${cardPosition === 2 ? 'animate-to-front' : cardPosition === 0 ? 'animate-to-back' : ''}`}>
                <div className="card-type">Gold</div>
                <div className="card-brand">JGroup</div>
                <div className="card-name">Bassem Ali Kamal</div>
                <div className="card-barcode">
                  <svg ref={barcodeRef3} className="barcode-svg"></svg>
                </div>
                <div className="card-bottom-right">
                  <div className="card-discount">25% De Reduction</div>
                </div>
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
