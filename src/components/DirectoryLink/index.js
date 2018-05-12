import React from 'react';

const DirectoryLink = ({ name, onClick }) => (
    <a href="javascript:void(0)" onClick={(e) => onClick(e, name)}>{ name } > </a>
)

export default DirectoryLink;