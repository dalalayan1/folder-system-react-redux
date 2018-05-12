import React, { Component } from 'react';
import Folder from '../Folder';

class FolderWrapper extends Component {

    handleFolderClick = (evt,name) => {
        evt.preventDefault();
        this.props.onClick(name);
    }

    handleDeleteFolder = (e, name) => {
        e.preventDefault();
        this.props.handleDeleteFolder(name);
      }

    render() {

        const { folderList } = this.props;
    
        return (
            <div className="folder-system">
                { folderList.map((eachFolder, index)=> (
                    <Folder key = { index } name = { eachFolder } handleDeleteFolder = { this.handleDeleteFolder } onClick = { this.handleFolderClick } />
                ))}
            </div>
        );
      }
}

export default FolderWrapper;