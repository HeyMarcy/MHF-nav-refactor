import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.9.2c.6 0 1.1.5 1.1 1.1v14.8c0 .6-.5 1.1-1.1 1.1h-5.3c-.3 0-.6.1-.8.3l-1.9 1.9c-.4.4-1.1.4-1.6 0l-1.9-1.9c-.2-.2-.5-.3-.8-.3H1.1c-.6 0-1.1-.5-1.1-1.1V1.3C0 .7.5.2 1.1.2h17.8zm-2 2H3c-.6.1-1 .6-1 1.1v10.9c.1.5.5 1 1.1 1H7.3c.2 0 .4.1.6.3l1.3 1.3.1.1c.4.3 1 .3 1.4-.1l1.4-1.3.1-.1c.2-.1.4-.2.7-.2H17c.5-.1 1-.5 1-1.1V3.2c-.1-.6-.5-1-1.1-1zM5.1 8c.7 0 1.3.6 1.3 1.2 0 .7-.6 1.2-1.3 1.2s-1.3-.5-1.3-1.2S4.4 8 5.1 8zM10 8c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2zm4.9 0c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
