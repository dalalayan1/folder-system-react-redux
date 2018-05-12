import React from "react";

const CreateFolderModal = ({ onClick, closeModal, closeModalButton }) => (
    <div className="create-folder-modal-wrapper" onClick={ closeModal }>
        <div className="create-folder-modal" >
            <button className = "close-modal-cta" onClick = { closeModalButton }>X</button>
            <input placeholder = "Enter folder name" className = "create-folder-input"/>
            <button className = "create-folder-cta" onClick = { onClick }>Create</button>
        </div>
    </div>
)

export default CreateFolderModal;