// Components initialization
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="navbar-container">
      <ul class="navbar-menu" id="navbar-menu">
        <li><a href="/" class="navbar-link" data-route="/">Accueil</a></li>
        <li><a href="/store" class="navbar-link" data-route="/store">Produits Alimentaires</a></li>
        <li><a href="/construction" class="navbar-link" data-route="/construction">Construction</a></li>
        <li><a href="/carburant" class="navbar-link" data-route="/carburant">Carburant</a></li>
        <li><a href="/assainissement" class="navbar-link" data-route="/assainissement">Assainissement</a></li>
        <li><a href="/equipment" class="navbar-link" data-route="/equipment">Matériels & Engins Lourds</a></li>
        <li><a href="/profile" class="navbar-link" data-route="/profile">Mon Profil</a></li>
        <li><a href="/cart" class="navbar-link" data-route="/cart">Panier</a></li>
      </ul>
    </div>
  `;

  // Create overlay element if it doesn't exist
  if (!document.querySelector(".navbar-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "navbar-overlay";
    document.body.appendChild(overlay);
  }

  // Ensure navbar is hidden by default on mobile
  if (window.innerWidth <= 767) {
    navbar.style.display = "none";
  }

  // Close navbar when clicking on a link
  const navMenu = document.getElementById("navbar-menu");
  if (navMenu) {
    navMenu.querySelectorAll(".navbar-link").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          if (navMenu) navMenu.classList.remove("active");
          if (navbar) navbar.style.display = "none";
          const menuToggle = document.getElementById("menu-toggle");
          if (menuToggle) menuToggle.classList.remove("active");
          // Remove overlay
          const overlay = document.querySelector(".navbar-overlay");
          if (overlay) overlay.remove();
        }, 100);
      });
    });
  }
}

function initComponents() {
  // Initialize Services
  initServices();

  // Initialize Differences
  initDifferences();

  // Initialize Foundation
  initFoundation();

  // Initialize CTA
  initCTA();

  // Initialize Hero animation
  initHeroAnimation();

  // Initialize Profile Mockup (loaded from profile-mockup.js)
  if (typeof initProfileMockup === "function") {
    initProfileMockup();
  }
}

function initProfileMockup() {
  const profileMockup = document.getElementById("profile-mockup");
  if (!profileMockup) return;

  // This will be loaded from a separate component file
  // For now, we'll add a placeholder
  profileMockup.innerHTML = `
    <div class="profile-mockup-container">
      <h2 class="profile-mockup-title">Un compte simple, des avantages concrets</h2>
      <div class="profile-mockup-stats">
        <div class="stat-item">
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
      <!-- Membership cards will be added here -->
    </div>
  `;

  // Animate client count
  animateCounter("client-count", 75, 2000);
}

function initServices() {
  const servicesSection = document.getElementById("services");
  if (!servicesSection) {
    console.warn("Services section not found");
    return;
  }

  const services = [
    {
      title: "Construction",
      description:
        "Gestion des engins lourds, matériaux de chantier et livraisons pour vos projets de construction et de fondation.",
      image: "/assets_images/construction.jpeg",
      link: "/construction",
    },
    {
      title: "Produits Alimentaires",
      description:
        "Approvisionnement et distribution de produits alimentaires pour particuliers, entreprises et collectivités.",
      image:
        "/assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif",
      link: "/store",
    },
    {
      title: "Carburant",
      description:
        "Vente, stockage et distribution de carburant en gros ou au détail, avec suivi des quantités et des sites.",
      image:
        "/assets_images/pngtree-rear-and-side-view-of-tanker-truck-vehicle-image_15661785.jpg",
      link: "/carburant",
    },
    {
      title: "Assainissement",
      description:
        "Collecte et transport des déchets avec suivi des camions et validation client de la livraison.",
      image:
        "/assets_images/camions-ordures-ville-quebec-cueillette-ordures-menageres-camion-benne-ville-de-quebec-bacs-ordures-et-recyclage-ville-de-quebec-en-bord-de-ruebas-vert-bac-bleu-64630.avif",
      link: "/assainissement",
    },
    {
      title: "Matériels & Engins Lourds",
      description:
        "Location et vente de matériels de construction et engins lourds pour vos projets. Excavatrices, bulldozers, grues et plus.",
      image: "/assets_images/construction.jpeg",
      link: "/equipment",
    },
  ];

  servicesSection.innerHTML = `
    <div class="services-container">
      <h2 class="services-title">En savoir plus sur Nos differents services</h2>
      <div class="services-list">
        ${services
          .map(
            (service, index) => `
          <div class="service-card" data-index="${index}">
            <div class="service-card-image">
              <img src="${service.image}" alt="${service.title}" />
              <div class="service-card-overlay">
                <h3 class="service-card-title">${service.title}</h3>
              </div>
            </div>
            <div class="service-card-content">
              <p class="service-card-description">${service.description}</p>
              <a href="${service.link}" class="btn-service" data-route="${service.link}">Consulter Plus</a>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  // Animate cards on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("card-visible");
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "50px 0px 50px 0px" },
  );

  servicesSection.querySelectorAll(".service-card").forEach((card) => {
    observer.observe(card);
  });
}

function initDifferences() {
  const differencesSection = document.getElementById("differences");
  if (!differencesSection) {
    console.warn("Differences section not found");
    return;
  }
  console.log("✅ Initializing Differences section");

  const differences = [
    {
      icon: "icons/tout.png",
      title: "Service complet",
      description:
        "Une seule plateforme pour gérer construction, carburant, transport, assainissement et social.",
    },
    {
      icon: "icons/fiabilite.png",
      title: "Fiabilité terrain",
      description:
        "Livraisons, transferts et suivis toujours précis et traçables, même sur mobile.",
    },
    {
      icon: "icons/fondation.png",
      title: "Engagement social",
      description:
        "Notre fondation soutient le développement éducatif et social des communautés.",
    },
    {
      icon: "icons/vitesse.png",
      title: "Simplicité & rapidité",
      description:
        "Commandes en quelques clics, suivi en temps réel, validation instantanée.",
    },
  ];

  differencesSection.innerHTML = `
    <div class="differences-container">
      <h2 class="differences-title">Ce qui nous rend Different des autres</h2>
      <div class="differences-scroll">
        ${differences
          .map(
            (diff) => `
          <div class="difference-card">
            <div class="difference-icon">
              <img src="${diff.icon}" alt="${diff.title}" />
            </div>
            <h3 class="difference-card-title">${diff.title}</h3>
            <p class="difference-card-description">${diff.description}</p>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function initFoundation() {
  const foundationSection = document.getElementById("foundation");
  if (!foundationSection) {
    console.warn("Foundation section not found");
    return;
  }
  console.log("✅ Initializing Foundation section");

  foundationSection.innerHTML = `
    <div class="foundation-container">
      <h2 class="foundation-title">
        Nous construisons egalement une jeunesse future avec notre fondation.
      </h2>
      <div class="foundation-content">
        <div class="foundation-image">
          <img src="assets_images/foundation.png" alt="Fondation" onerror="this.style.display='none'" />
        </div>
        <img src="assets_images/Solidarite-paix-cohesion.webp" alt="Fondation" class="foundation-image-2" onerror="this.style.display='none'" />
        <div class="foundation-text">
          <p>
            Notre fondation s'engage dans le développement social et éducatif de la jeunesse. 
            Nous offrons un soutien académique et éducatif, accompagnons les étudiants dans 
            leur parcours, et proposons des bourses et un système en ligne pour faciliter 
            l'accès à l'éducation.
          </p>
          <p>
            À travers nos programmes, nous construisons un avenir meilleur pour les jeunes 
            générations, en leur offrant les outils et les opportunités nécessaires pour 
            réussir dans leurs études et leur développement personnel.
          </p>
        </div>
      </div>
    </div>
  `;
}

function initCTA() {
  const ctaSection = document.getElementById("cta");
  if (!ctaSection) {
    console.warn("CTA section not found");
    return;
  }

  ctaSection.innerHTML = `
    <div class="cta-container">
      <h2 class="cta-title">Prêt à commencer ?</h2>
      <p class="cta-text">Créez votre compte dès maintenant et accédez à tous nos services</p>
      <div class="cta-buttons">
        <a href="/store" class="btn-cta btn-cta-primary" data-route="/store">Nouvelle commande</a>
        <a href="/profile" class="btn-cta" data-route="/profile">Créer un compte</a>
      </div>
    </div>
  `;
}

function initHeroAnimation() {
  const statNumber = document.getElementById("hero-stat-number");
  if (statNumber) {
    animateCounter("hero-stat-number", 10, 1000);
  }
}

// Utility function to animate counters
function animateCounter(elementId, target, duration) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              element.textContent = target;
              clearInterval(timer);
            } else {
              element.textContent = Math.floor(current);
            }
          }, 16);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(element);
}
