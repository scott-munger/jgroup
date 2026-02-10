// Services Component
function renderServices() {
  const servicesSection = document.getElementById("services");

  const services = [
    {
      title: "Construction",
      description:
        "Gestion des engins lourds, matériaux de chantier et livraisons pour vos projets de construction et de fondation.",
      image: "../assets_images/construction.jpeg",
      link: "construction.html",
    },
    {
      title: "Produits Alimentaires",
      description:
        "Approvisionnement et distribution de produits alimentaires pour particuliers, entreprises et collectivités.",
      image:
        "../assets_images/rayonnages-palettes-entrepot-aliments-boissons-jot-l.1.1.avif",
      link: "store.html",
    },
    {
      title: "Carburant",
      description:
        "Vente, stockage et distribution de carburant en gros ou au détail, avec suivi des quantités et des sites.",
      image:
        "../assets_images/pngtree-rear-and-side-view-of-tanker-truck-vehicle-image_15661785.jpg",
      link: "carburant.html",
    },
    {
      title: "Assainissement",
      description:
        "Collecte et transport des déchets avec suivi des camions et validation client de la livraison.",
      image:
        "../assets_images/camions-ordures-ville-quebec-cueillette-ordures-menageres-camion-benne-ville-de-quebec-bacs-ordures-et-recyclage-ville-de-quebec-en-bord-de-ruebas-vert-bac-bleu-64630.avif",
      link: "assainissement.html",
    },
    {
      title: "Matériels & Engins Lourds",
      description:
        "Location et vente de matériels de construction et engins lourds pour vos projets. Excavatrices, bulldozers, grues et plus.",
      image: "../assets_images/construction.jpeg",
      link: "equipment.html",
    },
  ];

  let cardsHTML = `
    <div class="services-container">
      <h2 class="services-title">En savoir plus sur Nos differents services</h2>
      <div class="services-list">
  `;

  services.forEach((service, index) => {
    cardsHTML += `
      <div class="service-card" data-index="${index}">
        <div class="service-card-image">
          <img src="${service.image}" alt="${service.title}" />
          <div class="service-card-overlay">
            <h3 class="service-card-title">${service.title}</h3>
          </div>
        </div>
        <div class="service-card-content">
          <p class="service-card-description">${service.description}</p>
          <a href="${service.link}" class="btn-service">Consulter Plus</a>
        </div>
      </div>
    `;
  });

  cardsHTML += `
      </div>
    </div>
  `;

  servicesSection.innerHTML = cardsHTML;

  // Ajouter l'animation IntersectionObserver
  initializeServiceAnimation();
}

function initializeServiceAnimation() {
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.getAttribute("data-index"));

          setTimeout(() => {
            card.classList.add("card-visible");
          }, index * 150);

          observer.unobserve(card);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px 0px 50px 0px",
    },
  );

  serviceCards.forEach((card) => {
    observer.observe(card);
  });
}

// Initialiser le composant au chargement
document.addEventListener("DOMContentLoaded", renderServices);
