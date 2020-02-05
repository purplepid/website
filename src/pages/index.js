import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Container from '../components/Container';

const IndexPage = () => {
    return (
        <React.Fragment>
            <SEO />
            <Container>
                <h1>
                    Software engineers based in Stockholm. We are consultants, advisors &amp; open-source advocates.
                </h1>
                <Button as={Link} to="/contact">
                    contact us
                </Button>
            </Container>
        </React.Fragment>
    );
};

export default IndexPage;
