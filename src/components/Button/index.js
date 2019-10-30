import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function omit(obj, omitKeys) {
    const result = {};
    Object.keys(obj).forEach(key => {
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
}

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.object])
};

const defaultProps = {
    className: '',
    disabled: false,
    onClick: () => {},
    component: 'button'
};

const CustomButton = props => {
    const { className, children, onClick, disabled, ...attributes } = omit(props, ['component']);
    let { component: Component } = props;

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

    if (attributes.href && Component === 'button') {
        Component = 'a';
    }

    return (
        <Component disabled={disabled} className={className} onClick={buttonOnClick} {...attributes}>
            {children}
        </Component>
    );
};

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
