import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    className: '',
    disabled: false,
    color: '',
    background: '',
    onClick: () => {}
};

const CustomButton = props => {
    const { className, color, background, children, onClick, disabled, ...attributes } = props;

    const buttonStyle = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.75px',
        textTransform: 'uppercase',
        borderRadius: '99px',
        border: '1px solid',
        padding: '9px 11.25px',
        cursor: 'pointer',
        transition: ['border-radius', '0.5s', 'ease-out'],
        color,
        background,
        borderColor: background,
        '&:hover': {
            borderRadius: '0px solid',
            color: 'black'
        },
        '&:focus': {
            borderSize: '0px'
        }
    };

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
            className={className}
            style={buttonStyle}
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
