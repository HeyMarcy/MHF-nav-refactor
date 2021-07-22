import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 9.2c-1.2 0-2.2-.9-2.2-2s.9-2 2.2-2 2.2.9 2.2 2-1 2-2.2 2zm0 7.8S4.7 10 4.7 7c0-2.8 2.4-5 5.3-5s5.3 2.2 5.3 5c0 3-5.3 10-5.3 10M2.5 7c0 3.9 7.5 13 7.5 13s7.5-9.1 7.5-13-3.3-7-7.5-7-7.5 3.1-7.5 7z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
