/**
 * @file Contact.js
 * @description Page de contact
 * Formulaire de contact et coordonnées avec Google Map
 */

// ============================================
// IMPORTS
// ============================================

// Styles de la page
import './Contact.css';

// ============================================
// COMPOSANT CONTACT
// ============================================

/**
 * Composant Contact
 * Page de contact avec :
 * - Formulaire de contact (5 champs)
 * - Coordonnées avec icônes
 * - Google Map intégré
 * 
 * @returns {JSX.Element} Page de contact
 */
function Contact() {
  
  // ========================================
  // HANDLERS
  // ========================================
  
  /**
   * Gère la soumission du formulaire
   * @param {Event} e - Événement de soumission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
  };

  // ========================================
  // RENDER
  // ========================================
  
  return (
    <>
      {/* ========================================
          HERO BANNER
      ======================================== */}
      <section 
        className="contact-hero"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)` 
        }}
      >
        <div className="contact-overlay"></div>
      </section>

      {/* ========================================
          SECTION CONTACT
      ======================================== */}
      <section className="contact-section py-5">
        <div className="container">
          
          {/* En-tête de section */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact</h1>
            <p className="text-muted">
              Pour me contacter en vue d'un entretien ou d'une future collaboration, 
              merci de remplir le formulaire de contact
            </p>
            <div className="title-underline mx-auto"></div>
          </div>

          <div className="row">
            
            {/* ====================================
                COLONNE GAUCHE - Formulaire
            ==================================== */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card contact-card p-4">
                
                <h2 className="h4 fw-bold mb-4 border-bottom pb-2">
                  Formulaire de contact
                </h2>
                
                <form onSubmit={handleSubmit}>
                  
                  {/* Champ : Nom */}
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                  
                  {/* Champ : Email */}
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Votre adresse email" 
                      required 
                    />
                  </div>
                  
                  {/* Champ : Téléphone */}
                  <div className="mb-3">
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="Votre numéro de téléphone" 
                      required 
                    />
                  </div>
                  
                  {/* Champ : Sujet */}
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Sujet" 
                      required 
                    />
                  </div>
                  
                  {/* Champ : Message */}
                  <div className="mb-3">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="Votre message" 
                      required
                    ></textarea>
                  </div>
                  
                  {/* Bouton d'envoi */}
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                  
                </form>
              </div>
            </div>

            {/* ====================================
                COLONNE DROITE - Coordonnées
            ==================================== */}
            <div className="col-lg-6">
              <div className="card contact-card p-4 h-100">
                
                <h2 className="h4 fw-bold mb-4 border-bottom pb-2">
                  Mes coordonnées
                </h2>
                
                {/* Informations de contact */}
                <div className="mb-4">
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
                  
                  <p className="mb-3">
                    <i className="bi bi-envelope me-2"></i>
                    <a 
                      href="mailto:john.doe@gmail.com" 
                      className="contact-link"
                    >
                      john.doe@gmail.com
                    </a>
                  </p>
                </div>

                {/* Google Map intégré */}
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.882036614498!2d4.802470315559695!3d45.77808997910553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb5e9a6d5f0f%3A0x48b0c24c0d9d8c0!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890123"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation de John Doe"
                  ></iframe>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
