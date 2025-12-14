/**
 * @file App.js
 * @description Composant principal de l'application React
 * Configuration du routage et structure globale du site
 */

// ============================================
// IMPORTS
// ============================================

// React Router - Gestion de la navigation SPA
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants réutilisables
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages de l'application
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';

// Styles Bootstrap et personnalisés
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

/**
 * Composant App
 * Point d'entrée principal de l'application
 * Gère le routage et la structure de la page (Header/Main/Footer)
 * 
 * @returns {JSX.Element} Structure principale de l'application
 */
function App() {
  return (
    <Router>
      {/* 
        Structure Flexbox pour footer sticky
        - d-flex : display flex
        - flex-column : direction colonne
        - min-vh-100 : hauteur minimale 100vh
      */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navigation principale */}
        <Header />
        
        {/* Contenu principal - flex-grow-1 pousse le footer en bas */}
        <main className="flex-grow-1">
          <Routes>
            {/* Route : Page d'accueil */}
            <Route path="/" element={<Home />} />
            
            {/* Route : Page Services */}
            <Route path="/services" element={<Services />} />
            
            {/* Route : Page Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            
            {/* Route : Page Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Route : Page Mentions Légales */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        
        {/* Pied de page */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
