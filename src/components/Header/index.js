import React from 'react';

import Styles from './Header.module.scss';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = () => (
    <div className={Styles.headerContent}>
        <Logo />
        <Nav />
    </div>
);

export default Header;
