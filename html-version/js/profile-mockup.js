// Profile Mockup Component with Membership Cards
function initProfileMockup() {
  const profileMockup = document.getElementById("profile-mockup");
  if (!profileMockup) return;

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
              <div class="card-name">Sarah Pierre</div>
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
              <div class="card-name">Sarah Pierre</div>
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
              <div class="card-name">Sarah Pierre</div>
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
  `;

  // Animate client count
  animateCounter("client-count", 75, 2000);

  // Initialize card animations
  initCardAnimations();

  // Generate barcodes (simplified version without jsbarcode)
  generateBarcodes();
}

function initCardAnimations() {
  let cardPosition = 0;
  const cards = {
    bronze: document.getElementById("bronze-card"),
    black: document.getElementById("black-card"),
    gold: document.getElementById("gold-card"),
  };

  if (!cards.bronze || !cards.black || !cards.gold) return;

  // Remove all animation classes
  function resetCards() {
    cards.bronze.classList.remove("animate-to-front", "animate-to-back");
    cards.black.classList.remove("animate-to-front", "animate-to-back");
    cards.gold.classList.remove("animate-to-front", "animate-to-back");
  }

  // Apply position classes
  function updateCardPositions() {
    resetCards();

    if (cardPosition === 0) {
      // Bronze front
      cards.bronze.classList.add("animate-to-front");
      cards.black.classList.add("animate-to-back");
      cards.gold.classList.add("animate-to-back");
    } else if (cardPosition === 1) {
      // Black front
      cards.black.classList.add("animate-to-front");
      cards.gold.classList.add("animate-to-back");
      cards.bronze.classList.add("animate-to-back");
    } else {
      // Gold front
      cards.gold.classList.add("animate-to-front");
      cards.bronze.classList.add("animate-to-back");
      cards.black.classList.add("animate-to-back");
    }
  }

  // Initial position
  updateCardPositions();

  // Change position every 4 seconds
  setInterval(() => {
    cardPosition = (cardPosition + 1) % 3;
    updateCardPositions();
  }, 4000);
}

function generateBarcodes() {
  // Simplified barcode generation (visual representation)
  // In a real implementation, you would use a barcode library
  const barcodes = [
    { id: "barcode-1", code: "JGROUP001" },
    { id: "barcode-2", code: "JGROUP002" },
    { id: "barcode-3", code: "JGROUP003" },
  ];

  barcodes.forEach(({ id, code }) => {
    const svg = document.getElementById(id);
    if (!svg) return;

    drawBarcode(svg, code);
  });
}

// Global helper to draw a more realistic-looking barcode
function drawBarcode(svg, code) {
  if (!svg || !code) return;

  // Clear any previous content
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  const width = 220;
  const height = 44;

  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const NS = "http://www.w3.org/2000/svg";

  // Fond très léger, semi‑transparent derrière les barres (verre fumé)
  const background = document.createElementNS(NS, "rect");
  background.setAttribute("x", 0);
  background.setAttribute("y", 0);
  background.setAttribute("width", width);
  background.setAttribute("height", height);
  background.setAttribute("rx", 3);
  background.setAttribute("ry", 3);
  background.setAttribute("fill", "#000000");
  background.setAttribute("fill-opacity", "0.25");
  svg.appendChild(background);

  const margin = 10;
  const availableWidth = width - margin * 2;
  const barHeight = 24; // zone de barres un peu plus compacte pour laisser plus d'espace texte

  // On prépare les barres + petits espaces pour pouvoir les répartir sur 100% de la largeur
  const segments = [];
  const barsPerChar = 3;

  for (let i = 0; i < code.length; i++) {
    const charCode = code.charCodeAt(i);
    for (let j = 0; j < barsPerChar; j++) {
      const isWide = ((charCode >> j) & 1) === 1;
      const weight = isWide ? 2 : 1; // large = 2 unités, fin = 1 unité
      // Segment "barre"
      segments.push({ type: "bar", weight });
      // Petit espace après chaque barre (sauf la toute dernière, ajouté plus bas)
      segments.push({ type: "gap", weight: 0.5 });
    }
  }

  // On retire le dernier "gap" pour ne pas dépasser
  if (segments.length > 0 && segments[segments.length - 1].type === "gap") {
    segments.pop();
  }

  const totalUnits = segments.reduce((sum, s) => sum + s.weight, 0);
  if (totalUnits === 0) return;

  const unitWidth = availableWidth / totalUnits;

  let x = margin;
  segments.forEach((segment) => {
    const segmentWidth = segment.weight * unitWidth;

    if (segment.type === "bar") {
      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("x", x);
      // On remonte légèrement les barres pour créer plus d'espace avec le texte
      rect.setAttribute("y", 6);
      rect.setAttribute("width", segmentWidth);
      rect.setAttribute("height", barHeight);
      // Barres en blanc sur fond de carte sombre
      rect.setAttribute("fill", "#ffffff");
      svg.appendChild(rect);
    }

    x += segmentWidth;
  });

  // Code lisible en dessous des barres, bien centré avec un peu d'espace
  const text = document.createElementNS(NS, "text");
  text.setAttribute("x", width / 2);
  text.setAttribute("y", height - 5);
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("font-size", "8");
  // Texte en blanc pour rester lisible sur la carte
  text.setAttribute("fill", "#ffffff");
  text.textContent = code;
  svg.appendChild(text);
}

// Update components.js to use this function
if (typeof initComponents === "function") {
  const originalInitComponents = initComponents;
  initComponents = function () {
    originalInitComponents();
    initProfileMockup();
  };
}
