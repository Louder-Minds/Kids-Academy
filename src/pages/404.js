import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const NotFoundPage = () => (
    <Layout>
        <SEO siteTitle="Pagina niet gevonden" />
        <h1>404: Pagina niet gevonden</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default NotFoundPage;
