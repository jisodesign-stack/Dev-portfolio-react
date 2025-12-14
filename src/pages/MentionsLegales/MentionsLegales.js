import { Accordion } from 'react-bootstrap';
import './MentionsLegales.css';

function MentionsLegales() {
  return (
    <>
      {/* Hero Banner */}
      <section 
        className="mentions-hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)` }}
      >
        <div className="mentions-overlay"></div>
      </section>

      {/* Mentions Légales Section */}
      <section className="mentions-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Mentions légales</h1>
            <div className="title-underline mx-auto"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Accordion defaultActiveKey="0">
                {/* Éditeur du site */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Editeur du site</Accordion.Header>
                  <Accordion.Body>
                    <h3 className="h5 fw-bold">John Doe</h3>
                    <p className="mb-1">
                      <i className="bi bi-building me-2"></i>
                      40 rue Laure Diebold
                    </p>
                    <p className="mb-1">
                      <i className="bi bi-geo-alt me-2"></i>
                      69009 Lyon, France
                    </p>
                    <p className="mb-1">
                      <i className="bi bi-telephone me-2"></i>
                      10 20 30 40 50
                    </p>
                    <p className="mb-0">
                      <i className="bi bi-envelope me-2"></i>
                      john.doe@gmail.com
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Hébergeur */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Hébergeur</Accordion.Header>
                  <Accordion.Body>
                    <h3 className="h5 fw-bold">alwaysdata</h3>
                    <p className="mb-1">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <p className="mb-0">
                      <i className="bi bi-globe me-2"></i>
                      <a 
                        href="https://www.alwaysdata.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mentions-link"
                      >
                        www.alwaysdata.com
                      </a>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Crédits */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Crédits</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2">
                      Ce site a été réalisé par John Doe, étudiant au{' '}
                      <a 
                        href="https://www.centre-europeen-formation.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mentions-link"
                      >
                        Centre Européen de formation
                      </a>.
                    </p>
                    <p className="mb-2">
                      Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                      <a 
                        href="https://pixabay.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mentions-link"
                      >
                        Pixabay
                      </a>.
                    </p>
                    <p className="mb-0">
                      La favicon de ce site a été fournie par{' '}
                      <a 
                        href="https://www.flaticon.com/de/kostenlose-icons/john-doe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mentions-link"
                      >
                        John doe Icons erstellt von Freepik - Flaticon
                      </a>.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MentionsLegales;
