import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';
import ContactPageComponent from '../components/ContactPageComponent';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <ContactPageComponent />
    </Layout>
);

export default ContactPage;
