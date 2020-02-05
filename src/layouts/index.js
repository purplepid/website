import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const GlobalLayout = ({ children }) => {
    return <Layout>{children}</Layout>;
};

GlobalLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default GlobalLayout;
