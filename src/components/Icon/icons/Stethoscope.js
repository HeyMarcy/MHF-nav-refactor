import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.9 0c.5 0 .9.4.9.8V1c0 .4-.4.8-.7.8H1.9v.9c0 8.5 11.5 8.5 11.5 0v-.9h-2c-.5 0-.9-.4-.9-.8V.9c0-.5.4-.9.8-.9h4v2.8c0 5.1-3.4 7.9-6.9 8.1v1.6c0 7.8 8.6 7.8 8.6 0h1.8c0 10-12.1 10-12.1 0v-1.6C3.2 10.5 0 7.8 0 2.8V0h3.9zm14.2 8.2c1 0 1.9.8 1.9 1.8s-.9 1.9-1.9 1.9c-1.1 0-1.9-.9-1.9-1.9-.1-1 .8-1.8 1.9-1.8z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
