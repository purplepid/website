import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faFacebookF, faNpm } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <div className={styles.footerContent}>
                <div className={styles.socialIconsContainer}>
                    <div className={styles.socialIcon}>
                        <div className={styles.innerIconContainer}>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                    <div className={styles.socialIcon}>
                        <div className={styles.innerIconContainer}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </div>
                    <div className={styles.socialIcon}>
                        <div className={styles.innerIconContainer}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </div>
                    <div className={styles.socialIcon}>
                        <div className={styles.innerIconContainer}>
                            <FontAwesomeIcon icon={faNpm} />
                        </div>
                    </div>
                </div>
                <p className={styles.followUs}>Follow us on social media</p>
                <div>© purplepid</div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
