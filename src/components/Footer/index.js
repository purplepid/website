import React from 'react';

import Styles from './Footer.module.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <div className={Styles.footerContent}>
                <div className={Styles.socialIconsContainer}>
                    <div className={Styles.socialIcon}>
                        <div className={Styles.gitIcon} />
                    </div>
                    <div className={Styles.socialIcon}>
                        <div className={Styles.linkedinIcon} />
                    </div>
                    <div className={Styles.socialIcon}>
                        <div className={Styles.facebookIcon} />
                    </div>
                    <div className={Styles.socialIcon}>
                        <div className={Styles.npmIcon} />
                    </div>
                </div>
                <div className={Styles.followUs}>Follow us on social media</div>
                <div>© purplepid</div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
