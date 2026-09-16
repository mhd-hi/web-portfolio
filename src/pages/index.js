import React from 'react';
import { Layout } from '../components/layout';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/contact';
import { Hero } from '../components/sections/hero';
import { Jobs } from '../components/sections/jobs';
import { Projects } from '../components/sections/projects';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Jobs />
    <Projects />
    <Contact />
  </Layout>
);

export const Head = () => <title>Mohamed Hafdi Idrissi | Full-Stack Developer</title>;

export default IndexPage;
