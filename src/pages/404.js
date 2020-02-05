import React from 'react';
import SEO from '../components/SEO';
import Container from '../components/Container';

const NotFoundPage = () => (
    <React.Fragment>
        <SEO title="404: Not found" />
        <Container>
            <h1>You just hit a route that doesn&#39;t exist :(</h1>
            <p>feels bad man</p>
        </Container>
    </React.Fragment>
);

export default NotFoundPage;
