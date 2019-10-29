import React from 'react';
import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';
import WhoPageComponent from '../components/WhoPageComponent';

export const query = graphql`
    {
        allWhoJson {
            edges {
                node {
                    title
                    sections {
                        articles {
                            title
                            text
                        }
                    }
                }
            }
        }
    }
`;

const WhoWeArePage = ({ data }) => (
    <Layout>
        <SEO title="WhoWeAre" />
        <WhoPageComponent data={data.allWhoJson.edges[0].node} />
    </Layout>
);

export default WhoWeArePage;
