import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar({ isOpen: externalIsOpen, onClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const location = useLocation()
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(!internalIsOpen)
    } else if (onClose) {
      onClose()
    }
  }

  const closeMenu = () => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(false)
    } else if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div className="navbar-overlay" onClick={closeMenu}></div>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/store" 
              className={`navbar-link ${isActive('/store') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Produits Alimentaires
            </Link>
          </li>
          <li>
            <Link 
              to="/construction" 
              className={`navbar-link ${isActive('/construction') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Construction
            </Link>
          </li>
          <li>
            <Link 
              to="/carburant" 
              className={`navbar-link ${isActive('/carburant') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Carburant
            </Link>
          </li>
          <li>
            <Link 
              to="/assainissement" 
              className={`navbar-link ${isActive('/assainissement') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Assainissement
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={`navbar-link ${isActive('/profile') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Mon Profil
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
