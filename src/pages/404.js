import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import NotFoundComponent from '../components/NotFoundPageComponent/index';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <NotFoundComponent />
    </Layout>
);

export default NotFoundPage;
