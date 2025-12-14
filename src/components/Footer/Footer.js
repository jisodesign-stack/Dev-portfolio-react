/**
 * @file Footer.js
 * @description Composant Footer - Pied de page du site
 * Affiche les informations de contact, liens utiles et réalisations
 */

// ============================================
// IMPORTS
// ============================================

// React Router - Composant Link pour la navigation interne
import { Link } from 'react-router-dom';

// Styles du composant
import './Footer.css';

// ============================================
// COMPOSANT FOOTER
// ============================================

/**
 * Composant Footer
 * Pied de page en 3 colonnes :
 * - Colonne 1 : Informations de contact + réseaux sociaux
 * - Colonne 2 : Liens utiles de navigation
 * - Colonne 3 : Dernières réalisations
 * 
 * @returns {JSX.Element} Pied de page
 */
function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          
          {/* ========================================
              COLONNE 1 - Informations de contact
          ======================================== */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">John Doe</h5>
            
            {/* Adresse */}
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            
            {/* Coordonnées */}
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>
            
            {/* Icônes réseaux sociaux */}
            <div className="social-icons">
              {/* GitHub */}
              <a 
                href="https://github.com/github-john-doe" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              
              {/* Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* ========================================
              COLONNE 2 - Liens utiles
          ======================================== */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            </ul>
          </div>

          {/* ========================================
              COLONNE 3 - Dernières réalisations
          ======================================== */}
          <div className="col-md-4">
            <h5 className="fw-bold">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio" className="footer-link">Fresh Food</Link></li>
              <li><Link to="/portfolio" className="footer-link">Restaurant Akira</Link></li>
              <li><Link to="/portfolio" className="footer-link">Espace bien-être</Link></li>
              <li><Link to="/portfolio" className="footer-link">SEO</Link></li>
              <li><Link to="/portfolio" className="footer-link">Création d'une API</Link></li>
              <li><Link to="/portfolio" className="footer-link">Maquette d'un site</Link></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
