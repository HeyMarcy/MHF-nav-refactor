import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 15c0 .6.4 1 1 1s1-.4 1-1V9c0-.6-.4-1-1-1s-1 .4-1 1v6zm4 0c0 .6.4 1 1 1s1-.4 1-1V9c0-.6-.4-1-1-1s-1 .4-1 1v6zm-6 3h10V6H5v12zM7 3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1zm9.1 1c-.7 0-1.1-.4-1.1-1.1V1.1c0-.7-.4-1.1-1.1-1.1H6.1C5.4 0 5 .4 5 1.1v1.8C5 3.6 4.6 4 3.9 4H1.1C.4 4 0 4.6 0 5.1v-.2C0 5.6.4 6 1.1 6h.8C2.6 6 3 6.4 3 7.1v11.8c0 .7.4 1.1 1.1 1.1h11.8c.7 0 1.1-.4 1.1-1.1V7.1c0-.7.4-1.1 1.1-1.1h.8c.7 0 1.1-.6 1.1-1.1v.2c0-.7-.4-1.1-1.1-1.1h-2.8z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
