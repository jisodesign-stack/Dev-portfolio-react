/**
 * @file Header.js
 * @description Composant Header - Barre de navigation principale
 * Navigation responsive avec menu hamburger pour mobile
 */

// ============================================
// IMPORTS
// ============================================

// React Router - Composant NavLink pour navigation avec état actif
import { NavLink } from 'react-router-dom';

// Styles du composant
import './Header.css';

// ============================================
// COMPOSANT HEADER
// ============================================

/**
 * Composant Header
 * Affiche la barre de navigation du site
 * - Logo/Nom à gauche
 * - Menu de navigation à droite
 * - Menu hamburger responsive pour tablette/mobile
 * 
 * @returns {JSX.Element} Barre de navigation
 */
function Header() {
  return (
    <header>
      {/* 
        Navbar Bootstrap
        - navbar-expand-lg : collapse en dessous de 992px
        - navbar-dark bg-dark : thème sombre
      */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          {/* Logo / Nom du site */}
          <NavLink className="navbar-brand" to="/">
            JOHN DOE
          </NavLink>
          
          {/* Bouton hamburger pour mobile/tablette */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Menu de navigation */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              
              {/* Lien : Accueil */}
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/">
                  Home
                </NavLink>
              </li>
              
              {/* Lien : Services */}
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/services">
                  Services
                </NavLink>
              </li>
              
              {/* Lien : Portfolio */}
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              
              {/* Lien : Contact */}
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/contact">
                  Contact
                </NavLink>
              </li>
              
              {/* Lien : Mentions légales */}
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/mentions-legales">
                  Mentions légales
                </NavLink>
              </li>
              
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
