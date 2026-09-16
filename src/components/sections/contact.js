import React from 'react';
import { site } from '../../config';

export const Contact = () => (
  <section id="contact" className="section contact">
    <p className="eyebrow">04. What&apos;s Next?</p>
    <h2>Get In Touch</h2>
    <p>I&apos;m always open to discussing software opportunities and new projects.</p>
    <a className="button" href={`mailto:${site.email}`}>{site.email}</a>
    <a className="phone" href={`tel:${site.phone.replaceAll('-', '')}`}>{site.phone}</a>
  </section>
);
