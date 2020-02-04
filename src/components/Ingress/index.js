import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ingress.module.scss';

const Ingress = ({ children }) => {
    return <p className={styles.ingress}>{children}</p>;
};

Ingress.propTypes = {
    children: PropTypes.node.isRequired
};

export default Ingress;
