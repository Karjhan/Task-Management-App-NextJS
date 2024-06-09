import React from 'react'

const FaSvgIcon = ({ faIcon, ...rest }: { faIcon: any, [key: string]: any }) => {
    const { width, height, svgPathData } = faIcon;
    return (
        <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
            <path d={svgPathData}></path>
        </svg>
    );
};

export default FaSvgIcon