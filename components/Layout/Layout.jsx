import React from 'react';
import Head from 'next/head';

function Layout({title, keywords, descriptions, children}) {
  return (
    <div>
      <Head>{title}</Head>
      <meta name="descriptions" content={descriptions} />
      <meta name="keywords" content={keywords} />
      {children}
    </div>
  );
}
export default Layout;

Layout.defaultProps = {
  title: 'matkor news | latest',
  descriptions: 'news website app',
  keywords: 'matkor'
}