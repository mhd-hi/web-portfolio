import React from 'react';
import { site } from '../../config';

export const Hero = () => (
  <section className="hero" id="top">
    <p className="eyebrow">Hello, my name is</p>
    <h1>{site.name}.</h1>
    <h2>{site.role}.</h2>
    <p className="intro">I build software and full-stack experiences from Montreal.</p>
    <a className="button" href={`mailto:${site.email}`}>Get In Touch</a>
  </section>
);
