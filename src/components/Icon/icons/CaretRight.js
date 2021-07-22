import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={props.fill}
            d="M5,3.8C4.5,3.3,4.5,2.5,5,2c0.5-0.5,1.3-0.5,1.8,0L13,8.1c0.5,0.5,0.5,1.3,0,1.9L6.8,16c-0.5,0.5-1.3,0.5-1.8,0 c-0.5-0.5-0.5-1.3,0-1.9L10.2,9L5,3.8z"
        />
    </svg>
);

export default SVG;
