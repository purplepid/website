import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Container>
            <h1>You just hit a route that doesn&#39;t exist :(</h1>
            <p>feels bad man</p>
        </Container>
    </Layout>
);

export default NotFoundPage;
