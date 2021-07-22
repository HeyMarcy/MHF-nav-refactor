import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.7,4.9L19.7,4.9c0.4,0.4,0.4,1.1,0,1.5l-8.3,8.6
            c-0.8,0.8-2,0.8-2.8,0L0.3,6.2c-0.3-0.4-0.4-1,0-1.5c0.3-0.3,1-0.3,1.3,0l7.7,7.9c0.4,0.4,1,0.4,1.5,0l7.6-7.8
            C18.7,4.4,19.4,4.4,19.7,4.9"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
