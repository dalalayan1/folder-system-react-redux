import React from 'react';

const DirectoryLink = ({ name, onClick, isLast }) => (
    <div className={`directory ${isLast ? "last" : ""}`}>
        <a href="javascript:void(0)" onClick={(e) => onClick(e, name)}>{ name } </a>
        { 
            !isLast && <span> > </span>
        }
    </div>
)

export default DirectoryLink;