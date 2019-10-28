import React from 'react';

import Styles from './Logo.module.scss';

const Logo = () => {
    return (
        <React.Fragment>
            <div className={Styles.logoContent}>
                <div className={Styles.logo}>
                    <div />
                </div>
                <span>purplepid</span>
            </div>
        </React.Fragment>
    );
};

export default Logo;
