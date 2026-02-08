import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import './Store.css'

function Store() {
  const { addToCart, getCartCount } = useCart()
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    {
      id: 1,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    },
    {
      id: 2,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    },
    {
      id: 3,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    },
    {
      id: 4,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    },
    {
      id: 5,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    },
    {
      id: 6,
      name: 'Riz Bongu',
      price: 5200,
      oldPrice: 6500,
      discount: 25,
      image: '/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif'
    }
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addToCart(product)
  }


  return (
    <div className="store-page">
      <Header />
      <div className="store-header">
        <div className="store-header-bg"></div>
        <div className="store-header-content">
          <Link to="/" className="btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#5630FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <h1 className="store-title">Produits Alimentaires</h1>
      </div>

      <div className="store-search">
        <input 
          type="text" 
          placeholder="Taper le nom du produit reherché" 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-find">Trouver</button>
      </div>

      <div className="store-content">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card card-visible"
              >
              <div className="discount-badge">Réduction de {product.discount}%</div>
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="product-image-placeholder" style={{display: 'none'}}>
                  <div className="rice-bag">
                    <div className="rice-brand">TCHAKO</div>
                    <div className="rice-logo">GF</div>
                    <div className="rice-text">PRODUCT OF USA</div>
                    <div className="rice-text">Long Grain White Rice</div>
                    <div className="rice-sub">RICELAND</div>
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  <span className="current-price">{product.price.toLocaleString()} Gdes</span>
                  <span className="old-price">{product.oldPrice.toLocaleString()} Gdes</span>
                </div>
                <button 
                  className="btn-add-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  + au panier
                </button>
              </div>
            </div>
            ))
          ) : (
            <div className="no-products">
              <p>Aucun produit trouvé</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Store
