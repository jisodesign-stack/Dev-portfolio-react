/**
 * @file Home.js
 * @description Page d'accueil du portfolio
 * Comprend le Hero, la section À propos et les compétences
 */

// ============================================
// IMPORTS
// ============================================

// React Hooks
import { useState } from 'react';

// Composants
import GitHubModal from '../../components/GitHubModal/GitHubModal';

// Styles de la page
import './Home.css';

// ============================================
// DONNÉES
// ============================================

/**
 * Liste des compétences avec pourcentage de maîtrise
 * @type {Array<{name: string, percentage: number, color: string}>}
 */
const SKILLS_DATA = [
  { name: 'HTML5', percentage: 90, color: 'bg-danger' },
  { name: 'CSS3', percentage: 80, color: 'bg-success' },
  { name: 'JAVASCRIPT', percentage: 70, color: 'bg-warning' },
  { name: 'PHP', percentage: 60, color: 'bg-info' },
  { name: 'REACT', percentage: 50, color: 'bg-primary' }
];

// ============================================
// COMPOSANT HOME
// ============================================

/**
 * Composant Home
 * Page d'accueil avec :
 * - Section Hero plein écran
 * - Section À propos avec photo
 * - Barres de progression des compétences
 * - Modale GitHub
 * 
 * @returns {JSX.Element} Page d'accueil
 */
function Home() {
  
  // ========================================
  // STATE
  // ========================================
  
  /** Contrôle l'affichage de la modale GitHub */
  const [showModal, setShowModal] = useState(false);

  // ========================================
  // RENDER
  // ========================================
  
  return (
    <>
      {/* ========================================
          SECTION HERO - Bannière principale
      ======================================== */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)` 
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content text-center text-white">
            
            {/* Titre principal */}
            <h1 className="display-3 fw-bold">
              Bonjour, je suis John Doe
            </h1>
            
            {/* Sous-titre */}
            <h2 className="h3">
              Développeur web full stack
            </h2>
            
            {/* Bouton CTA - Ouvre la modale GitHub */}
            <button 
              className="btn btn-primary mt-4"
              onClick={() => setShowModal(true)}
            >
              En savoir plus
            </button>
            
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION À PROPOS
      ======================================== */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            
            {/* Colonne gauche : Présentation */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              
              {/* Titre de section */}
              <h2 className="mb-2">A propos</h2>
              <div className="title-underline mb-4"></div>
              
              {/* Photo de profil */}
              <img 
                src={process.env.PUBLIC_URL + '/images/john-doe.jpg'} 
                alt="John Doe - Développeur Web" 
                className="img-fluid mb-3 about-image"
              />
              
              {/* Texte de présentation */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus 
                consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure 
                onim placeat? Natus, neque at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus 
                consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure 
                onim placeat? Natus, neque at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus 
                consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure 
                onim placeat? Natus, neque at?
              </p>
              
            </div>

            {/* Colonne droite : Compétences */}
            <div className="col-lg-6">
              
              {/* Titre de section */}
              <h2 className="mb-2">Mes compétences</h2>
              <div className="title-underline mb-4"></div>
              
              {/* Liste des compétences avec barres de progression */}
              {SKILLS_DATA.map((skill, index) => (
                <div key={index} className="mb-3">
                  
                  {/* Nom et pourcentage */}
                  <div className="d-flex justify-content-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  
                  {/* Barre de progression Bootstrap */}
                  <div className="progress">
                    <div 
                      className={`progress-bar ${skill.color}`}
                      role="progressbar" 
                      style={{ width: `${skill.percentage}%` }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          MODALE GITHUB
      ======================================== */}
      <GitHubModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
      />
    </>
  );
}

export default Home;
