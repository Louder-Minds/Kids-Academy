import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
const Contact = () => (
    <Layout>
        <SEO siteTitle="Contact" />
        <ContactForm />
    </Layout>
);

export default Contact;
