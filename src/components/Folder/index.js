import React from "react";

const Folder = ({ name, onClick }) => (
    <div className="folder-wrapper">
        <button className="folder" onClick = { (e) => onClick(e,name) }>
            <img className = "folder-img" src={"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/folder-icon.png"}/>
            <div className = "folder-name">{ name }</div>
        </button>
    </div>
)

export default Folder;