import React, { useEffect, useRef } from 'react';
import { Footer } from './footer';
import { Nav } from './nav';
import { content } from '../config';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const moveCursor = ({ clientX, clientY }) => {
      const position = `translate(${clientX}px, ${clientY}px)`;
      dotRef.current.style.transform = position;
      ringRef.current.style.transform = position;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <span className="cursor-dot" ref={dotRef} />
      <span className="cursor-ring" ref={ringRef} />
    </div>
  );
};

export const Layout = ({ children }) => (
  <>
    <Cursor />
    <a className="skip-to-content" href="#content">Skip to Content</a>
    <Nav />
    <a className="side-email" href={`mailto:${content.site.email}`}><span>{content.site.email}</span></a>
    <main id="content">{children}</main>
    <Footer />
  </>
);
