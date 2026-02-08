import React from 'react'
import './Foundation.css'

function Foundation() {
  return (
    <section className="foundation">
      <div className="foundation-container">
        <h2 className="foundation-title">
          Nous construisons egalement une jeunesse future avec notre fondation.
        </h2>
        <div className="foundation-content">
          <div className="foundation-image">
            <img 
              src="/assets_images/foundation.png" 
              alt="Fondation" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <img 
              src="/assets_images/Solidarite-paix-cohesion.webp" 
              alt="Fondation" 
              className='foundation-image-2'
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          <div className="foundation-text">
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
    </section>
  )
}

export default Foundation
