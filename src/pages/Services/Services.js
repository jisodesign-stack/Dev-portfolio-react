import './Services.css';

function Services() {
  const services = [
    {
      icon: 'bi-pencil',
      title: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section 
        className="services-hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)` }}
      >
        <div className="services-overlay"></div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Mon offre de services</h1>
            <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="title-underline mx-auto"></div>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card service-card h-100 text-center p-4">
                  <div className="card-body">
                    <i className={`bi ${service.icon} service-icon mb-3`}></i>
                    <h3 className="card-title h5 fw-bold">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
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

export default Services;
