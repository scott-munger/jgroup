// Simple Router System
class Router {
  constructor() {
    this.routes = {
      '/': null, // Home page content is already in index.html
      '/index.html': null,
      '/store': 'pages/store.html',
      '/equipment': 'pages/equipment.html',
      '/construction': 'pages/construction.html',
      '/carburant': 'pages/carburant.html',
      '/assainissement': 'pages/assainissement.html',
      '/profile': 'pages/profile.html',
      '/cart': 'pages/cart.html',
      '/mentions-legales': 'pages/mentions-legales.html',
      '/politique-confidentialite': 'pages/politique-confidentialite.html',
      '/conditions-utilisation': 'pages/conditions-utilisation.html'
    }
    
    this.init()
  }

  init() {
    // Handle initial load
    this.handleRoute()
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.handleRoute()
    })
    
    // Handle link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-route]')
      if (link) {
        e.preventDefault()
        const route = link.getAttribute('data-route')
        this.navigate(route)
      }
    })
  }

  navigate(path) {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }

  async handleRoute() {
    let path = window.location.pathname
    // Remove /html-version if present
    path = path.replace(/^\/html-version/, '') || '/'
    // Remove trailing slash except for root
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1)
    }
    
    const route = this.routes[path]
    
    try {
      // If it's the home page, don't replace content, just init scripts
      if (path === '/' || path === '/index.html' || route === null) {
        this.initPageScripts('/')
        return
      }
      
      if (!route) {
        throw new Error('Route not found')
      }
      
      const response = await fetch(route)
      if (!response.ok) {
        throw new Error('Page not found')
      }
      
      const html = await response.text()
      const mainContent = document.getElementById('main-content')
      
      if (mainContent) {
        mainContent.innerHTML = html
        
        // Execute inline scripts immediately
        const scripts = mainContent.querySelectorAll('script')
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script')
          if (oldScript.src) {
            newScript.src = oldScript.src
          } else {
            newScript.textContent = oldScript.textContent
          }
          document.body.appendChild(newScript)
          oldScript.remove()
        })
        
        // Reinitialize scripts for the new page
        this.initPageScripts(path)
      }
    } catch (error) {
      console.error('Error loading route:', error)
      // Fallback to home
      if (path !== '/' && path !== '/index.html') {
        window.history.pushState({}, '', '/')
        this.handleRoute()
      }
    }
  }

  initPageScripts(path) {
    // Reinitialize navbar FIRST (before header)
    if (typeof initNavbar === 'function') {
      initNavbar()
    }
    // Then header and footer
    if (typeof initHeader === 'function') {
      initHeader()
    }
    if (typeof initFooter === 'function') {
      initFooter()
    }
    
    // Initialize page-specific scripts after a short delay to ensure DOM is ready
    setTimeout(() => {
      if (path === '/store' || path.includes('store')) {
        // Execute script in the loaded HTML
        const scripts = document.querySelectorAll('#main-content script')
        scripts.forEach(script => {
          if (script.textContent.includes('initStorePage')) {
            eval(script.textContent)
          }
        })
        if (typeof initStorePage === 'function') {
          initStorePage()
        }
      } else if (path === '/equipment' || path.includes('equipment')) {
        // Execute script in the loaded HTML
        const scripts = document.querySelectorAll('#main-content script')
        scripts.forEach(script => {
          if (script.textContent.includes('initEquipmentPage')) {
            eval(script.textContent)
          }
        })
        if (typeof initEquipmentPage === 'function') {
          initEquipmentPage()
        }
      } else if (path === '/cart' || path.includes('cart')) {
        if (typeof initCartPage === 'function') {
          initCartPage()
        }
      } else if (path === '/profile' || path.includes('profile')) {
        // Execute profile scripts
        const scripts = document.querySelectorAll('#main-content script')
        scripts.forEach(script => {
          eval(script.textContent)
        })
        // Explicitly call initProfilePage after scripts are loaded
        setTimeout(() => {
          if (typeof initProfilePage === 'function') {
            initProfilePage()
          } else if (typeof initProfileCards === 'function') {
            initProfileCards()
            if (typeof initOrderHistory === 'function') {
              initOrderHistory()
            }
          }
        }, 100)
      } else if (path === '/' || path === '/index.html' || !path.includes('/pages/')) {
        // Home page - initialize components
        if (typeof initComponents === 'function') {
          initComponents()
        }
        if (typeof initProfileMockup === 'function') {
          initProfileMockup()
        }
      }
    }, 200)
  }
}

// Initialize router
const router = new Router()
