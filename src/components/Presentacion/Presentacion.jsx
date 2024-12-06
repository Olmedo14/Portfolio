import React from 'react';
import { motion } from 'motion/react';
import './presentacion.css';
import logo from '../../../public/logo.png';

const Presentacion = ({ onButtonClick }) => {
  return (
    <div className="presentation-card" data-aos="fade-up">
      <img src={logo} alt="Foto de Perfil" className="profile-picture" />
      <h1>Joaquín Olmedo</h1>
      <p>creador de experiencias digitales, enfocado en la creatividad e innovación.</p>
      <motion.button
        className="animated-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onButtonClick}
      >
        Saber más
      </motion.button>
    </div>
  );
}

export default Presentacion;
