import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './OrderForm.css'

function CarburantOrder() {
  const [formData, setFormData] = useState({
    nomComplet: '',
    typeCarburant: '',
    typeVente: '',
    quantite: '',
    siteDestination: '',
    modePaiement: '',
    monnaie: '',
    dateLivraison: '',
    contact: '',
    avantApresVente: false,
    notes: ''
  })

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const checkField = (field, isNumeric = false) => {
      if (field === null || field === undefined) return false
      const str = String(field).trim()
      if (str === '') return false
      if (isNumeric) {
        const num = Number(str)
        if (isNaN(num) || num <= 0) return false
      }
      return true
    }
    
    const allFieldsFilled = 
      checkField(formData.nomComplet) &&
      checkField(formData.typeCarburant) &&
      checkField(formData.typeVente) &&
      checkField(formData.quantite, true) &&
      checkField(formData.siteDestination) &&
      checkField(formData.modePaiement) &&
      checkField(formData.monnaie) &&
      checkField(formData.dateLivraison) &&
      checkField(formData.contact)
    
    setIsFormValid(allFieldsFilled)
  }, [formData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="order-page">
      <Header />
      <div className="order-header" style={{ backgroundImage: `url(/assets_images/pngtree-rear-and-side-view-of-tanker-truck-vehicle-image_15661785.jpg)` }}>
        <div className="order-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="order-title">Carburant</h1>
      </div>

      <div className="order-form-container">
        <div className="order-form">
          <h2 className="form-title">Formulaire de commandes</h2>
          
          <div className="form-field">
            <label className="form-label">
              Nom complet: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              name="nomComplet"
              placeholder="Ex: Sarah Pierre" 
              className="form-input"
              value={formData.nomComplet}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Type de carburant: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="typeCarburant" 
                className="form-select"
                value={formData.typeCarburant}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="diesel">Diesel</option>
                <option value="kerosene">Kérosène</option>
                <option value="petrole">Pétrole</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Type de vente: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="typeVente" 
                className="form-select"
                value={formData.typeVente}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="detail">Vente au détail</option>
                <option value="gros">Vente en gros</option>
                <option value="transfert">Transfert interne/inter-site</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Quantité (gallons): <span className="required">*</span>
            </label>
            <input 
              type="number" 
              name="quantite"
              placeholder="Ex: 250" 
              className="form-input"
              min="1"
              value={formData.quantite}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Site / Destination: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="siteDestination" 
                className="form-select"
                value={formData.siteDestination}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="site1">Site 1</option>
                <option value="site2">Site 2</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field-half">
              <label className="form-label">
                Mode de paiement: <span className="required">*</span>
              </label>
              <div className="form-select-wrapper">
                <select 
                  name="modePaiement" 
                  className="form-select"
                  value={formData.modePaiement}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionner...</option>
                  <option value="especes">Espèces</option>
                  <option value="mobile">Mobile Money</option>
                  <option value="carte">Carte</option>
                </select>
              </div>
            </div>

            <div className="form-field form-field-half">
              <label className="form-label">
                Monnaie: <span className="required">*</span>
              </label>
              <div className="form-select-wrapper">
                <select 
                  name="monnaie" 
                  className="form-select"
                  value={formData.monnaie}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionner...</option>
                  <option value="xaf">XAF</option>
                  <option value="usd">USD</option>
                  <option value="htg">HTG</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Date et heure de livraison: <span className="required">*</span>
            </label>
            <input 
              type="datetime-local" 
              name="dateLivraison"
              className="form-input"
              value={formData.dateLivraison}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Contact client / responsable: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              name="contact"
              placeholder="Nom et téléphone" 
              className="form-input"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label-toggle">
              <input 
                type="checkbox" 
                name="avantApresVente"
                checked={formData.avantApresVente}
                onChange={handleChange}
                className="toggle-input"
              />
              <span className="toggle-label">Bouton avant/après vente (pour suivi du stock réel)</span>
            </label>
          </div>

          <div className="form-field">
            <label className="form-label">Notes supplémentaires</label>
            <textarea 
              name="notes"
              placeholder="Remarques optionnelles..." 
              className="form-textarea"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <div className="form-submit-section">
            <button className="btn-submit" disabled={!isFormValid}>
              Envoyer
            </button>
            {!isFormValid && (
              <p className="form-help-text">
                Veuillez remplir tous les champs marqués d'un astérisque (*) avant d'envoyer le formulaire.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarburantOrder
