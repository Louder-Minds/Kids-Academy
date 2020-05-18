import React from 'react';

import Helmet from 'react-helmet';

const SEO = ({ title }) => (
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
        <html lang="nl" />
    </Helmet>
);

export default SEO;
