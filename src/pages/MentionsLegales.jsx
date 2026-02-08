import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './LegalPages.css'

function MentionsLegales() {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-container">
        <h1 className="legal-title">Mentions Légales</h1>
        <div className="legal-content">
          <section>
            <h2>Informations sur l'entreprise</h2>
            <p>
              <strong>JGroup Entreprise</strong><br />
              Cap Haïtien, #37<br />
              Téléphone : (509) 43 23 45 07<br />
              Email : jgroup@gmail.com
            </p>
          </section>

          <section>
            <h2>Directeur de publication</h2>
            <p>Le directeur de la publication est le représentant légal de JGroup Entreprise.</p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>Ce site est hébergé par nos services internes.</p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
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

export default MentionsLegales
