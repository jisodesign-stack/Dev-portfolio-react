/**
 * @file GitHubModal.js
 * @description Composant GitHubModal - Modale affichant le profil GitHub
 * Utilise l'API GitHub pour récupérer les informations utilisateur
 */

// ============================================
// IMPORTS
// ============================================

// React Hooks
import { useState, useEffect } from 'react';

// Composants React Bootstrap
import { Modal, Button } from 'react-bootstrap';

// Styles du composant
import './GitHubModal.css';

// ============================================
// CONSTANTES
// ============================================

/** URL de l'API GitHub pour récupérer le profil utilisateur */
const GITHUB_API_URL = 'https://api.github.com/users/github-john-doe';

// ============================================
// COMPOSANT GITHUBMODAL
// ============================================

/**
 * Composant GitHubModal
 * Affiche une modale avec les informations du profil GitHub
 * Récupère les données via l'API GitHub publique
 * 
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.show - Afficher/masquer la modale
 * @param {Function} props.onHide - Callback pour fermer la modale
 * @returns {JSX.Element} Modale avec profil GitHub
 */
function GitHubModal({ show, onHide }) {
  
  // ========================================
  // STATE - Gestion de l'état local
  // ========================================
  
  /** Données utilisateur récupérées de l'API */
  const [userData, setUserData] = useState(null);
  
  /** État de chargement */
  const [loading, setLoading] = useState(true);
  
  /** Message d'erreur en cas de problème */
  const [error, setError] = useState(null);

  // ========================================
  // EFFECTS - Appel API au montage
  // ========================================
  
  useEffect(() => {
    /**
     * Récupère les données du profil GitHub
     * Appel asynchrone à l'API GitHub
     */
    const fetchGitHubData = async () => {
      try {
        // Appel à l'API GitHub
        const response = await fetch(GITHUB_API_URL);
        
        // Vérification de la réponse
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        // Parsing du JSON
        const data = await response.json();
        
        // Mise à jour du state
        setUserData(data);
        setLoading(false);
        
      } catch (err) {
        // Gestion des erreurs
        setError(err.message);
        setLoading(false);
      }
    };

    // Exécution de la fonction
    fetchGitHubData();
  }, []); // Dépendances vides = exécution unique au montage

  // ========================================
  // RENDER - Affichage du composant
  // ========================================
  
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      
      {/* En-tête de la modale */}
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      
      {/* Corps de la modale */}
      <Modal.Body className="bg-dark text-white">
        
        {/* État : Chargement */}
        {loading && <p>Chargement...</p>}
        
        {/* État : Erreur */}
        {error && <p className="text-danger">{error}</p>}
        
        {/* État : Données chargées */}
        {userData && (
          <div className="row">
            
            {/* Colonne gauche : Avatar */}
            <div className="col-md-6 text-center">
              <img 
                src={userData.avatar_url} 
                alt={`Avatar de ${userData.name || userData.login}`}
                className="img-fluid rounded github-avatar"
              />
            </div>
            
            {/* Colonne droite : Informations */}
            <div className="col-md-6">
              
              {/* Nom avec lien vers profil */}
              <p>
                <i className="bi bi-person me-2"></i>
                <a 
                  href={userData.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  {userData.name || userData.login}
                </a>
              </p>
              
              {/* Localisation */}
              <p>
                <i className="bi bi-geo-alt me-2"></i>
                {userData.location || 'Non renseigné'}
              </p>
              
              {/* Biographie */}
              <p>
                <i className="bi bi-chat-left-text me-2"></i>
                {userData.bio || 'Pas de biographie'}
              </p>
              
              {/* Nombre de repositories */}
              <p>
                <i className="bi bi-folder me-2"></i>
                Repositories : {userData.public_repos}
              </p>
              
              {/* Nombre de followers */}
              <p>
                <i className="bi bi-people me-2"></i>
                Followers : {userData.followers}
              </p>
              
              {/* Nombre de following */}
              <p>
                <i className="bi bi-person-plus me-2"></i>
                Following : {userData.following}
              </p>
              
            </div>
          </div>
        )}
        
      </Modal.Body>
      
      {/* Pied de la modale */}
      <Modal.Footer className="bg-dark">
        <Button variant="primary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
      
    </Modal>
  );
}

export default GitHubModal;
