import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.3,6.2c-0.9-2.4-2.8-4.3-5.2-5.3C12.8,0.2,11.4,0,10,0C4.4,0,0,4.4,0,10s4.5,10,10,10c5.6,0,10-4.5,10-10
            C20,8.7,19.8,7.4,19.3,6.2z M10,2.3c1,0,2.1,0.2,3.1,0.7c0.6,0.2,1,0.6,1.5,0.9L8.4,9.9l-4.7,4.5c-0.9-1.3-1.4-2.8-1.4-4.4
            C2.3,5.8,5.8,2.3,10,2.3z M10,17.7c-1.7,0-3.4-0.6-4.7-1.6L16.3,5.5c0.3,0.5,0.6,0.9,0.8,1.5c0.3,0.9,0.6,1.9,0.6,2.9
            C17.7,14.2,14.2,17.7,10,17.7z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
