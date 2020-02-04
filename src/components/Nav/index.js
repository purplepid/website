import React from 'react';

import { Link } from 'gatsby';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles.wrap}>
            <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/who-are-we"
                title="who are we?"
            >
                who are we?
            </Link>
            <Link activeClassName={styles.navLinkActive} className={styles.navLink} to="/contact" title="contact">
                contact
            </Link>
        </div>
    );
};

export default Nav;
