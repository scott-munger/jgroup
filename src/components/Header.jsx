import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from './Navbar'
import './Header.css'

function Header() {
  const [language, setLanguage] = useState('fr')
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { getCartCount } = useCart()

  const isActive = (path) => location.pathname === path

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' }
  ]

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsLanguageDropdownOpen(false)
    // TODO: Implement actual translation logic
  }

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

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
                to="/equipment" 
                className={`header-nav-link ${isActive('/equipment') ? 'active' : ''}`}
              >
                Matériels
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
            <div className="language-dropdown-container">
              <button 
                className="btn-language" 
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                aria-label="Changer la langue"
              >
                <span className="flag-emoji">{currentLanguage.flag}</span>
                <span className="language-text">{currentLanguage.code.toUpperCase()}</span>
                <svg 
                  className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`language-option ${language === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="flag-emoji">{lang.flag}</span>
                      <span className="language-name">{lang.name}</span>
                      {language === lang.code && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
      {isLanguageDropdownOpen && (
        <div 
          className="dropdown-overlay" 
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </>
  )
}

export default Header
