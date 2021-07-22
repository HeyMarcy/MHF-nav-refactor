import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.9 13.5c-1 0-1.9-.8-1.9-1.9V4.9C0 3.8.8 3 1.9 3h13.8c1 0 1.9.8 1.9 1.9H1.9v8.6z"
            fill={props.fill}
        />
        <path
            d="M18.1 17H4.8c-1 0-1.9-.8-1.9-1.9V7.8c0-1 .8-1.9 1.9-1.9h13.3c1 0 1.9.8 1.9 1.9V15c-.1 1.2-.9 2-1.9 2zM4.8 15.1h13.3V7.9H4.8v7.2z"
            fill={props.fill}
        />
        <path
            d="M11.6 9.9c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5-1.6-.6-1.6-1.4c0-.8.7-1.6 1.6-1.6z"
            fill={props.fill}
        />
        <path
            d="M7 9.5c.2 0 .4.2.4.4s-.2.4-.4.4-.4-.2-.4-.4.2-.4.4-.4z"
            fill={props.fill}
        />
        <path
            d="M16.1 12.6c.2 0 .4.2.4.4s-.2.4-.4.4-.4-.2-.4-.4.1-.4.4-.4z"
            fill={props.fill}
        />
        <path d="M16.1 9.5l.4.4-.4.4-.4-.4z" fill={props.fill} />
        <path d="M7 12.6l.4.4-.4.4-.4-.4z" fill={props.fill} />
    </svg>
);

export default SVG;
