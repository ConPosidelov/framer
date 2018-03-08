import React from 'react';
const {PropTypes} = React;

const Icon = props => {
  const {size= '16', viewBox= '24', icon, color} = props;
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  };
//"0 0 24 24"   "0 0 1024 1024"
  return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <path
        style={styles.path}
        d={icon}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};


export default Icon;