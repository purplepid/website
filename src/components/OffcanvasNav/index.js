import React from 'react';
import NavLink from '../NavLink';
import styles from './OffcanvasNav.module.scss';
import { useOffcanvas } from '../OffcanvasProvider';

const OffcanvasNav = () => {
    const { hideOffcanvas } = useOffcanvas();

    return (
        <div className={styles.wrap}>
            <NavLink to="/who-are-we" title="who are we?" onClick={hideOffcanvas} className={styles.navLink}>
                who are we?
            </NavLink>
            <NavLink to="/contact" title="contact" onClick={hideOffcanvas} className={styles.navLink}>
                contact
            </NavLink>
        </div>
    );
};

export default OffcanvasNav;
