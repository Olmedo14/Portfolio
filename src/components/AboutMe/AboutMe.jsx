import React from 'react';
import './aboutme.css';
import ProfilePic from "../../assets/profile-pic.jpeg";
import CV from "../../assets/cv.pdf"; // Importar tu CV

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container" data-aos="fade-down-right">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={ProfilePic} alt="Foto de Perfil" className="profile-pic"/>
        </div>
        <div className="about-me-text">
          <h2>Acerca de Mí</h2>
          <p>
            Soy Joaquín Olmedo, desarrollador Web Junior con conocimientos en React y JavaScript, apasionado por crear aplicaciones web funcionales y visualmente atractivas.
          </p>
          <h4>Proyectos y Experiencia:</h4>
          <p>
            Tengo experiencia trabajando en proyectos personales que incluyen simuladores de compras y páginas de comercio electrónico, donde he perfeccionado mis habilidades en desarrollo frontend, integración de APIs y diseño responsivo.
          </p>
          <h4>Intereses:</h4>
          <p>
            Busco formar parte de un equipo dinámico donde pueda aplicar mis conocimientos, aprender nuevas tecnologías y contribuir al éxito de proyectos innovadores.
          </p>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/joaquin-olmedo-2b5000323/" className="contact-button">Contáctame</a>
            <a href={CV} className="cv-button" target="_blank" rel="noopener noreferrer">Ver CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
