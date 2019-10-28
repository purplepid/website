import React from 'react';
import { Link } from 'gatsby';

import Styles from './Logo.module.scss';

const Logo = () => {
    return (
        <React.Fragment>
            <Link to="/">
                <div className={Styles.logoContent}>
                    <div className={Styles.logo}>
                        <div />
                    </div>
                    <span>purplepid</span>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default Logo;
