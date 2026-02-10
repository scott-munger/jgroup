// Foundation Component
function renderFoundation() {
  const foundationSection = document.getElementById("foundation");

  foundationSection.innerHTML = `
    <div class="foundation-container">
      <h2 class="foundation-title">
        Nous construisons egalement une jeunesse future avec notre fondation.
      </h2>
      <div class="foundation-content">
        <div class="foundation-image">
          <img 
            src="../assets_images/foundation.png" 
            alt="Fondation" 
            onerror="this.style.display='none'"
          />
        </div>
        <img 
          src="../assets_images/Solidarite-paix-cohesion.webp" 
          alt="Fondation" 
          class="foundation-image-2"
          onerror="this.style.display='none'"
        />
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

// Initialiser le composant au chargement
document.addEventListener("DOMContentLoaded", renderFoundation);
