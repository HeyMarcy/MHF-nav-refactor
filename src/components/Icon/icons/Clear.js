import React from 'react';

const SVG = (props) => (
    <svg
        {...props}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
            <circle fill="#E5E9EF" cx="10" cy="10" r="10" />
            <path
                fill={props.fill}
                d="M13.536 5.05l1.414 1.414-3.573 3.574 3.535 3.535-1.387 1.387-3.543-3.528-3.518 3.518-1.414-1.414 3.525-3.525-3.543-3.529L6.444 5.07 9.98 8.606z"
            />
        </g>
    </svg>
);

export default SVG;
