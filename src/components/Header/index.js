import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import OffcanvasToggle from '../OffcanvasToggle';
import { useOffcanvas } from '../OffcanvasProvider';

import styles from './Header.module.scss';

const Header = () => {
    const { isOpen, toggle } = useOffcanvas();

    return (
        <div className={styles.wrap}>
            <Logo />
            <Nav />
            <OffcanvasToggle isOpen={isOpen} onClick={toggle} />
        </div>
    );
};

export default Header;
