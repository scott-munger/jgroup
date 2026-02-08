import React from 'react'
import './Differences.css'

function Differences() {
  const differences = [
    {
      icon: '/icons/tout.png',
      title: 'Service complet',
      description: 'Une seule plateforme pour gérer construction, carburant, transport, assainissement et social.'
    },
    {
      icon: '/icons/fiabilite.png',
      title: 'Fiabilité terrain',
      description: 'Livraisons, transferts et suivis toujours précis et traçables, même sur mobile.'
    },
    {
      icon: '/icons/fondation.png',
      title: 'Engagement social',
      description: 'Notre fondation soutient le développement éducatif et social des communautés.'
    },
    {
      icon: '/icons/vitesse.png',
      title: 'Simplicité & rapidité',
      description: 'Commandes en quelques clics, suivi en temps réel, validation instantanée.'
    }
  ]

  return (
    <section className="differences">
      <div className="differences-container">
        <h2 className="differences-title">Ce qui nous rend Different des autres</h2>
        <div className="differences-scroll">
          {differences.map((diff, index) => (
            <div key={index} className="difference-card">
              <div className="difference-icon">
                <img src={diff.icon} alt={diff.title} />
              </div>
              <h3 className="difference-card-title">{diff.title}</h3>
              <p className="difference-card-description">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differences
