import React from 'react';
const {PropTypes} = React;

const Icon = props => {
  const {size= '16', viewBox= '24', color, style} = props;
  const {ic1= '', ic2= '', ic3= '', ic4= '', ic5= ''} = props;

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={{...styles.svg, ...style}}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
     <g>
     {<path style={styles.path} d={ic1} ></path>}
     {<path style={styles.path} d={ic2} ></path>}
     {<path style={styles.path} d={ic3} ></path>}
     {<path style={styles.path} d={ic4} ></path>}
     {<path style={styles.path} d={ic5} ></path>}
     </g>
    </svg>
  );
};

Icon.propTypes = {
  viewBox: PropTypes.string,

  size: PropTypes.number,
  color: PropTypes.string,
};


export default Icon;