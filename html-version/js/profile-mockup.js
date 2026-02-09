// Profile Mockup Component with Membership Cards
function initProfileMockup() {
  const profileMockup = document.getElementById('profile-mockup')
  if (!profileMockup) return

  profileMockup.innerHTML = `
    <div class="profile-mockup-container">
      <h2 class="profile-mockup-title">Un compte simple, des avantages concrets</h2>
      
      <div class="profile-mockup-stats">
        <div class="stat-item" id="client-stat">
          <div class="stat-number" id="client-count">0</div>
          <div class="stat-label">Clients actifs</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">25%</div>
          <div class="stat-label">Réduction maximale Gold</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5</div>
          <div class="stat-label">Services disponibles</div>
        </div>
      </div>
      
      <div class="profile-mockup-content">
        <div class="feature-cards">
          <div class="membership-cards-stack">
            <div class="membership-card bronze-card" id="bronze-card">
              <div class="card-type">BRONZE</div>
              <div class="card-brand">JGroup</div>
              <div class="card-name">Bassem Ali Kamal</div>
              <div class="card-barcode">
                <svg class="barcode-svg" id="barcode-1"></svg>
              </div>
              <div class="card-bottom-right">
                <div class="card-discount">15% De Reduction</div>
              </div>
            </div>
            
            <div class="membership-card black-card" id="black-card">
              <div class="card-type">SILVER</div>
              <div class="card-brand">JGroup</div>
              <div class="card-name">Bassem Ali Kamal</div>
              <div class="card-barcode">
                <svg class="barcode-svg" id="barcode-2"></svg>
              </div>
              <div class="card-bottom-right">
                <div class="card-discount">20% De Reduction</div>
              </div>
            </div>
            
            <div class="membership-card gold-card" id="gold-card">
              <div class="card-type">GOLD</div>
              <div class="card-brand">JGroup</div>
              <div class="card-name">Bassem Ali Kamal</div>
              <div class="card-barcode">
                <svg class="barcode-svg" id="barcode-3"></svg>
              </div>
              <div class="card-bottom-right">
                <div class="card-discount">25% De Reduction</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="profile-mockup-benefits">
          <ul class="benefits-list">
            <li class="benefit-item">Accédez à votre solde,</li>
            <li class="benefit-item">suivez vos commandes</li>
            <li class="benefit-item">bénéficiez d'avantages réservés aux clients inscrits.</li>
          </ul>
          <a href="/profile" class="btn-secondary" data-route="/profile">Créer un compte</a>
        </div>
      </div>
    </div>
  `

  // Animate client count
  animateCounter('client-count', 75, 2000)

  // Initialize card animations
  initCardAnimations()

  // Generate barcodes (simplified version without jsbarcode)
  generateBarcodes()
}

function initCardAnimations() {
  let cardPosition = 0
  const cards = {
    bronze: document.getElementById('bronze-card'),
    black: document.getElementById('black-card'),
    gold: document.getElementById('gold-card')
  }

  if (!cards.bronze || !cards.black || !cards.gold) return

  // Remove all animation classes
  function resetCards() {
    cards.bronze.classList.remove('animate-to-front', 'animate-to-back')
    cards.black.classList.remove('animate-to-front', 'animate-to-back')
    cards.gold.classList.remove('animate-to-front', 'animate-to-back')
  }

  // Apply position classes
  function updateCardPositions() {
    resetCards()
    
    if (cardPosition === 0) {
      // Bronze front
      cards.bronze.classList.add('animate-to-front')
      cards.black.classList.add('animate-to-back')
      cards.gold.classList.add('animate-to-back')
    } else if (cardPosition === 1) {
      // Black front
      cards.black.classList.add('animate-to-front')
      cards.gold.classList.add('animate-to-back')
      cards.bronze.classList.add('animate-to-back')
    } else {
      // Gold front
      cards.gold.classList.add('animate-to-front')
      cards.bronze.classList.add('animate-to-back')
      cards.black.classList.add('animate-to-back')
    }
  }

  // Initial position
  updateCardPositions()

  // Change position every 4 seconds
  setInterval(() => {
    cardPosition = (cardPosition + 1) % 3
    updateCardPositions()
  }, 4000)
}

function generateBarcodes() {
  // Simplified barcode generation (visual representation)
  // In a real implementation, you would use a barcode library
  const barcodes = [
    { id: 'barcode-1', code: 'JGROUP001' },
    { id: 'barcode-2', code: 'JGROUP002' },
    { id: 'barcode-3', code: 'JGROUP003' }
  ]

  barcodes.forEach(({ id, code }) => {
    const svg = document.getElementById(id)
    if (!svg) return

    // Create simple barcode pattern (visual representation)
    const width = 200
    const height = 35
    svg.setAttribute('width', width)
    svg.setAttribute('height', height)
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

    // Generate bars based on code
    let x = 0
    const barWidth = 2
    const spacing = 1

    for (let i = 0; i < code.length; i++) {
      const char = code.charCodeAt(i)
      const barHeight = height * (0.3 + (char % 70) / 100)
      
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', x)
      rect.setAttribute('y', (height - barHeight) / 2)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('height', barHeight)
      rect.setAttribute('fill', '#ffffff')
      svg.appendChild(rect)

      x += barWidth + spacing
    }
  })
}

// Update components.js to use this function
if (typeof initComponents === 'function') {
  const originalInitComponents = initComponents
  initComponents = function() {
    originalInitComponents()
    initProfileMockup()
  }
}
