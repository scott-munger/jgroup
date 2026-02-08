import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './OrderForm.css'

function AssainissementOrder() {
  const [formData, setFormData] = useState({
    nomComplet: '',
    typeService: '',
    quantite: '',
    unite: 'm³',
    siteCollecte: '',
    dateHeure: '',
    camion: '',
    responsable: '',
    validationLivraison: false,
    notes: ''
  })

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const checkField = (field, isNumeric = false) => {
      // Vérifier null/undefined
      if (field === null || field === undefined) return false
      
      // Convertir en string et trim
      const str = String(field).trim()
      
      // Vérifier que ce n'est pas vide
      if (str === '') return false
      
      // Pour les champs numériques uniquement, vérifier que c'est un nombre valide > 0
      if (isNumeric) {
        const num = Number(str)
        if (isNaN(num) || num <= 0) return false
      }
      
      return true
    }
    
    const allFieldsFilled = 
      checkField(formData.nomComplet) &&
      checkField(formData.typeService) &&
      checkField(formData.quantite, true) && // Champ numérique
      checkField(formData.unite) &&
      checkField(formData.siteCollecte) &&
      checkField(formData.dateHeure) &&
      checkField(formData.camion) &&
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
      <div className="order-header" style={{ backgroundImage: `url(/assets_images/camions-ordures-ville-quebec-cueillette-ordures-menageres-camion-benne-ville-de-quebec-bacs-ordures-et-recyclage-ville-de-quebec-en-bord-de-ruebas-vert-bac-bleu-64630.avif)` }}>
        <div className="order-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="order-title">Assainissement</h1>
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
              Type de service: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="typeService" 
                className="form-select"
                value={formData.typeService}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="collecte">Collecte</option>
                <option value="transport">Transport</option>
                <option value="vidange">Vidange</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field-half">
              <label className="form-label">
                Quantité / Volume: <span className="required">*</span>
              </label>
              <input 
                type="number" 
                name="quantite"
                placeholder="Ex: 5" 
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
                  <option value="camions">Nombre de camions</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Site / Lieu de collecte: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              name="siteCollecte"
              placeholder="Adresse précise du site" 
              className="form-input"
              value={formData.siteCollecte}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Date et heure: <span className="required">*</span>
            </label>
            <input 
              type="datetime-local" 
              name="dateHeure"
              className="form-input"
              value={formData.dateHeure}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Camion attribué: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select 
                name="camion" 
                className="form-select"
                value={formData.camion}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="camion1">Camion 1</option>
                <option value="camion2">Camion 2</option>
                <option value="camion3">Camion 3</option>
                <option value="flotte">Flotte disponible</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Responsable site / client: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              name="responsable"
              placeholder="Nom et téléphone" 
              className="form-input"
              value={formData.responsable}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label-toggle">
              <input 
                type="checkbox" 
                name="validationLivraison"
                checked={formData.validationLivraison}
                onChange={handleChange}
                className="toggle-input"
              />
              <span className="toggle-label">Validation à la livraison (Check client et photo optionnelle)</span>
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

export default AssainissementOrder
