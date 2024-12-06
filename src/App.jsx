import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
 import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background/Background';
import Presentacion from './components/Presentacion/Presentacion';
import CustomNavbar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => { AOS.init({ duration: 1200 }); // Inicializar AOS con una duración de animación
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    setShowNavbar(true);
  };

  return (
    <div>
      {showNavbar && <CustomNavbar />}
      <Background />
      <Presentacion onButtonClick={handleButtonClick} />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;