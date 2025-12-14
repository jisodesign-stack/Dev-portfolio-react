/**
 * @file Portfolio.js
 * @description Page Portfolio - Galerie des réalisations
 * Affiche les 6 projets sous forme de cards avec images
 */

// ============================================
// IMPORTS
// ============================================

// Styles de la page
import './Portfolio.css';

// ============================================
// DONNÉES
// ============================================

/**
 * Liste des projets du portfolio
 * @type {Array<{image: string, title: string, description: string, techno: string, link: string}>}
 */
const PROJECTS_DATA = [
  {
    image: '/images/portfolio/fresh-food.jpg',
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    techno: 'Site réalisé avec PHP et MySQL',
    link: '#'
  },
  {
    image: '/images/portfolio/restaurant-japonais.jpg',
    title: 'Restaurant Akira',
    description: 'Site de vente de produits frais en ligne',
    techno: 'Site réalisé avec WordPress',
    link: '#'
  },
  {
    image: '/images/portfolio/espace-bien-etre.jpg',
    title: 'Espace bien-être',
    description: 'Site de vente de produits frais en ligne',
    techno: 'Site réalisé avec LARAVEL',
    link: '#'
  },
  {
    image: '/images/portfolio/seo.jpg',
    title: 'SEO',
    description: "Amélioration du référencement d'un site e-commerce",
    techno: 'Utilisation des outils SEO',
    link: '#'
  },
  {
    image: '/images/portfolio/coder.jpg',
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    techno: 'PHP - SYMFONY',
    link: '#'
  },
  {
    image: '/images/portfolio/screens.jpg',
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    techno: 'Réalisé avec FIGMA',
    link: '#'
  }
];

// ============================================
// COMPOSANT PORTFOLIO
// ============================================

/**
 * Composant Portfolio
 * Affiche la galerie des projets réalisés
 * 
 * @returns {JSX.Element} Page portfolio
 */
function Portfolio() {
  return (
    <>
      {/* ========================================
          HERO BANNER
      ======================================== */}
      <section 
        className="portfolio-hero"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)` 
        }}
      >
        <div className="portfolio-overlay"></div>
      </section>

      {/* ========================================
          SECTION PORTFOLIO
      ======================================== */}
      <section className="portfolio-section py-5">
        <div className="container">
          
          {/* En-tête de section */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Portfolio</h1>
            <p className="text-muted">
              Voici quelques unes de mes réalisations
            </p>
            <div className="title-underline mx-auto"></div>
          </div>

          {/* Grille des projets */}
          <div className="row">
            {PROJECTS_DATA.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                
                {/* Card du projet */}
                <div className="card portfolio-card h-100">
                  
                  {/* Image du projet */}
                  <img 
                    src={process.env.PUBLIC_URL + project.image} 
                    className="card-img-top" 
                    alt={project.title}
                  />
                  
                  {/* Corps de la card */}
                  <div className="card-body text-center">
                    <h3 className="card-title h5 fw-bold">
                      {project.title}
                    </h3>
                    <p className="card-text text-muted">
                      {project.description}
                    </p>
                    <a href={project.link} className="btn btn-primary">
                      Voir le site
                    </a>
                  </div>
                  
                  {/* Footer : Technologie utilisée */}
                  <div className="card-footer text-center text-muted">
                    {project.techno}
                  </div>
                  
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Portfolio;
