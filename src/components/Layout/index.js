import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import styles from './Layout.module.scss';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.content}>
                <main>{children}</main>
            </div>
            <Footer />
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
