import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';
import WhoPageComponent from '../components/WhoPageComponent';

const WhoWeArePage = () => (
    <Layout>
        <SEO title="WhoWeAre" />
        <WhoPageComponent />
    </Layout>
);

export default WhoWeArePage;
