// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize header and footer
  initHeader()
  initFooter()
  
  // Initialize navbar
  initNavbar()
  
  // Initialize components (only on home page)
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    initComponents()
  }
  
  // Update cart badge
  cartManager.updateCartBadge()
})
