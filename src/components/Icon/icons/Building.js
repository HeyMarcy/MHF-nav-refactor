import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.1,8h2V6h-2V8z M9.1,12h2v-2h-2V12z M10.9,18v-4h-2v4H6V4.9h3.1h2h3.1V18
            C14.1,18,10.9,18,10.9,18z M19.1,16c-0.5,0-1.1,0.4-1.1,1.1V18h-2V4.1c0-0.6-0.4-1.1-1.1-1.1H14h-3.1v-2c0-0.6-0.4-1.1-1.1-1.1H10
            C9.5,0,8.9,0.4,8.9,1.1v2H6H5.1C4.5,3.1,4,3.5,4,4.1V18H2v-0.9C2,16.5,1.6,16,0.9,16h0.1C0.5,16,0,16.4,0,17.1V18v2h4h2h8h2h2.9
            c0.6,0,1.1-0.4,1.1-1.1V18v-0.9C20,16.4,19.6,16,19.1,16L19.1,16z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
