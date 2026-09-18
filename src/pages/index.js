import React from 'react';
import { Layout } from '../components/layout';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/contact';
import { Hero } from '../components/sections/hero';
import { Jobs } from '../components/sections/jobs';
import { Projects } from '../components/sections/projects';
import { content } from '../config';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Jobs />
    <Projects />
    <Contact />
  </Layout>
);

export const Head = () => {
  const title = `${content.site.name} | ${content.site.role}`;
  const description = 'Software developer and ÉTS engineering student building reliable web products, AI-assisted tools, and self-hosted infrastructure.';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default IndexPage;
