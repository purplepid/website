import React from 'react';

import { Link } from 'gatsby';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <React.Fragment>
            <div className={styles.navContent}>
                <Link activeClassName={styles.activeLink} className={styles.navLink} to="/who-we-are">
                    who are we?
                </Link>
                <Link activeClassName={styles.activeLink} className={styles.navLink} to="/contact">
                    contact
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Nav;
