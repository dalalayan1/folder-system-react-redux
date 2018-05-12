import React from 'react';

const CreateFolderModal = ({ onClick }) => (
    <div className='create-folder' >
        <input placeholder = 'Enter folder name' className = 'create-folder-input'/>
        <button className = 'create-folder-cta' onClick = { onClick }>Create</button>
    </div>
)

export default CreateFolderModal;