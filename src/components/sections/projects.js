import React from 'react';
import { content } from '../../config';

const ProjectLink = ({ href, label }) => {
  if (!href) return null;
  const isGithub = href.includes('github.com');

  return (
    <a className="project-link" href={href} target="_blank" rel="noopener noreferrer">
      <svg className={`project-link-icon ${isGithub ? 'github-icon' : 'external-icon'}`} viewBox="0 0 24 24" aria-hidden="true">
        {isGithub ? (
          <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.78c-2.69.58-3.26-1.14-3.26-1.14-.44-1.12-1.07-1.42-1.07-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.84.8.09-.62.34-1.05.62-1.29-2.15-.24-4.42-1.08-4.42-4.8 0-1.06.38-1.92 1-2.6-.1-.24-.43-1.23.1-2.57 0 0 .82-.26 2.64.99a9.2 9.2 0 0 1 4.8 0c1.82-1.25 2.64-.99 2.64-.99.53 1.34.2 2.33.1 2.57.62.68 1 1.54 1 2.6 0 3.73-2.27 4.56-4.43 4.8.35.3.66.87.66 1.75v2.59c0 .25.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z" />
        ) : (
          <path d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
        )}
      </svg>
      {label}
    </a>
  );
};

export const Projects = () => (
  <section id="projects" className="section projects">
    <h2>{content.projects.title}</h2>
    <ul className="project-grid">
      {content.projects.items.map((project, index) => (
        <li className={`project-item ${index % 2 ? 'project-item-reverse' : ''}`} key={project.name}>
          <div className="project-image" aria-hidden="true">
            {project.logoLightSrc ? (
              <>
                <img className="project-logo-voyage project-logo-voyage-dark" src={project.logoSrc} alt="" width={project.logoWidth} height={project.logoHeight} loading="lazy" decoding="async" />
                <img className="project-logo-voyage project-logo-voyage-light" src={project.logoLightSrc} alt="" width={project.logoWidth} height={project.logoHeight} loading="lazy" decoding="async" />
              </>
            ) : project.logoSrc ? <img className="project-logo" src={project.logoSrc} alt="" width={project.logoWidth} height={project.logoHeight} loading="lazy" decoding="async" /> : (
              <span className="project-mark">
                {project.logo ? (
                  typeof project.logo === 'object' ? (
                    <><span>{project.logo.prefix}</span><span className="project-mark-accent">{project.logo.accent}</span></>
                  ) : project.logo
                ) : project.name}
              </span>
            )}
          </div>
          <article className="project-content">
            <p className="project-overline">Featured Project</p>
            <h3>{project.name}</h3>
            <div className="project-description"><p>{project.description}</p></div>
            <ul className="project-tech-list">
              {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="project-links">
              {project.links ? project.links.map(link => <ProjectLink key={link.label} href={link.href} label={link.label} />) : (
                <>
                  <ProjectLink href={project.githubUrl} label="GitHub" />
                  <ProjectLink href={project.url} label="Live" />
                </>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
