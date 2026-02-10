// Mobile Navbar Component
function renderNavbar() {
  const navbarSection = document.getElementById("navbar");

  const currentPath = window.location.pathname;

  const isActive = (href) => {
    return (
      currentPath.includes(href) ||
      (currentPath === "/" && href === "index.html") ||
      (currentPath.endsWith("/") && href === "index.html")
    );
  };

  navbarSection.innerHTML = `
    <div class="navbar-container">
      <button class="navbar-toggle" id="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="navbar-menu" id="navbar-menu">
        <li>
          <a 
            href="index.html" 
            class="navbar-link ${isActive("index.html") ? "active" : ""}"
          >
            Accueil
          </a>
        </li>
        <li>
          <a 
            href="store.html" 
            class="navbar-link ${isActive("store.html") ? "active" : ""}"
          >
            Produits Alimentaires
          </a>
        </li>
        <li>
          <a 
            href="construction.html" 
            class="navbar-link ${isActive("construction.html") ? "active" : ""}"
          >
            Construction
          </a>
        </li>
        <li>
          <a 
            href="carburant.html" 
            class="navbar-link ${isActive("carburant.html") ? "active" : ""}"
          >
            Carburant
          </a>
        </li>
        <li>
          <a 
            href="assainissement.html" 
            class="navbar-link ${isActive("assainissement.html") ? "active" : ""}"
          >
            Assainissement
          </a>
        </li>
        <li>
          <a 
            href="equipment.html" 
            class="navbar-link ${isActive("equipment.html") ? "active" : ""}"
          >
            Matériels & Engins Lourds
          </a>
        </li>
        <li>
          <a 
            href="profile.html" 
            class="navbar-link ${isActive("profile.html") ? "active" : ""}"
          >
            Mon Profil
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-overlay" id="navbar-overlay"></div>
  `;

  // Initialiser les contrôles du menu
  initializeNavbarToggle();
}

function initializeNavbarToggle() {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");
  const overlay = document.getElementById("navbar-overlay");
  const links = menu.querySelectorAll(".navbar-link");

  if (!toggle || !menu || !overlay) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.style.display = menu.classList.contains("active")
      ? "block"
      : "none";
  });

  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    overlay.style.display = "none";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("active");
      overlay.style.display = "none";
    });
  });
}

// Initialiser le composant au chargement
document.addEventListener("DOMContentLoaded", renderNavbar);
