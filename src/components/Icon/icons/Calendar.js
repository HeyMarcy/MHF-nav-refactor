import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.9,8H2V5c0-0.6,0.4-1,1-1h1v2h2V4h8v2h2V4h1c0.6,0,1,0.4,1,1
            C17.9,5,17.9,8,17.9,8z M17.9,17c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1v-7h15.9V17z M0.1,17.8c0,1.1,1,2.2,2.1,2.2h15.9
            c1.1,0,1.9-1,1.9-2.2c0-0.4,0-12.4,0-13c0-2.1-0.3-2.7-4-2.7V0h-2v2H6V0H4v2H2C0.9,2,0,2.9,0,4L0.1,17.8z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
