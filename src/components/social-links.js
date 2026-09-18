import React from 'react';
import { content } from '../config';

const icons = {
  github: (
    <svg className="filled-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.78c-2.69.58-3.26-1.14-3.26-1.14-.44-1.12-1.07-1.42-1.07-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.84.8.09-.62.34-1.05.62-1.29-2.15-.24-4.42-1.08-4.42-4.8 0-1.06.38-1.92 1-2.6-.1-.24-.43-1.23.1-2.57 0 0 .82-.26 2.64.99a9.2 9.2 0 0 1 4.8 0c1.82-1.25 2.64-.99 2.64-.99.53 1.34.2 2.33.1 2.57.62.68 1 1.54 1 2.6 0 3.73-2.27 4.56-4.43 4.8.35.3.66.87.66 1.75v2.59c0 .25.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
    </svg>
  ),
  linkedin: (
    <svg className="filled-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3ZM7.1 9.1H4.9V18h2.2V9.1ZM6 5.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM9.1 9.1V18h2.2v-4.4c0-1.16.22-2.28 1.65-2.28 1.41 0 1.43 1.32 1.43 2.36V18h2.21v-4.8c0-2.36-.51-4.17-3.3-4.17-1.34 0-2.23.74-2.6 1.44h-.03V9.1H9.1Z" />
    </svg>
  ),
  devpost: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h8a7 7 0 0 1 0 14H4zM4 12h8" />
    </svg>
  ),
};

export const SocialLinks = ({ className = '' }) => (
  <ul className={`social-links ${className}`.trim()}>
    {content.socialLinks.map(link => (
      <li key={link.label}>
        <a
          href={link.href}
          aria-label={link.label}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {icons[link.icon] || icons.mail}
        </a>
      </li>
    ))}
  </ul>
);
