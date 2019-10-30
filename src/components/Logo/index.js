import React from 'react';
import { Link } from 'gatsby';

import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <React.Fragment>
            <Link to="/">
                <div className={styles.logoContent}>
                    <div className={styles.logoOuter}>
                        <div className={styles.logoInner} />
                    </div>
                    <span className={styles.logoText}>purplepid</span>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default Logo;
