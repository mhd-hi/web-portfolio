import React from 'react';
import { site } from '../../config';

export const About = () => (
  <section id="about" className="section about">
    <h2><span>01.</span> About Me</h2>
    <div className="about-grid">
      <div>
        <p>I&apos;m {site.name}, a full-stack and software developer based in Montreal.</p>
        <p>I&apos;m currently studying software engineering at Ecole de technologie superieure (ETS), and have gained industry experience through Sherweb, Civalgo, and Groupe IDF.</p>
        <p>My background also includes studies at College Montmorency.</p>
      </div>
      <aside className="education" aria-label="Education">
        <p className="eyebrow">Education</p>
        <strong>Ecole de technologie superieure</strong>
        <span>Software Engineering, 2022 - 2027</span>
        <strong>College Montmorency</strong>
        <span>2022</span>
      </aside>
    </div>
  </section>
);
