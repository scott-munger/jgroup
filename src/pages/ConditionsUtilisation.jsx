import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './LegalPages.css'

function ConditionsUtilisation() {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-container">
        <h1 className="legal-title">Conditions d'Utilisation</h1>
        <div className="legal-content">
          <section>
            <h2>Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions 
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          <section>
            <h2>Utilisation du site</h2>
            <p>
              Vous vous engagez à utiliser ce site de manière légale et conforme à ces conditions. 
              Vous ne devez pas utiliser le site de manière à violer les lois applicables ou à porter 
              atteinte aux droits d'autrui.
            </p>
          </section>

          <section>
            <h2>Commandes</h2>
            <p>
              Toutes les commandes passées via ce site sont soumises à acceptation par JGroup Entreprise. 
              Nous nous réservons le droit de refuser ou d'annuler toute commande pour quelque raison que ce soit.
            </p>
          </section>

          <section>
            <h2>Modifications</h2>
            <p>
              JGroup Entreprise se réserve le droit de modifier ces conditions d'utilisation à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur le site.
            </p>
          </section>

          <div className="legal-back">
            <Link to="/" className="btn-back-legal">Retour à l'accueil</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConditionsUtilisation
