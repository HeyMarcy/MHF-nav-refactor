import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.2 1.9l-6 8.7c0 .2-.2.4-.2.7v7.6c0 .7-.5 1.2-1.2 1.2H8c-.7 0-1.2-.5-1.2-1.2v-7.7c0-.2-.1-.5-.2-.7l-6-8.6C.3 1.3.5.6 1 .3c.2-.1.5-.2.7-.2h16.6c.7 0 1.2.5 1.2 1.2 0 .1 0 .4-.3.6zM11.1 16H9v2h2.1v-2zm3.5-14H5.3c-.7 0-1.1.5-1.1 1.2 0 .2.1.5.2.7l4.3 5.8c.1.2.3.4.3.6v2.5c0 .6.5 1 1.1 1 .6 0 1.1-.5 1.1-1v-2.5c0-.2.1-.5.2-.7l4.2-5.8c.4-.5.2-1.3-.2-1.6-.4-.1-.6-.2-.8-.2z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;