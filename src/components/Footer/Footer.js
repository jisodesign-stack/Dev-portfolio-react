import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1 - Informations */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>
            <div className="social-icons">
              <a 
                href="https://github.com/github-john-doe" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
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

          {/* Colonne 2 - Liens utiles */}
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

          {/* Colonne 3 - Dernières réalisations */}
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
