import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      image: '/images/portfolio/fresh-food.jpg',
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec PHP et MySQL',
      link: '#'
    },
    {
      image: '/images/portfolio/restaurant.jpg',
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec WordPress',
      link: '#'
    },
    {
      image: '/images/portfolio/spa.jpg',
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec LARAVEL',
      link: '#'
    },
    {
      image: '/images/portfolio/seo.jpg',
      title: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce",
      techno: 'Utilisation des outils SEO',
      link: '#'
    },
    {
      image: '/images/portfolio/api.jpg',
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      techno: 'PHP - SYMFONY',
      link: '#'
    },
    {
      image: '/images/portfolio/maquette.jpg',
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      techno: 'Réalisé avec FIGMA',
      link: '#'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="portfolio-hero">
        <div className="portfolio-overlay"></div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Portfolio</h1>
            <p className="text-muted">Voici quelques unes de mes réalisations</p>
            <div className="title-underline mx-auto"></div>
          </div>

          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card portfolio-card h-100">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title h5 fw-bold">{project.title}</h3>
                    <p className="card-text text-muted">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer text-center text-muted">
                    {project.techno}
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

export default Portfolio;
