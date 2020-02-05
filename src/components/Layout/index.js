import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import OffcanvasProvider from '../OffcanvasProvider';
import Offcanvas from '../Offcanvas';
import OffcanvasNav from '../OffcanvasNav';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <OffcanvasProvider>
            <Header />
            <div className={styles.main}>{children}</div>
            <Footer />
            <Offcanvas>
                <OffcanvasNav />
            </Offcanvas>
        </OffcanvasProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
