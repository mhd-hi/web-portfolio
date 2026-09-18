import React from 'react';
import { content } from '../config';
import { SocialLinks } from './social-links';

export const Footer = () => (
  <footer>
    <SocialLinks className="footer-social" />
    <p>
      <a href={content.footer.hostedUrl} target="_blank" rel="noopener noreferrer">{content.footer.hostedLabel}</a>
    </p>
    <p>
      <a href={content.footer.adaptedUrl} target="_blank" rel="noopener noreferrer">{content.footer.adaptedLabel}</a>
    </p>
  </footer>
);
