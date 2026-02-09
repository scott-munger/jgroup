// Footer Component
function initFooter() {
  const footer = document.getElementById('footer')
  if (!footer) return

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-company">JGroup Entreprise</h3>
        <div class="footer-services">
          <h4 class="footer-heading">Services</h4>
          <ul class="footer-list">
            <li><a href="/construction" class="footer-link" data-route="/construction">Construction</a></li>
            <li><a href="/carburant" class="footer-link" data-route="/carburant">Carburant</a></li>
            <li><a href="/assainissement" class="footer-link" data-route="/assainissement">Assainissement</a></li>
            <li><a href="/store" class="footer-link" data-route="/store">Provision alimentaire</a></li>
            <li><a href="/equipment" class="footer-link" data-route="/equipment">Matériels & Engins Lourds</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Accès rapide</h4>
        <ul class="footer-list">
          <li><a href="/store" class="footer-link" data-route="/store">Commander</a></li>
          <li><a href="/profile" class="footer-link" data-route="/profile">Suivi des commandes</a></li>
          <li><a href="/profile" class="footer-link" data-route="/profile">Comptes clients & fournisseurs</a></li>
          <li><a href="/profile" class="footer-link" data-route="/profile">Rapports</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <ul class="footer-list">
          <li>Cap Haïtien, #37</li>
          <li><a href="tel:+50943234507" class="footer-link">(509) 43 23 45 07</a></li>
          <li><a href="mailto:jgroup@gmail.com" class="footer-link">jgroup@gmail.com</a></li>
        </ul>
        <h4 class="footer-heading footer-heading-legal">Légal</h4>
        <ul class="footer-list">
          <li><a href="/mentions-legales" class="footer-link" data-route="/mentions-legales">Mentions légales</a></li>
          <li><a href="/politique-confidentialite" class="footer-link" data-route="/politique-confidentialite">Politique de confidentialité</a></li>
          <li><a href="/conditions-utilisation" class="footer-link" data-route="/conditions-utilisation">Conditions d'utilisation</a></li>
        </ul>
      </div>
    </div>
  `
}
