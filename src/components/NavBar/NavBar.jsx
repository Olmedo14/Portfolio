import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importar íconos
import logo from '../../assets/logo.png';

const CustomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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

  return (
    showNavbar && (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Centrar las secciones */}
            <Nav.Link href="#about">Acerca de</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
          <Nav className="ml-auto"> {/* Alinear los enlaces a la derecha */}
            <Nav.Link href="https://github.com/Olmedo14" target="_blank">
              <FaGithub size={30} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/joaquin-olmedo-2b5000323/" target="_blank">
              <FaLinkedin size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  );
}

export default CustomNavbar;

