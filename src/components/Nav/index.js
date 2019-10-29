import React from 'react';

import { Link } from 'gatsby';
import Styles from './Nav.module.scss';

const Nav = () => {
    return (
        <React.Fragment>
            <div className={Styles.navContent}>
                <Link activeClassName={Styles.activeLink} to="/who-we-are">
                    who are we?
                </Link>
                <Link activeClassName={Styles.activeLink} to="/contact">
                    {' '}
                    contact{' '}
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Nav;
