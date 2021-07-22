import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.1 16.6c0 .6-.6 1.6-1.1 1.6h-6.9V6H17c.6 0 1.1 0 1.1.6v10zM8 16.4L6 14V2.6l2 2.3v11.5zm-4-2.3H2.9c-.6 0-.9-1-.9-1.6v-10c0-.6.3-.5.9-.5H4v12.1zM18 4h-7.7c-.6 0-1.1-.5-1.6-1L6.5.6C6.1.1 5.6 0 5 0H1.9C.8 0 0 .4 0 1.5v12.1c0 1 .8 2.4 1.9 2.4h1.8c.6 0 1.2 0 1.6.4l2 2.7c.3.4 1 .9 1.6.9h9c1.1 0 2.1-1.5 2.1-2.5v-12c.1-1-.9-1.5-2-1.5z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
