import React from 'react';
import Project from './Project';
import './projects.css';
import projectImage1 from '../../../public/project-1.jpg';
import projectImage2 from '../../../public/project-2.jpg';
import projectImage3 from '../../../public/project-3.jpg'

const projects = [
  {
    title: '"Ecommerce Kokedamas & Terrarios"',
    description: 'Primer Proyecto Personal.',
    imageUrl: projectImage1,
    websiteUrl: 'https://olmedo14.github.io/DesarrolloWeb/',
    reverse: false,
  },
  {
    title: '"Ecommerce de Juegos para PC"',
    description: 'Segundo Proyecto Personal.',
    imageUrl: projectImage2,
    websiteUrl: 'https://olmedo14.github.io/OlmedoGames/',
    reverse: true,
  },
  {
    title: '"Venta de Suscripciones"',
    description: 'Tercer Proyecto Personal.',
    imageUrl: projectImage3,
    websiteUrl: 'https://react-six-sepia.vercel.app/',
    reverse: false,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            websiteUrl={project.websiteUrl}
            reverse={project.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

