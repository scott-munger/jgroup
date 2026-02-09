import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import './Equipment.css'

function Equipment() {
  const { addToCart } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEquipment, setSelectedEquipment] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rentEquipment, setRentEquipment] = useState(null)
  const [isRentModalOpen, setIsRentModalOpen] = useState(false)
  const [hours, setHours] = useState(1)
  const [rentDate, setRentDate] = useState('')
  const [rentEndDate, setRentEndDate] = useState('')
  const [rentalType, setRentalType] = useState('hours') // 'hours' or 'days'
  const [workLocation, setWorkLocation] = useState('')
  const [membershipModal, setMembershipModal] = useState(null)

  // Helper function to get image with fallback
  const getImageSrc = (imagePath) => {
    return encodeURI(imagePath)
  }

  // Helper function to handle image errors with multiple fallback attempts
  const handleImageError = (e, fallbackIndex = 0, attempt = 0) => {
    const img = e.target
    const fallbackImages = [
      '/assets_images/WhatsApp Image 2026-01-30 at 17.36.52.jpeg',
      '/assets_images/WhatsApp Image 2026-01-30 at 17.37.03 (1).jpeg'
    ]
    
    const currentSrc = decodeURIComponent(img.src)
    const baseUrl = currentSrc.split('/').slice(0, -1).join('/')
    const fileName = currentSrc.split('/').pop()
    
    // Prevent infinite loop
    if (attempt > 10) {
      if (fallbackIndex < fallbackImages.length) {
        img.src = fallbackImages[fallbackIndex]
        img.onerror = (err) => handleImageError(err, fallbackIndex + 1, 0)
      } else {
        img.style.display = 'none'
      }
      return
    }
    
    // Try different extensions and character variations
    let newSrc = null
    if (attempt === 0 && currentSrc.includes('.jpeg') && !currentSrc.includes('WhatsApp')) {
      newSrc = currentSrc.replace('.jpeg', '.jpg')
    } else if (attempt === 1 && currentSrc.includes('.jpg') && !currentSrc.includes('WhatsApp')) {
      newSrc = currentSrc.replace('.jpg', '.jpeg')
    } else if (attempt === 2 && currentSrc.includes('.webp') && !currentSrc.includes('WhatsApp')) {
      newSrc = currentSrc.replace('.webp', '.jpeg')
    } else if (attempt === 3 && fileName && fileName.includes('é')) {
      newSrc = `${baseUrl}/${fileName.replace(/é/g, 'e').replace(/è/g, 'e').replace(/ê/g, 'e')}`
    } else if (attempt === 4 && fileName && fileName.includes('³')) {
      newSrc = `${baseUrl}/${fileName.replace(/m³/g, 'm3').replace(/³/g, '3')}`
    } else if (attempt === 5 && fileName && fileName.includes('m3')) {
      newSrc = `${baseUrl}/${fileName.replace(/m3/g, 'm³')}`
    }
    
    if (newSrc) {
      img.src = encodeURI(newSrc)
      img.onerror = (err) => handleImageError(err, fallbackIndex, attempt + 1)
      return
    }
    
    // If all variations failed, try fallback images
    if (fallbackIndex < fallbackImages.length) {
      img.src = fallbackImages[fallbackIndex]
      img.onerror = (err) => handleImageError(err, fallbackIndex + 1, 0)
    } else {
      img.style.display = 'none'
    }
  }

  const equipment = [
    {
      id: 1,
      name: 'Excavatrice CAT 320',
      price: 250000,
      oldPrice: 300000,
      discount: 17,
      pricePerHour: 25000,
      image: '/assets_images/Excavatrice CAT 320.jpeg',
      description: 'Excavatrice hydraulique de 20 tonnes, idéale pour les travaux de terrassement et de creusement.',
      specifications: {
        poids: '20 tonnes',
        puissance: '110 kW',
        capacite: '1.2 m³',
        annee: '2022',
        etat: 'Excellent'
      },
      features: ['GPS intégré', 'Cabine climatisée', 'Économie de carburant', 'Maintenance récente']
    },
    {
      id: 2,
      name: 'Bulldozer CAT D6T',
      price: 180000,
      oldPrice: 220000,
      discount: 18,
      pricePerHour: 18000,
      image: '/assets_images/Bulldozer CAT D6T.jpeg',
      description: 'Bulldozer robuste pour travaux de nivellement et de déblaiement sur tous types de terrains.',
      specifications: {
        poids: '15 tonnes',
        puissance: '130 kW',
        capacite: '3.5 m³',
        annee: '2021',
        etat: 'Très bon'
      },
      features: ['Lame ajustable', 'Résistant aux intempéries', 'Faible consommation', 'Contrôle précis']
    },
    {
      id: 3,
      name: 'Grue Mobile Liebherr LTM 1050',
      price: 450000,
      oldPrice: 550000,
      discount: 18,
      pricePerHour: 45000,
      image: '/assets_images/Grue Mobile Liebherr LTM 1050.jpeg',
      description: 'Grue mobile de 50 tonnes avec portée maximale de 50 mètres, parfaite pour les chantiers de construction.',
      specifications: {
        poids: '50 tonnes',
        puissance: '280 kW',
        capacite: '50 tonnes',
        annee: '2023',
        etat: 'Neuf'
      },
      features: ['Télécommande', 'Système de sécurité avancé', 'Montage rapide', 'Haute précision']
    },
    {
      id: 4,
      name: 'Chargeur sur Pneus CAT 950M',
      price: 120000,
      oldPrice: 150000,
      discount: 20,
      pricePerHour: 12000,
      image: '/assets_images/Chargeur sur Pneus CAT 950M.jpeg',
      description: 'Chargeur polyvalent pour le chargement et le transport de matériaux sur chantier.',
      specifications: {
        poids: '18 tonnes',
        puissance: '150 kW',
        capacite: '3.8 m³',
        annee: '2022',
        etat: 'Excellent'
      },
      features: ['4 roues motrices', 'Cabine ergonomique', 'Charge rapide', 'Manœuvrabilité']
    },
    {
      id: 5,
      name: 'Compacteur de Sol CAT CS56',
      price: 35000,
      oldPrice: 45000,
      discount: 22,
      pricePerHour: 3500,
      image: '/assets_images/Compacteur de Sol CAT CS56.jpeg',
      description: 'Compacteur vibratoire pour le compactage des sols et des routes.',
      specifications: {
        poids: '5 tonnes',
        puissance: '75 kW',
        capacite: '1.5 m',
        annee: '2021',
        etat: 'Très bon'
      },
      features: ['Vibration réglable', 'Facile à transporter', 'Économique', 'Efficace']
    },
    {
      id: 6,
      name: 'Bétonnière Mobile 6 m³',
      price: 28000,
      oldPrice: 35000,
      discount: 20,
      pricePerHour: 2800,
      image: '/assets_images/Betonniere Mobile.webp',
      description: 'Bétonnière mobile pour la préparation et le transport de béton sur chantier.',
      specifications: {
        poids: '8 tonnes',
        puissance: '45 kW',
        capacite: '6 m³',
        annee: '2020',
        etat: 'Bon'
      },
      features: ['Rotation continue', 'Décharge rapide', 'Robuste', 'Maintenance simple']
    }
  ]

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRentClick = (item) => {
    setRentEquipment(item)
    setIsRentModalOpen(true)
    setHours(1)
    setRentalType('hours')
    // Set default date to tomorrow
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dateStr = tomorrow.toISOString().split('T')[0]
    setRentDate(dateStr)
    setRentEndDate(dateStr)
  }

  const calculateTotalPrice = () => {
    if (!rentEquipment) return 0
    
    if (rentalType === 'hours') {
      return rentEquipment.pricePerHour * hours
    } else {
      // Calculate days between start and end date
      if (!rentDate || !rentEndDate) return 0
      const start = new Date(rentDate)
      const end = new Date(rentEndDate)
      const diffTime = Math.abs(end - start)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // +1 to include both start and end day
      const hoursPerDay = 8 // Assuming 8 hours per day
      return rentEquipment.pricePerHour * hoursPerDay * diffDays
    }
  }

  const calculateDays = () => {
    if (!rentDate || !rentEndDate) return 0
    const start = new Date(rentDate)
    const end = new Date(rentEndDate)
    const diffTime = Math.abs(end - start)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
  }

  const handleConfirmRent = () => {
    if (!rentEquipment || !rentDate || !workLocation) return
    
    if (rentalType === 'hours' && hours > 0) {
      const totalPrice = calculateTotalPrice()
      const rentalItem = {
        ...rentEquipment,
        rentalType: 'hours',
        rentalHours: hours,
        rentalDate: rentDate,
        workLocation: workLocation,
        totalPrice: totalPrice,
        price: totalPrice
      }
      addToCart(rentalItem)
      setIsRentModalOpen(false)
      setRentEquipment(null)
      setHours(1)
      setRentDate('')
      setRentEndDate('')
      setRentalType('hours')
      setWorkLocation('')
    } else if (rentalType === 'days' && rentEndDate) {
      const totalPrice = calculateTotalPrice()
      const days = calculateDays()
      const rentalItem = {
        ...rentEquipment,
        rentalType: 'days',
        rentalDays: days,
        rentalDate: rentDate,
        rentalEndDate: rentEndDate,
        workLocation: workLocation,
        totalPrice: totalPrice,
        price: totalPrice
      }
      addToCart(rentalItem)
      setIsRentModalOpen(false)
      setRentEquipment(null)
      setHours(1)
      setRentDate('')
      setRentEndDate('')
      setRentalType('hours')
      setWorkLocation('')
    }
  }

  const handleViewDetails = (item) => {
    setSelectedEquipment(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEquipment(null)
  }

  const closeRentModal = () => {
    setIsRentModalOpen(false)
    setRentEquipment(null)
    setHours(1)
    setRentDate('')
    setRentEndDate('')
    setRentalType('hours')
    setWorkLocation('')
  }

  const calculatePriceWithMembership = (basePrice, discountPercent) => {
    // For equipment, we need to calculate based on pricePerHour
    // But oldPrice represents the base hourly rate
    return Math.round(basePrice * (1 - discountPercent / 100))
  }

  const openMembershipModal = (item) => {
    setMembershipModal(item)
  }

  const closeMembershipModal = () => {
    setMembershipModal(null)
  }

  return (
    <div className="equipment-page">
      <Header />
      <div className="equipment-header">
        <div className="equipment-header-bg"></div>
        <div className="equipment-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="equipment-title">Matériels & Engins Lourds</h1>
      </div>

      <div className="equipment-search">
        <input 
          type="text" 
          placeholder="Taper le nom du matériel recherché" 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-find">Trouver</button>
      </div>

      <div className="equipment-content">
        <div className="equipment-grid">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <div 
                key={item.id} 
                className="equipment-card card-visible"
              >
                <div className="equipment-image">
                  <img 
                    src={getImageSrc(item.image)} 
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => handleImageError(e)}
                  />
                  <div 
                    className="membership-badge"
                    onClick={() => openMembershipModal(item)}
                  >
                    Voir le prix avec membership
                  </div>
                </div>
                <div className="equipment-info">
                  <div className="equipment-name">{item.name}</div>
                  <div className="equipment-price">
                    <span className="current-price">{item.pricePerHour.toLocaleString()} Gdes/heure</span>
                    <span className="old-price">{item.oldPrice.toLocaleString()} Gdes</span>
                  </div>
                  <div className="equipment-actions">
                    <button 
                      className="btn-view-details"
                      onClick={() => handleViewDetails(item)}
                    >
                      Détails
                    </button>
                    <button 
                      className="btn-rent"
                      onClick={() => handleRentClick(item)}
                    >
                      Louer
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-equipment">
              <p>Aucun matériel trouvé</p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedEquipment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="modal-header">
              <img 
                src={getImageSrc(selectedEquipment.image)} 
                alt={selectedEquipment.name} 
                className="modal-image"
                onError={(e) => handleImageError(e)}
              />
              <h2 className="modal-title">{selectedEquipment.name}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedEquipment.description}</p>
              
              <div className="modal-specifications">
                <h3 className="modal-section-title">Spécifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Poids:</span>
                    <span className="spec-value">{selectedEquipment.specifications.poids}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Puissance:</span>
                    <span className="spec-value">{selectedEquipment.specifications.puissance}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Capacité:</span>
                    <span className="spec-value">{selectedEquipment.specifications.capacite}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Année:</span>
                    <span className="spec-value">{selectedEquipment.specifications.annee}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">État:</span>
                    <span className="spec-value">{selectedEquipment.specifications.etat}</span>
                  </div>
                </div>
              </div>

              <div className="modal-features">
                <h3 className="modal-section-title">Caractéristiques</h3>
                <ul className="features-list">
                  {selectedEquipment.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-price">
                <div className="modal-price-info">
                  <span className="modal-old-price">{selectedEquipment.oldPrice.toLocaleString()} Gdes</span>
                  <span className="modal-current-price">{selectedEquipment.price.toLocaleString()} Gdes</span>
                  <span className="modal-discount">-{selectedEquipment.discount}%</span>
                </div>
                <button 
                  className="btn-modal-rent"
                  onClick={() => {
                    closeModal()
                    handleRentClick(selectedEquipment)
                  }}
                >
                  Louer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isRentModalOpen && rentEquipment && (
        <div className="modal-overlay" onClick={closeRentModal}>
          <div className="modal-content rent-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeRentModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="rent-modal-header">
              <h2 className="rent-modal-title">Location - {rentEquipment.name}</h2>
              <div className="rent-modal-price-info">
                <span className="rent-price-per-hour">{rentEquipment.pricePerHour.toLocaleString()} Gdes/heure</span>
              </div>
            </div>
            <div className="rent-modal-body">
              <div className="rental-type-selector">
                <label className="rent-label">Type de location</label>
                <div className="rental-type-buttons">
                  <button
                    className={`rental-type-btn ${rentalType === 'hours' ? 'active' : ''}`}
                    onClick={() => {
                      setRentalType('hours')
                      if (!rentEndDate) {
                        const tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        setRentEndDate(tomorrow.toISOString().split('T')[0])
                      }
                    }}
                  >
                    Par heures
                  </button>
                  <button
                    className={`rental-type-btn ${rentalType === 'days' ? 'active' : ''}`}
                    onClick={() => {
                      setRentalType('days')
                      if (rentDate && !rentEndDate) {
                        setRentEndDate(rentDate)
                      }
                    }}
                  >
                    Par jours
                  </button>
                </div>
              </div>

              <div className="rent-date-selector">
                <label className="rent-label">Date de début</label>
                <input
                  type="date"
                  className="rent-date-input"
                  value={rentDate}
                  onChange={(e) => {
                    setRentDate(e.target.value)
                    if (rentalType === 'days' && (!rentEndDate || e.target.value > rentEndDate)) {
                      setRentEndDate(e.target.value)
                    }
                  }}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              {rentalType === 'days' && (
                <div className="rent-date-selector">
                  <label className="rent-label">Date de fin</label>
                  <input
                    type="date"
                    className="rent-date-input"
                    value={rentEndDate}
                    onChange={(e) => setRentEndDate(e.target.value)}
                    min={rentDate || new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              )}

              {rentalType === 'hours' && (
                <div className="rent-hours-selector">
                  <label className="rent-label">Nombre d'heures</label>
                  <div className="rent-hours-controls">
                    <button 
                      className="rent-hours-btn"
                      onClick={() => setHours(Math.max(1, hours - 1))}
                      disabled={hours <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="rent-hours-input"
                      value={hours}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) || 1
                        setHours(Math.max(1, value))
                      }}
                      min="1"
                    />
                    <button 
                      className="rent-hours-btn"
                      onClick={() => setHours(hours + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="rent-date-selector">
                <label className="rent-label">Lieu de travail <span style={{color: 'red'}}>*</span></label>
                <input
                  type="text"
                  className="rent-date-input"
                  placeholder="Adresse où le matériel va travailler"
                  value={workLocation}
                  onChange={(e) => setWorkLocation(e.target.value)}
                  required
                />
              </div>

              <div className="rent-total">
                <div className="rent-total-label">Prix total</div>
                <div className="rent-total-price">
                  {calculateTotalPrice().toLocaleString()} Gdes
                </div>
                <div className="rent-total-hours">
                  {rentalType === 'hours' ? (
                    `(${hours} ${hours === 1 ? 'heure' : 'heures'})`
                  ) : (
                    `(${calculateDays()} ${calculateDays() === 1 ? 'jour' : 'jours'} - 8h/jour)`
                  )}
                </div>
              </div>
              <button 
                className="btn-confirm-rent"
                onClick={handleConfirmRent}
                disabled={!rentDate || !workLocation || (rentalType === 'hours' && hours <= 0) || (rentalType === 'days' && !rentEndDate)}
              >
                Confirmer la location
              </button>
            </div>
          </div>
        </div>
      )}

      {membershipModal && (
        <div className="modal-overlay" onClick={closeMembershipModal}>
          <div className="modal-content membership-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeMembershipModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="membership-modal-header">
              <h2 className="membership-modal-title">Prix avec Membership</h2>
              <p className="membership-modal-subtitle">{membershipModal.name}</p>
            </div>
            <div className="membership-modal-body">
              <div className="membership-price-card gold">
                <div className="membership-card-header">
                  <span className="membership-card-label">Gold</span>
                  <span className="membership-card-discount">25%</span>
                </div>
                <div className="membership-card-price">
                  {calculatePriceWithMembership(membershipModal.pricePerHour, 25).toLocaleString()} Gdes/heure
                </div>
                <div className="membership-card-old-price">
                  {membershipModal.pricePerHour.toLocaleString()} Gdes/heure
                </div>
              </div>
              <div className="membership-price-card silver">
                <div className="membership-card-header">
                  <span className="membership-card-label">Silver</span>
                  <span className="membership-card-discount">20%</span>
                </div>
                <div className="membership-card-price">
                  {calculatePriceWithMembership(membershipModal.pricePerHour, 20).toLocaleString()} Gdes/heure
                </div>
                <div className="membership-card-old-price">
                  {membershipModal.pricePerHour.toLocaleString()} Gdes/heure
                </div>
              </div>
              <div className="membership-price-card bronze">
                <div className="membership-card-header">
                  <span className="membership-card-label">Bronze</span>
                  <span className="membership-card-discount">15%</span>
                </div>
                <div className="membership-card-price">
                  {calculatePriceWithMembership(membershipModal.pricePerHour, 15).toLocaleString()} Gdes/heure
                </div>
                <div className="membership-card-old-price">
                  {membershipModal.pricePerHour.toLocaleString()} Gdes/heure
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Equipment
