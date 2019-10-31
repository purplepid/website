import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.string
};

const defaultProps = {
    direction: 'row'
};

const PageContainer = props => {
    const { direction, children } = props;

    const divStyle = {
        display: 'flex',
        justifyiItems: 'center',
        alignItems: 'center',
        flexDirection: direction
    };

    return <div style={divStyle}>{children}</div>;
};

PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;

export default PageContainer;
