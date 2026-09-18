import React from 'react';
import './src/styles/global.css';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  setHeadComponents([
    <link key="favicon" rel="icon" href="/favicon.svg" type="image/svg+xml" />,
  ]);
};
