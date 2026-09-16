import React from 'react';
import { Footer } from './footer';
import { Nav } from './nav';

export const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);
