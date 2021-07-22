import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 8.3c-1.4.7-1.3 1.3.2 1.4l5.5.4c1.6.1 2.9 1.4 3.1 3l.5 5.6c.1 1.6.8 1.7 1.4.3l8-17.4c.7-1.4 0-2-1.4-1.4L1 8.3z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
