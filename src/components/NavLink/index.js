import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';

import styles from './NavLink.module.scss';

const NavLink = ({ to, title, onClick, className }) => {
    const navLinkClassName = classnames(className, styles.navLink);

    return (
        <Link
            activeClassName={styles.navLinkActive}
            onClick={onClick}
            className={navLinkClassName}
            to={to}
            title={title}
        >
            {title}
        </Link>
    );
};

NavLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

NavLink.defaultProps = {
    className: undefined,
    onClick: () => {}
};

export default NavLink;
