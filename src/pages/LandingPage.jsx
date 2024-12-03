import { useState } from 'react';
import './LandingPage.css';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

//Pájina principal
export default function LandingPage() {
  //Variable para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Abre el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  //Cierra el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing">
      <header className="header">
        <h1>Bienvenido a DigitalEvolution S.A.</h1>
      </header>
      {/*Contenido principal de la página */}
      <main className="content">
        <section className="hero">
          <h2>Transformamos Ideas en Realidad Digital</h2>
          <p>Soluciones innovadoras para impulsar tu negocio en la era digital</p>
          {/*Este botón abre el modal cuando se hace clic */}
          <button onClick={handleOpenModal} className="cta-button">¿Quieres saber aun más?</button>
        </section>

        <section className="services">
          <h3>Nuestros Servicios</h3>
          <div className="service-grid">
            <div className="service-item">
              <i className="fas fa-laptop-code"></i>
              <h4>Desarrollo Web</h4>
              <p>Creamos sitios web modernos y responsivos</p>
            </div>
            <div className="service-item">
              <i className="fas fa-mobile-alt"></i>
              <h4>Aplicaciones Móviles</h4>
              <p>Desarrollamos apps nativas para iOS y Android</p>
            </div>
            <div className="service-item">
              <i className="fas fa-search"></i>
              <h4>SEO</h4>
              <p>Optimizamos tu presencia en los motores de búsqueda</p>
            </div>
            <div className="service-item">
              <i className="fas fa-chart-line"></i>
              <h4>Marketing Digital</h4>
              <p>Estrategias efectivas para aumentar tu alcance online</p>
            </div>
          </div>
        </section>

        <section className="about-us">
          <h3>¿Por qué elegirnos?</h3>
          <ul>
            <li>Más de 10 años de experiencia en el sector</li>
            <li>Equipo de profesionales altamente cualificados</li>
            <li>Soluciones personalizadas para cada cliente</li>
            <li>Uso de las últimas tecnologías y tendencias</li>
          </ul>
        </section>

        <section className="cta">
          <h3>¿Listo para dar el siguiente paso?</h3>
          {/*Este enlace lleva a la página de contacto */}
          <Link to="/contact" className="cta-button">Contáctanos</Link>
        </section>
        {/*Esta es la imagen de fondo de la página, como las anteriores cargarla en el css me causaba problemas */}
        <img
          src="/assets/img/landingpagefondo.jpg" 
          alt="Fondo de la landing page" 
          className="background-image"
        />

        {/*Este es el modal que se abre cuando se hace clic en el botón */}
        <Modal
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          title="Sobre DigitalEvolution S.A." 
          content="DigitalEvolution S.A. es una empresa dedicada a brindar soluciones innovadoras en el ámbito digital, ayudando a nuestros clientes a crecer y destacar en el mundo online."
        />
      </main>
      <footer className="footer">

        <p>&copy; {new Date().getFullYear()} DigitalEvolution S.A. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

