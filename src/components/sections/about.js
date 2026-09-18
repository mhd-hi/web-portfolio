import React from 'react';
import { content } from '../../config';

export const About = () => (
  <section id="about" className="section about">
    <h2>{content.about.title}</h2>
    <div className="about-grid">
      <div className="about-copy">
        <p>
          {content.about.introduction.before}
          <a href={content.about.introduction.link} target="_blank" rel="noopener noreferrer">
            {content.about.introduction.linkLabel}
          </a>
          {content.about.introduction.between}
          <a href={content.about.introduction.schoolLink} target="_blank" rel="noopener noreferrer">
            {content.about.introduction.schoolLabel}
          </a>
          {content.about.introduction.after}
        </p>
        {content.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <p>{content.about.technologyIntro}</p>
        <ul className="technology-list">
          {content.about.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="portrait-frame">
        {content.about.imageSrc ? (
          <img src={content.about.imageSrc} alt={content.about.imageAlt} width="800" height="800" loading="lazy" decoding="async" />
        ) : (
          <span aria-label={content.about.imageAlt}>{content.about.imagePlaceholder}</span>
        )}
      </div>
    </div>
  </section>
);
