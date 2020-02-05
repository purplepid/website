import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import styles from './SocialIcon.module.scss';

const SocialIcon = ({ icon, url }) => {
    return (
        <Button secondary as="a" href={url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FontAwesomeIcon icon={icon} size="lg" />
        </Button>
    );
};

SocialIcon.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default SocialIcon;
