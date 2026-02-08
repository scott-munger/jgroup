import React from 'react'
import { Link } from 'react-router-dom'
import './OrderForm.css'

function OrderForm({ service, title, backgroundImage }) {
  return (
    <div className="order-page">
      <div className="order-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="order-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="order-title">{title}</h1>
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
              placeholder="Ex: Sarah Pierre" 
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Type de carburant: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select className="form-select">
                <option>Gasoline, Diesel...</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Type de vente: <span className="required">*</span>
            </label>
            <div className="form-select-wrapper">
              <select className="form-select">
                <option>En gros, aux détails...</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field-half">
              <label className="form-label">
                Quantité: <span className="required">*</span>
              </label>
              <div className="quantity-input-wrapper">
                <input 
                  type="text" 
                  value="250 gallons" 
                  className="form-input quantity-input"
                  readOnly
                />
                <div className="quantity-controls">
                  <button className="quantity-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3V9" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button className="quantity-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6H9" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="form-field form-field-half">
              <label className="form-label">
                Destination: <span className="required">*</span>
              </label>
              <div className="form-select-wrapper">
                <select className="form-select">
                  <option>Gonaïves, Gogaz</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Contact joignable: <span className="required">*</span>
            </label>
            <input 
              type="tel" 
              placeholder="Ex: 509 43 34 56 76" 
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Notes supplémentaires</label>
            <textarea 
              placeholder="Laisser nous un détail précis..." 
              className="form-textarea"
              rows="4"
            />
          </div>

          <button className="btn-submit">Envoyer</button>
        </div>
      </div>
    </div>
  )
}

export default OrderForm
