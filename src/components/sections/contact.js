import React from 'react';
import { content } from '../../config';

export const Contact = () => (
  <section id="contact" className="section contact">
    <p className="eyebrow">{content.contact.eyebrow}</p>
    <h2>{content.contact.title}</h2>
    {content.contact.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    <a className="button" href={`mailto:${content.site.email}`}>{content.contact.actionLabel}</a>
  </section>
);
