import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.3 1H2.9C1.9 1 1 1.4 1 2.4v10.8c0 1 .9 2.2 1.9 2.2h5.4c.5 0 .9.4.9.9s-.4.9-.9.9H5.6c-.5 0-.9.4-.9.9s.4.9.9.9h9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h5.4c1 0 1.7-1.2 1.7-2.2V2.4c0-1-.7-1.4-1.7-1.4zM7 13.1c.5-1.2 1.6-1.8 3-1.8 1.3 0 2.5.7 3 1.8.1.3-.1.5-.4.5H7.4c-.3 0-.5-.3-.4-.5zm1.4-4.9c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6zm8.8 4.5c0 .5-.4.9-.9.9h-1.8v-.2c-.3-1.5-1.4-2.6-2.8-3.1.7-.6 1.2-1.5 1-2.5-.2-1.2-1.2-2.1-2.4-2.3-1.6-.2-3.1 1.1-3.1 2.7 0 .9.4 1.6 1 2.1-1.4.5-2.4 1.6-2.8 3.1v.2H3.7c-.5 0-.9-.4-.9-.9v-9c0-.5.4-.9.9-.9h12.6c.5 0 .9.4.9.9v9z"
            clipRule="evenodd"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);

export default SVG;
