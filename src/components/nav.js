import React from 'react';
import { navLinks, site } from '../config';

export const Nav = () => (
  <header className="site-nav">
    <a className="monogram" href="#top" aria-label={`${site.name} home`}>
      MH
    </a>
    <nav aria-label="Main navigation">
      <ol>
        {navLinks.map(([label, href], index) => (
          <li key={href}>
            <a href={href}><span>0{index + 1}.</span>{label}</a>
          </li>
        ))}
      </ol>
    </nav>
  </header>
);
