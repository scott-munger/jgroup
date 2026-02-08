import React from 'react'
import './HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-it-works">
              <h2 className="how-it-works-title">Nous vous servons en 3 étapes simples</h2>
      <div className="how-it-works-container">
        <div className="steps">
          <div className="steps-top">
            <div className="step-card">
              <h3 className="step-title">Vous commandez</h3>
              <p className="step-description">
                Choisissez le service désiré, indiquez les quantités et la localisation pour une commande rapide et efficace.
              </p>
              <div className="step-number">1</div>
            </div>
            <div className="step-card">
              <h3 className="step-title">Nous livrons</h3>
              <p className="step-description">
                Nos équipes organisent le transport et la livraison dans les délais indiqués
              </p>
              <div className="step-number">2</div>
            </div>
          </div>
          <div className="step-card">
            <h3 className="step-title">Vous confirmez</h3>
            <p className="step-description">
              Vous recevez une notification et un code de confirmation pour valider la réception.
            </p>
            <div className="step-number">3</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
