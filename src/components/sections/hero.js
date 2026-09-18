import React from 'react';
import { content } from '../../config';
import { SocialLinks } from '../social-links';

export const Hero = () => (
  <section className="hero" id="top">
    <p className="hero-greeting">{content.hero.greeting}</p>
    <h1 className="name-heading">{content.site.name}</h1>
    <h2 className="hero-role">{content.site.role}</h2>
    <SocialLinks className="hero-social" />
    <p className="hero-intro">
      {content.hero.description.before}
      <a href={content.hero.description.link} target="_blank" rel="noopener noreferrer">
        {content.hero.description.linkLabel}
      </a>
      {content.hero.description.after}
    </p>
    {content.site.resumeUrl && (
      <a className="button" href={content.site.resumeUrl}>{content.hero.resumeLabel}</a>
    )}
  </section>
);
