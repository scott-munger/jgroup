// Cart Management System
class CartManager {
  constructor() {
    this.cart = this.loadCart()
    this.updateCartBadge()
  }

  loadCart() {
    const cartData = localStorage.getItem('jgroup_cart')
    return cartData ? JSON.parse(cartData) : []
  }

  saveCart() {
    localStorage.setItem('jgroup_cart', JSON.stringify(this.cart))
    this.updateCartBadge()
  }

  addToCart(item) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id && cartItem.type === item.type)
    
    if (existingItem) {
      existingItem.quantity += item.quantity || 1
    } else {
      this.cart.push({
        ...item,
        quantity: item.quantity || 1
      })
    }
    
    this.saveCart()
    return this.cart
  }

  removeFromCart(itemId, itemType) {
    this.cart = this.cart.filter(item => !(item.id === itemId && item.type === itemType))
    this.saveCart()
    return this.cart
  }

  updateQuantity(itemId, itemType, quantity) {
    const item = this.cart.find(cartItem => cartItem.id === itemId && cartItem.type === itemType)
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(itemId, itemType)
      } else {
        item.quantity = quantity
        this.saveCart()
      }
    }
    return this.cart
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + (item.quantity || 1), 0)
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => {
      const price = item.price || item.pricePerHour || 0
      return total + (price * (item.quantity || 1))
    }, 0)
  }

  clearCart() {
    this.cart = []
    this.saveCart()
  }

  updateCartBadge() {
    const badge = document.querySelector('.cart-badge-header')
    const count = this.getCartCount()
    
    if (badge) {
      if (count > 0) {
        badge.textContent = count
        badge.style.display = 'block'
      } else {
        badge.style.display = 'none'
      }
    }
  }
}

// Global cart instance
const cartManager = new CartManager()
