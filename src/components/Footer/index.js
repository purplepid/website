import React from 'react';
import { faGithub, faLinkedinIn, faNpm, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from '../SocialIcon';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.iconsWrap}>
                <SocialIcon url="https://github.com/purplepid" icon={faGithub} />
                <SocialIcon url="https://www.instagram.com/purplepid/" icon={faInstagram} />
                <SocialIcon url="https://www.linkedin.com/company/purplepid" icon={faLinkedinIn} />
                <SocialIcon url="https://www.npmjs.com/org/purplepid" icon={faNpm} />
            </div>
            <p>Follow us on social media</p>
            <div>© purplepid</div>
        </div>
    );
};

export default Footer;
