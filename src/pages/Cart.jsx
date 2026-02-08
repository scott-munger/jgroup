import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartCount } = useCart()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCheckout = () => {
    setShowConfirmation(true)
    clearCart()
  }

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-header">
        <Link to="/store" className="btn-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <h1 className="cart-title">Panier</h1>
        {cartItems.length > 0 && (
          <button className="btn-clear" onClick={clearCart}>Vider</button>
        )}
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Votre panier est vide</h2>
            <p>Ajoutez des produits depuis la boutique</p>
            <Link to="/store" className="btn-shop">Aller à la boutique</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img 
                      src={item.image || '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'} 
                      alt={item.name}
                    />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="cart-item-price">{item.price.toLocaleString()} Gdes</div>
                    <div className="cart-item-quantity">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <div className="item-total-price">{(item.price * item.quantity).toLocaleString()} Gdes</div>
                    <button 
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{total.toLocaleString()} Gdes</span>
              </div>
              <div className="summary-row">
                <span>Total</span>
                <span className="total-price">{total.toLocaleString()} Gdes</span>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>Passer la commande</button>
            </div>
          </>
        )}
      </div>

      {showConfirmation && (
        <div className="confirmation-overlay" onClick={() => setShowConfirmation(false)}>
          <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirmation-icon">✓</div>
            <h2 className="confirmation-title">Commande confirmée !</h2>
            <p className="confirmation-message">
              Votre commande a été passée avec succès. Nous vous contacterons bientôt pour la livraison.
            </p>
            <Link to="/store" className="btn-confirmation">
              Retour à la boutique
            </Link>
            <button className="btn-close-confirmation" onClick={() => setShowConfirmation(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
