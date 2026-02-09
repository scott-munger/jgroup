// Header Component
function initHeader() {
  const header = document.getElementById('header')
  if (!header) return

  const currentPath = window.location.pathname
  
  header.innerHTML = `
    <div class="header-container">
      <div class="header-left">
        <button class="btn-menu-header" id="menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="/" class="logo" data-route="/">JGroup Entreprise</a>
        <nav class="header-nav">
          <a href="/store" class="header-nav-link ${currentPath === '/store' ? 'active' : ''}" data-route="/store">
            Produits Alimentaires
          </a>
          <a href="/construction" class="header-nav-link ${currentPath === '/construction' ? 'active' : ''}" data-route="/construction">
            Construction
          </a>
          <a href="/carburant" class="header-nav-link ${currentPath === '/carburant' ? 'active' : ''}" data-route="/carburant">
            Carburant
          </a>
          <a href="/assainissement" class="header-nav-link ${currentPath === '/assainissement' ? 'active' : ''}" data-route="/assainissement">
            Assainissement
          </a>
          <a href="/equipment" class="header-nav-link ${currentPath === '/equipment' ? 'active' : ''}" data-route="/equipment">
            Matériels
          </a>
          <a href="/profile" class="header-nav-link ${currentPath === '/profile' ? 'active' : ''}" data-route="/profile">
            Mon Profil
          </a>
        </nav>
      </div>
      <div class="header-actions">
        <div class="language-dropdown-container">
          <button class="btn-language" id="language-toggle" aria-label="Changer la langue">
            <span class="flag-emoji">🇫🇷</span>
            <span class="language-text">FR</span>
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="language-dropdown" id="language-dropdown" style="display: none;">
            <button class="language-option active" data-lang="fr">
              <span class="flag-emoji">🇫🇷</span>
              <span class="language-name">Français</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#5630FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="language-option" data-lang="en">
              <span class="flag-emoji">🇬🇧</span>
              <span class="language-name">English</span>
            </button>
            <button class="language-option" data-lang="ht">
              <span class="flag-emoji">🇭🇹</span>
              <span class="language-name">Kreyòl</span>
            </button>
          </div>
        </div>
        <a href="/cart" class="btn-cart-header" data-route="/cart">
          <img src="../icons/cart.svg" alt="Panier" class="cart-icon-img" />
          <span class="cart-badge-header" style="display: none;">0</span>
        </a>
      </div>
    </div>
  `

  // Menu toggle - Setup after navbar is initialized
  setTimeout(() => {
    setupMenuToggle()
  }, 100)
}

function setupMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle')
  if (!menuToggle) return
  
  // Remove all existing event listeners by cloning
  const newToggle = menuToggle.cloneNode(true)
  menuToggle.parentNode.replaceChild(newToggle, menuToggle)
  
  newToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()
    const navbar = document.getElementById('navbar')
    const navMenu = document.getElementById('navbar-menu')
    const overlay = document.querySelector('.navbar-overlay')
    
    if (!navbar || !navMenu) {
      // Ensure navbar is initialized
      if (typeof initNavbar === 'function') {
        initNavbar()
        setTimeout(() => setupMenuToggle(), 50)
      }
      return
    }
    
    const isActive = navMenu.classList.contains('active')
    if (isActive) {
      // Close menu
      navMenu.classList.remove('active')
      newToggle.classList.remove('active')
      if (window.innerWidth <= 767) {
        navbar.style.display = 'none'
        if (overlay) overlay.style.display = 'none'
      }
    } else {
      // Open menu
      if (window.innerWidth <= 767) {
        navbar.style.display = 'block'
        if (overlay) overlay.style.display = 'block'
      }
      navMenu.classList.add('active')
      newToggle.classList.add('active')
    }
  })
  
  // Close menu when clicking overlay
  const overlay = document.querySelector('.navbar-overlay')
  if (overlay) {
    overlay.addEventListener('click', () => {
      const navbar = document.getElementById('navbar')
      const navMenu = document.getElementById('navbar-menu')
      const toggle = document.getElementById('menu-toggle')
      
      if (navMenu) navMenu.classList.remove('active')
      if (navbar) navbar.style.display = 'none'
      if (toggle) toggle.classList.remove('active')
      if (overlay) overlay.style.display = 'none'
    })
  }
  
  // Close menu when clicking outside
  const closeMenuHandler = (e) => {
    const navbar = document.getElementById('navbar')
    const navMenu = document.getElementById('navbar-menu')
    const toggle = document.getElementById('menu-toggle')
    const overlay = document.querySelector('.navbar-overlay')
    
    if (navbar && navMenu && toggle && 
        navMenu.classList.contains('active') &&
        !navbar.contains(e.target) && 
        !toggle.contains(e.target) &&
        !overlay?.contains(e.target)) {
      navMenu.classList.remove('active')
      navbar.style.display = 'none'
      toggle.classList.remove('active')
      if (overlay) overlay.style.display = 'none'
    }
  }
  
  // Remove old listener if exists
  document.removeEventListener('click', closeMenuHandler)
  document.addEventListener('click', closeMenuHandler)
  

  // Language dropdown
  const languageToggle = document.getElementById('language-toggle')
  const languageDropdown = document.getElementById('language-dropdown')
  
  if (languageToggle && languageDropdown) {
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation()
      const isOpen = languageDropdown.style.display !== 'none'
      languageDropdown.style.display = isOpen ? 'none' : 'block'
      languageToggle.querySelector('.dropdown-arrow').classList.toggle('open', !isOpen)
    })

    document.addEventListener('click', () => {
      languageDropdown.style.display = 'none'
      languageToggle.querySelector('.dropdown-arrow').classList.remove('open')
    })

    languageDropdown.addEventListener('click', (e) => {
      e.stopPropagation()
    })

    // Language selection
    languageDropdown.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang')
        // TODO: Implement language change
        languageDropdown.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('active'))
        option.classList.add('active')
        languageDropdown.style.display = 'none'
      })
    })
  }

  // Update cart badge
  cartManager.updateCartBadge()
}
