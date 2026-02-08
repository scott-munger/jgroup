import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from './Navbar'
import './Header.css'

function Header() {
  const [language, setLanguage] = useState('fr')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { getCartCount } = useCart()

  const isActive = (path) => location.pathname === path

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
    // TODO: Implement actual translation logic
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button 
              className={`btn-menu-header ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/" className="logo">JGroup Entreprise</Link>
            <nav className="header-nav">
              <Link 
                to="/store" 
                className={`header-nav-link ${isActive('/store') ? 'active' : ''}`}
              >
                Produits Alimentaires
              </Link>
              <Link 
                to="/construction" 
                className={`header-nav-link ${isActive('/construction') ? 'active' : ''}`}
              >
                Construction
              </Link>
              <Link 
                to="/carburant" 
                className={`header-nav-link ${isActive('/carburant') ? 'active' : ''}`}
              >
                Carburant
              </Link>
              <Link 
                to="/assainissement" 
                className={`header-nav-link ${isActive('/assainissement') ? 'active' : ''}`}
              >
                Assainissement
              </Link>
              <Link 
                to="/profile" 
                className={`header-nav-link ${isActive('/profile') ? 'active' : ''}`}
              >
                Mon Profil
              </Link>
            </nav>
          </div>
          <div className="header-actions">
            <button 
              className="btn-language" 
              onClick={toggleLanguage}
              aria-label="Changer la langue"
            >
              {language === 'fr' ? (
                <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <rect width="20" height="5" fill="#002654"/>
                  <rect y="5" width="20" height="5" fill="white"/>
                  <rect y="10" width="20" height="5" fill="#ED2939"/>
                </svg>
              ) : (
                <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <rect width="20" height="15" fill="#012169"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2"/>
                  <path d="M0 7.5L20 7.5M10 0L10 15" stroke="white" strokeWidth="2"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1.2"/>
                  <path d="M0 7.5L20 7.5M10 0L10 15" stroke="#C8102E" strokeWidth="1.2"/>
                </svg>
              )}
              <span className="language-text">{language === 'fr' ? 'FR' : 'EN'}</span>
            </button>
            <Link to="/cart" className="btn-cart-header">
              <img 
                src="/icons/cart.svg" 
                alt="Panier" 
                className="cart-icon-img"
              />
              {getCartCount() > 0 && (
                <span className="cart-badge-header">{getCartCount()}</span>
              )}
            </Link>
          </div>
        </div>
      </header>
      <Navbar isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Header
