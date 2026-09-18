import React, { useState } from 'react';
import { Link, withPrefix } from 'gatsby';
import { Layout } from '../components/layout';

const NotFoundPage = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <Layout>
      <section className="section not-found">
        <h1>Page not found</h1>
        {showAnimation && (
          <img
            className="not-found-animation"
            src={withPrefix('/404-animation.svg')}
            alt=""
            width="326"
            height="180"
            onError={() => setShowAnimation(false)}
          />
        )}
        <Link className="button" to="/">Back home</Link>
      </section>
    </Layout>
  );
};

export const Head = () => <title>Page Not Found | Mohamed Hafdi Idrissi</title>;

export default NotFoundPage;
