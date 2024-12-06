import React, { useState } from 'react';
import { motion } from 'motion/react';
import './project.css';

const Project = ({ title, description, imageUrl, websiteUrl, reverse }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-container ${reverse ? 'reverse' : ''}`} data-aos="fade-right">
      <motion.div
        className="project-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={handleExpand}
        animate={{ height: isExpanded ? '300px' : '350px' }}
        transition={{ duration: 0.5 }}
      >
        {isExpanded && (
          <motion.div
            className="project-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href={websiteUrl} className="visit-button" target="_blank" rel="noopener noreferrer">
              Visitar Sitio
            </a>
          </motion.div>
        )}
      </motion.div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;
