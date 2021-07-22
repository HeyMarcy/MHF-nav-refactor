import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.6,2.6c-0.6-0.6-1.4-0.6-2,0l-0.4,0.3c-0.6,0.6-0.6,1.4,0,2l2.1,2.4c0.6,0.6,0.3,1-0.4,1H1.4
            C0.6,8.4,0,8.9,0,9.8v0.6c0,0.7,0.7,1.4,1.4,1.4h11.3c0.9,0,1,0.4,0.4,1L11,15.1c-0.6,0.6-0.6,1.4,0,2l0.6,0.3c0.6,0.6,1.4,0.6,2,0
            l6-6.3c0.6-0.6,0.6-1.6,0-2L13.6,2.6z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
