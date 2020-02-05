import React from 'react';
import NavLink from '../NavLink';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles.wrap}>
            <NavLink to="/who-are-we" title="who are we?">
                who are we?
            </NavLink>
            <NavLink to="/contact" title="contact">
                contact
            </NavLink>
        </div>
    );
};

export default Nav;
