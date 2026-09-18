import React, { useEffect, useState } from 'react';
import { content } from '../config';

const Links = ({ onClick, tabIndex }) => (
  <ol>
    {content.navLinks.map(link => (
      <li key={link.href}>
        <a href={link.href} onClick={onClick} tabIndex={tabIndex}>{link.label}</a>
      </li>
    ))}
  </ol>
);

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const nextTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.toggle('menu-open', menuOpen);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label={`${content.site.name} home`}>
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M16 4C14 4 11 5 11 9v9c0 3-5 5-5 5s5 2 5 5v11c0 4 3 5 5 5" />
            <path d="M32 4c2 0 5 1 5 5v9c0 3 5 5 5 5s-5 2-5 5v11c0 4-3 5-5 5" />
          </svg>
        </a>

        <div className="nav-links">
          <Links />
        </div>

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={toggleTheme}>
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.5 15.5A7 7 0 0 1 8.5 5a7.5 7.5 0 1 0 8 10.5Z" />
              <path className="theme-sparkle" d="m17.5 3 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          <Links onClick={closeMenu} tabIndex={menuOpen ? 0 : -1} />
        </div>
      </nav>
    </header>
  );
};
