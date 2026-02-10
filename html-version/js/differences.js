// Differences Component
function renderDifferences() {
  const differencesSection = document.getElementById("differences");

  const differences = [
    {
      icon: "../icons/tout.png",
      title: "Service complet",
      description:
        "Une seule plateforme pour gérer construction, carburant, transport, assainissement et social.",
    },
    {
      icon: "../icons/fiabilite.png",
      title: "Fiabilité terrain",
      description:
        "Livraisons, transferts et suivis toujours précis et traçables, même sur mobile.",
    },
    {
      icon: "../icons/fondation.png",
      title: "Engagement social",
      description:
        "Notre fondation soutient le développement éducatif et social des communautés.",
    },
    {
      icon: "../icons/vitesse.png",
      title: "Simplicité & rapidité",
      description:
        "Commandes en quelques clics, suivi en temps réel, validation instantanée.",
    },
  ];

  let cardsHTML = `
    <div class="differences-container">
      <h2 class="differences-title">Ce qui nous rend Different des autres</h2>
      <div class="differences-scroll">
  `;

  differences.forEach((diff) => {
    cardsHTML += `
      <div class="difference-card">
        <div class="difference-icon">
          <img src="${diff.icon}" alt="${diff.title}" />
        </div>
        <h3 class="difference-card-title">${diff.title}</h3>
        <p class="difference-card-description">
          ${diff.description}
        </p>
      </div>
    `;
  });

  cardsHTML += `
      </div>
    </div>
  `;

  differencesSection.innerHTML = cardsHTML;
}

// Initialiser le composant au chargement
document.addEventListener("DOMContentLoaded", renderDifferences);
