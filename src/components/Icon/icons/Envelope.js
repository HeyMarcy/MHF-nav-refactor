import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.8 11c-.5.4-1.2.4-1.7 0L2.8 5.4c-.4-.4-.3-.7.3-.7h13.8c.6 0 .7.3.3.7L10.8 11zm-7.7 4.3c-.6 0-1.1-.5-1.1-1.1V8.7c0-.7.4-.8.9-.4l6.3 5.3c.5.4 1.2.4 1.7 0l6.3-5.3c.4-.4.8-.2.8.4v5.5c0 .6-.5 1.1-1.1 1.1H3.1zm-3.1.8c0 .6.5 1.1 1.1 1.1h17.8c.6 0 1.1-.5 1.1-1.1V3.9c0-.6-.5-1.1-1.1-1.1H1.1C.5 2.8 0 3.3 0 3.9v12.2z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
