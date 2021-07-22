import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.2 13.1l4-4c.2-.2.6-.1.6.3v1c0 .3.3.7.7.7h-.2c.4 0 .5-.4.5-.7v-3c.2-.8-.4-1.4-1.2-1.4h-2.4c-.3 0-1.1.3-1.1.7 0 .4.4.7.9.7h1c.3 0 .4.3.3.6l-4.1 4.1c-.3.3-.3.7 0 1 .3.2.8.2 1 0m5.8 2v3.5c0 .8-.4 1.4-1.1 1.4H4.8C4 20 3 19.4 3 18.6V7.4C3 6.6 4 6 4.8 6h3.5c.3 0 .7.3.7.7 0 .4-.3.7-.7.7H5.5c-.5 0-1.1.4-1.1.7v9.1c0 .8 1 1.4 1.8 1.4h9.1c.3 0 .3-.3.3-.7v-2.8c0-.3.3-.7.7-.7.3 0 .7.4.7.7"
            clipRule="evenodd"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
