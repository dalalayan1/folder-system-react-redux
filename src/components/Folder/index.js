import React from 'react';

const Folder = ({ name, onClick }) => (
    <button className='folder' onClick = { (e) => onClick(e,name) }>
        <img className = 'folder-img' src='/images/folder.png'/>
        <div className = 'folder-name'>{ name }</div>
    </button>
)

export default Folder;