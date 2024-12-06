import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaSass, FaBootstrap } from 'react-icons/fa';
import './skills.css';

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "Bootstrap", icon: <FaBootstrap /> }
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <div className="skills-carousel">
        <div className="skills-row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
        <div className="skills-row reverse">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

