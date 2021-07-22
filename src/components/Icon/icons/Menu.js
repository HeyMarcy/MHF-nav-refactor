import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 16.5c0 .7.6 1.2 1.2 1.2h11.5c.7 0 1.2-.6 1.2-1.2 0-.7-.6-1.3-1.2-1.3H7.2c-.6.1-1.2.6-1.2 1.3zm-6-13c0 .7.6 1.2 1.3 1.2h17.5c.7 0 1.3-.6 1.3-1.2 0-.7-.6-1.2-1.3-1.2H1.3C.6 2.2 0 2.8 0 3.5zM0 10c0 .7.6 1.2 1.3 1.2h17.5c.7 0 1.3-.6 1.3-1.2 0-.7-.6-1.2-1.3-1.2H1.3C.6 8.8 0 9.3 0 10z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
