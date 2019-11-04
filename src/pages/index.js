import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';
import HomePageComponent from '../components/HomePageComponent';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <HomePageComponent />
        </Layout>
    );
};

export default IndexPage;
