import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, size, color }) => {

    const style = {
        fontSize: size,
        color: color
    };
    return (
        <i 
            className={ `fa fa-${icon}` } 
            style= { style }
        />
    );
};
 

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
