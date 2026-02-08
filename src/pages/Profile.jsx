import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Profile.css'

function Profile() {
  const barcodeRef = useRef(null)
  const fileInputRef = useRef(null)
  const [profileImage, setProfileImage] = useState(() => {
    // Load from localStorage on mount
    return localStorage.getItem('profileImage') || null
  })

  useEffect(() => {
    if (barcodeRef.current) {
      // Dynamically import JsBarcode to avoid SSR issues
      import('jsbarcode').then((module) => {
        const JsBarcode = module.default || module
        // Generate a unique barcode based on user ID or card number
        const cardNumber = '1234567890123' // You can replace this with actual user card number
        try {
          JsBarcode(barcodeRef.current, cardNumber, {
            format: 'EAN13',
            width: 1.5,
            height: 40,
            displayValue: false,
            background: 'transparent',
            lineColor: '#ffffff',
            margin: 0
          })
        } catch (error) {
          console.error('Error generating barcode:', error)
        }
      }).catch((error) => {
        console.error('Error loading jsbarcode:', error)
      })
    }
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('L\'image est trop grande. Taille maximale : 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setProfileImage(imageDataUrl)
        // Save to localStorage
        localStorage.setItem('profileImage', imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-header">
        <Link to="/" className="btn-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <div className="profile-picture-container">
          <div className="profile-picture" onClick={handleAvatarClick}>
            {profileImage ? (
              <img src={profileImage} alt="Photo de profil" className="profile-avatar-img" />
            ) : (
              <div className="profile-avatar"></div>
            )}
            <div className="profile-picture-overlay">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="camera-icon">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <div className="profile-greeting">
          <span>Bonjour, </span>
          <span className="profile-name">Sarah</span>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-left-column">
          <div className="gold-card">
            <div className="gold-card-top">
              <span className="gold-card-label">Gold card</span>
              <span className="gold-card-brand">JGroup</span>
            </div>
            <div className="gold-card-name">Sarah Pierre</div>
            <div className="gold-card-barcode">
              <svg ref={barcodeRef} className="barcode-svg"></svg>
            </div>
            <div className="gold-card-bottom">
              <span className="gold-card-discount">25% Réduction</span>
              <span className="gold-card-expiry">09/26</span>
            </div>
          </div>

          <div className="summary-cards">
            <div className="summary-card">
              <div className="summary-label">Total commande</div>
              <div className="summary-value">50 000 Gourdes</div>
            </div>
            <div className="summary-card bonus-card">
              <div className="bonus-badge">+10%</div>
              <div className="summary-label bonus-label">Bonus</div>
              <div className="summary-value bonus-value">25590.58</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Balance</div>
              <div className="summary-value">5 000 gourdes</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Solde</div>
              <div className="summary-value">40 000 gourdes</div>
            </div>
          </div>
        </div>

        <div className="profile-right-column">
          <div className="profile-section">
            <h3 className="section-title">Modifier Votre Profil</h3>
            <div className="profile-form">
              <div className="profile-form-group">
                <label className="profile-label">Nom complet</label>
                <input type="text" placeholder="Sarah Pierre" className="profile-input" />
              </div>
              <div className="profile-form-group">
                <label className="profile-label">Email</label>
                <input type="email" placeholder="sarahpierre@gmail.com" className="profile-input" />
              </div>
              <div className="profile-form-group">
                <label className="profile-label">Nouveau mot de passe</label>
                <input type="password" placeholder="••••••••" className="profile-input" />
              </div>
              <div className="profile-form-group">
                <label className="profile-label">Confirmer le mot de passe</label>
                <input type="password" placeholder="••••••••" className="profile-input" />
              </div>
              <button className="btn-save-profile">Enregistrer les modifications</button>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Historique commandes</h3>
            <div className="order-history">
              <div className="order-item">
                <div className="order-info">
                  <div className="order-id">ID: #001234</div>
                  <div className="order-name">3 sac riz Bongu</div>
                  <div className="order-date">23/01/26</div>
                </div>
                <div className="order-status">Livrée</div>
                <div className="order-price">20 500 Gourdes</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <div className="order-id">ID: #001235</div>
                  <div className="order-name">3 sac riz Bongu</div>
                  <div className="order-date">23/01/26</div>
                </div>
                <div className="order-status">Livrée</div>
                <div className="order-price">20 500 Gourdes</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <div className="order-id">ID: #001236</div>
                  <div className="order-name">3 sac riz Bongu</div>
                  <div className="order-date">23/01/26</div>
                </div>
                <div className="order-status">Livrée</div>
                <div className="order-price">20 500 Gourdes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
