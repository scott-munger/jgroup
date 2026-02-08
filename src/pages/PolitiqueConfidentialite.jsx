import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './LegalPages.css'

function PolitiqueConfidentialite() {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-container">
        <h1 className="legal-title">Politique de Confidentialité</h1>
        <div className="legal-content">
          <section>
            <h2>Collecte des données</h2>
            <p>
              JGroup Entreprise collecte les informations que vous nous fournissez directement lorsque vous 
              utilisez nos services, notamment lors de la création de votre compte ou de la passation d'une commande.
            </p>
          </section>

          <section>
            <h2>Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées pour traiter vos commandes, améliorer nos services, 
              vous contacter concernant votre compte ou vos commandes, et vous envoyer des informations 
              sur nos services (avec votre consentement).
            </p>
          </section>

          <section>
            <h2>Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations 
              personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter le traitement de vos 
              données personnelles. Pour exercer ces droits, contactez-nous à jgroup@gmail.com.
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

export default PolitiqueConfidentialite
