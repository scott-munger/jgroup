import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './OrderForm.css'

function ConstructionOrder() {
  const [formData, setFormData] = useState({
    nomComplet: '',
    typeProduit: '',
    sousType: '',
    quantite: '',
    unite: 'm³',
    siteChantier: '',
    dateLivraison: '',
    modeTransport: '',
    responsable: '',
    instructions: '',
    accuséReception: false
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
      checkField(formData.typeProduit) &&
      checkField(formData.quantite, true) &&
      checkField(formData.unite) &&
      checkField(formData.siteChantier) &&
      checkField(formData.dateLivraison) &&
      checkField(formData.modeTransport) &&
      checkField(formData.responsable)
    
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
      <div className="order-header" style={{ backgroundImage: `url(/assets_images/construction.jpeg)` }}>
        <div className="order-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="order-title">Construction</h1>
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
              Type de produit: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="typeProduit" 
                className="form-select"
                value={formData.typeProduit}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="gravier">Gravier</option>
                <option value="sable">Sable</option>
                <option value="pyruc">PYRUC</option>
                <option value="roches">Roches</option>
                <option value="engin">Engin lourd</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Sous-type</label>
            <div className="form-select-wrapper">
              <select 
                name="sousType" 
                className="form-select"
                value={formData.sousType}
                onChange={handleChange}
              >
                <option value="">Sélectionner...</option>
                <option value="sable-brut">Sable brut</option>
                <option value="sable-moulu">Sable moulu</option>
                <option value="gravier-riviere">Gravier rivière</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field-half">
              <label className="form-label">
                Quantité: <span className="required">*</span>
              </label>
              <input 
                type="number" 
                name="quantite"
                placeholder="Ex: 10" 
                className="form-input"
                min="1"
                value={formData.quantite}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field form-field-half">
              <label className="form-label">
                Unité: <span className="required">*</span>
              </label>
              <div className="form-select-wrapper">
                <select 
                  name="unite" 
                  className="form-select"
                  value={formData.unite}
                  onChange={handleChange}
                  required
                >
                  <option value="m³">m³</option>
                  <option value="tonnes">Tonnes</option>
                  <option value="unites">Unités</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Site / Chantier: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="siteChantier" 
                className="form-select"
                value={formData.siteChantier}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="chantier1">Chantier 1</option>
                <option value="chantier2">Chantier 2</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Date de livraison: <span className="required">*</span>
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
              Mode de transport: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="modeTransport" 
                className="form-select"
                value={formData.modeTransport}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="jtrans">JTRANS camion</option>
                <option value="client">Client vient chercher</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Responsable chantier: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              name="responsable"
              placeholder="Nom + téléphone" 
              className="form-input"
              value={formData.responsable}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Notes / Instructions spéciales</label>
            <textarea 
              name="instructions"
              placeholder="Instructions optionnelles..." 
              className="form-textarea"
              rows="4"
              value={formData.instructions}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="form-label-toggle">
              <input 
                type="checkbox" 
                name="accuséReception"
                checked={formData.accuséReception}
                onChange={handleChange}
                className="toggle-input"
              />
              <span className="toggle-label">Accusé de réception (Valider la réception sur site)</span>
            </label>
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

export default ConstructionOrder
