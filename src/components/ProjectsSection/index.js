import React from 'react';
import ProjectWrapper from '../ProjectWrapper';
import projects from '../../data/projects.json';
import './style.css';

export default function ProjectsSection() {
  return (
    <section id='projects'>
      <h2 className='project-section-title'>Projects</h2>
      {projects.map((project) => (
        <ProjectWrapper
          name={project.name}
          description={project.description}
          role={project.role}
          tech={project.tech}
          github={project.github}
          deployed={project.deployed}
          img={project.img}
          alt={project.alt}
        />
      ))}
    </section>
  );
}
