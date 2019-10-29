import React from 'react';
import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';
import HomePageComponent from '../components/HomePageComponent';

export const query = graphql`
    {
        allHomeJson {
            edges {
                node {
                    title
                    articles {
                        title
                        text
                    }
                }
            }
        }
    }
`;

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <HomePageComponent data={data.allHomeJson.edges[0].node} />
    </Layout>
);

export default IndexPage;
