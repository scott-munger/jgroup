import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-company">JGroup Entreprise</h3>
          <div className="footer-services">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link to="/construction" className="footer-link">Construction</Link></li>
              <li><Link to="/carburant" className="footer-link">Carburant</Link></li>
              <li><Link to="/assainissement" className="footer-link">Assainissement</Link></li>
              <li><Link to="/store" className="footer-link">Provision alimentaire</Link></li>
              <li><Link to="/equipment" className="footer-link">Matériels & Engins Lourds</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Accès rapide</h4>
          <ul className="footer-list">
            <li><Link to="/store" className="footer-link">Commander</Link></li>
            <li><Link to="/profile" className="footer-link">Suivi des commandes</Link></li>
            <li><Link to="/profile" className="footer-link">Comptes clients & fournisseurs</Link></li>
            <li><Link to="/profile" className="footer-link">Rapports</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-list">
            <li>Cap Haïtien, #37</li>
            <li><a href="tel:+50943234507" className="footer-link">(509) 43 23 45 07</a></li>
            <li><a href="mailto:jgroup@gmail.com" className="footer-link">jgroup@gmail.com</a></li>
          </ul>
          <h4 className="footer-heading footer-heading-legal">Légal</h4>
          <ul className="footer-list">
            <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            <li><Link to="/politique-confidentialite" className="footer-link">Politique de confidentialité</Link></li>
            <li><Link to="/conditions-utilisation" className="footer-link">Conditions d'utilisation</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
