import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';
import styles from './header.module.scss';

const Header = () => (
    <div className={styles.headerContent}>
        <Logo />
        <Nav />
    </div>
);

export default Header;
