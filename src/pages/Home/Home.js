import { useState } from 'react';
import GitHubModal from '../../components/GitHubModal/GitHubModal';
import './Home.css';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const skills = [
    { name: 'HTML5', percentage: 90, color: 'bg-danger' },
    { name: 'CSS3', percentage: 80, color: 'bg-success' },
    { name: 'JAVASCRIPT', percentage: 70, color: 'bg-warning' },
    { name: 'PHP', percentage: 60, color: 'bg-info' },
    { name: 'REACT', percentage: 50, color: 'bg-primary' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content text-center text-white">
            <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
            <h2 className="h3">Développeur web full stack</h2>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => setShowModal(true)}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            {/* Colonne À propos */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">A propos</h2>
              <img 
                src="/images/john-doe.jpg" 
                alt="John Doe - Développeur Web" 
                className="img-fluid mb-3 about-image"
              />
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

            {/* Colonne Compétences */}
            <div className="col-lg-6">
              <h2 className="mb-4">Mes compétences</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
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

      {/* Modale GitHub */}
      <GitHubModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default Home;
