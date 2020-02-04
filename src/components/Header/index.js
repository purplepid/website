import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';

import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.wrap}>
        <Logo />
        <Nav />
    </div>
);

export default Header;
