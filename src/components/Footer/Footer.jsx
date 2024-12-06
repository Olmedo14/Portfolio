import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Joaquín Olmedo © {new Date().getFullYear()}</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/Olmedo14" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/joaquin-olmedo-2b5000323/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
