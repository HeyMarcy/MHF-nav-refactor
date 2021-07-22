import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.9,12.9l-9.7,6.5c-2.4,1.6-5.7-0.1-5.7-2.9v-13c0-2.8,3.3-4.5,5.7-2.9
            l9.7,6.5C19,8.4,19,11.6,16.9,12.9"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
