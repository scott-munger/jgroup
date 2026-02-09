import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef({})

  const services = [
    {
      title: 'Construction',
      description: 'Gestion des engins lourds, matériaux de chantier et livraisons pour vos projets de construction et de fondation.',
      image: '/assets_images/construction.jpeg',
      link: '/construction'
    },
    {
      title: 'Produits Alimentaires',
      description: 'Approvisionnement et distribution de produits alimentaires pour particuliers, entreprises et collectivités.',
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif',
      link: '/store'
    },
    {
      title: 'Carburant',
      description: 'Vente, stockage et distribution de carburant en gros ou au détail, avec suivi des quantités et des sites.',
      image: '/assets_images/pngtree-rear-and-side-view-of-tanker-truck-vehicle-image_15661785.jpg',
      link: '/carburant'
    },
    {
      title: 'Assainissement',
      description: 'Collecte et transport des déchets avec suivi des camions et validation client de la livraison.',
      image: '/assets_images/camions-ordures-ville-quebec-cueillette-ordures-menageres-camion-benne-ville-de-quebec-bacs-ordures-et-recyclage-ville-de-quebec-en-bord-de-ruebas-vert-bac-bleu-64630.avif',
      link: '/assainissement'
    },
    {
      title: 'Matériels & Engins Lourds',
      description: 'Location et vente de matériels de construction et engins lourds pour vos projets. Excavatrices, bulldozers, grues et plus.',
      image: '/assets_images/construction.jpeg',
      link: '/equipment'
    }
  ]

  useEffect(() => {
    const observers = []
    
    services.forEach((service, index) => {
      const cardRef = cardRefs.current[index]
      if (!cardRef) return
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newSet = new Set(prev)
                  newSet.add(index)
                  return newSet
                })
              }, index * 150)
              observer.unobserve(entry.target)
            }
          })
        },
        { 
          threshold: 0.1,
          rootMargin: '50px 0px 50px 0px'
        }
      )
      
      observer.observe(cardRef)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">En savoir plus sur Nos differents services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el
                }
              }}
              className={`service-card ${visibleCards.has(index) ? 'card-visible' : ''}`}
              style={visibleCards.has(index) ? { animationDelay: `${index * 0.15}s` } : {}}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
                <div className="service-card-overlay">
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
              </div>
              <div className="service-card-content">
                <p className="service-card-description">{service.description}</p>
                <Link to={service.link} className="btn-service">Consulter Plus</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
