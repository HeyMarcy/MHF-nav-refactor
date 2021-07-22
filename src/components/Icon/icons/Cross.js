import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 13h-2c-1.1 0-2 .9-2 2v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-2c0-1.1-.9-2-2-2H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2c1.1 0 2-.9 2-2V3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2c0 1.1.9 2 2 2h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1m-2-9V2c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v2c0 .6-.4 1-1 1H2C.9 5 0 5.9 0 7v6c0 1.1.9 2 2 2h2c.6 0 1 .4 1 1v2c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2c0-.6.4-1 1-1h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2c-.6 0-1-.4-1-1"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
