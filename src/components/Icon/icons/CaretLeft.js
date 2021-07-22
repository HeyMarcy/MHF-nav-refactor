import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={props.fill}
            d="M12,13.22a1.29,1.29,0,0,1-1.83,1.83L4,8.93A1.36,1.36,0,0,1,4,7.07L10.16,1A1.32,1.32,0,0,1,12,1a1.36,1.36,0,0,1,0,1.86L6.77,8Z"
        />
    </svg>
);

export default SVG;
