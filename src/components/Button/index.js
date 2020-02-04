import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const propTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    as: 'button',
    disabled: false,
    onClick: () => {}
};

const Button = props => {
    const { as: Tag, children, onClick, disabled, ...attributes } = props;

    const handleClick = e => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    if (Tag === 'button' && !attributes.type) {
        attributes.type = 'button';
    }

    return (
        <Tag disabled={disabled} className={style.button} onClick={handleClick} {...attributes}>
            {children}
        </Tag>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
