import React, { Component } from 'react';
import Folder from '../Folder';

class FolderWrapper extends Component {

    handleFolderClick = (evt,name) => {
        evt.preventDefault();
        this.props.onClick(name);
    }

    render() {

        const { folderList } = this.props;
    
        return (
            <div className="folder-system">
                { folderList.map((eachFolder, index)=> (
                    <Folder key = { index } name = { eachFolder } onClick = { this.handleFolderClick } />
                ))}
            </div>
        );
      }
}

export default FolderWrapper;