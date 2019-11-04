import React from 'react';

import styles from './Header.module.scss';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = () => (
    <div className={styles.headerContent}>
        <Logo />
        <Nav />
    </div>
);

export default Header;
