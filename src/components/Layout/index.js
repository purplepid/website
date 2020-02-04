import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.main}>{children}</div>
            <Footer />
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
