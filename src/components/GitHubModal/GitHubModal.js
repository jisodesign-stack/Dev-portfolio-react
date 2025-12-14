import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './GitHubModal.css';

function GitHubModal({ show, onHide }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">{error}</p>}
        {userData && (
          <div className="row">
            <div className="col-md-6 text-center">
              <img 
                src={userData.avatar_url} 
                alt={`Avatar de ${userData.name || userData.login}`}
                className="img-fluid rounded github-avatar"
              />
            </div>
            <div className="col-md-6">
              <p>
                <i className="bi bi-person me-2"></i>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
                  {userData.name || userData.login}
                </a>
              </p>
              <p>
                <i className="bi bi-geo-alt me-2"></i>
                {userData.location || 'Non renseigné'}
              </p>
              <p>
                <i className="bi bi-chat-left-text me-2"></i>
                {userData.bio || 'Pas de biographie'}
              </p>
              <p>
                <i className="bi bi-folder me-2"></i>
                Repositories : {userData.public_repos}
              </p>
              <p>
                <i className="bi bi-people me-2"></i>
                Followers : {userData.followers}
              </p>
              <p>
                <i className="bi bi-person-plus me-2"></i>
                Following : {userData.following}
              </p>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="primary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GitHubModal;
