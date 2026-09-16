import React from 'react';
import { projects } from '../../config';

export const Projects = () => (
  <section id="projects" className="section projects">
    <h2><span>03.</span> Things I&apos;ve Built</h2>
    <div className="project-grid">
      {projects.map(project => (
        <article className="project-card" key={project.name}>
          <p className="eyebrow">{project.type}</p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul>{project.tech.map(item => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  </section>
);
