import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    disabled: false,
    color: '',
    background: '',
    onClick: () => {}
};

const CustomButton = props => {
    const { color, background, children, onClick, disabled, ...attributes } = props;

    const buttonOnClick = useCallback(
        e => {
            if (disabled) {
                e.preventDefault();
                return;
            }

            if (onClick) {
                onClick(e);
            }
        },
        [disabled, onClick]
    );

    return (
        <button
            type="button"
            disabled={disabled}
            className={style.button}
            style = {{color, background, borderColor: background}}
            onClick={buttonOnClick}
            {...attributes}
        >
            {children}
        </button>
    );
};

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
