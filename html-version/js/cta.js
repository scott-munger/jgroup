// CTA Component (Call To Action)
function renderCTA() {
  const ctaSection = document.getElementById("cta");

  ctaSection.innerHTML = `
    <div class="cta-container">
      <h2 class="cta-title">Prêt à commencer ?</h2>
      <p class="cta-text">Créez votre compte dès maintenant et accédez à tous nos services</p>
      <div class="cta-buttons">
        <a href="store.html" class="btn-cta btn-cta-primary">Nouvelle commande</a>
        <button class="btn-cta">Créer un compte</button>
      </div>
    </div>
  `;
}

// Initialiser le composant au chargement
document.addEventListener("DOMContentLoaded", renderCTA);
