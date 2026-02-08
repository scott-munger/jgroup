import React from 'react'
import { Link } from 'react-router-dom'
import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Prêt à commencer ?</h2>
        <p className="cta-text">Créez votre compte dès maintenant et accédez à tous nos services</p>
        <div className="cta-buttons">
          <Link to="/store" className="btn-cta btn-cta-primary">Nouvelle commande</Link>
          <button className="btn-cta">Créer un compte</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
