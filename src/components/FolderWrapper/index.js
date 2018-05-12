import React, { Component } from 'react';
import Folder from '../Folder';

class FolderWrapper extends Component {

    handleFolderClick = (evt) => {
        evt.preventDefault();
debugger
    }

    render() {

        const { folderList } = this.props;
    
        return (
          <div className="folder-wrapper">
            { folderList.map((eachFolderName, index)=> (
                <Folder key = { index } name = { eachFolderName } onClick = { this.handleFolderClick } />
            ))}
          </div>
        );
      }
}

export default FolderWrapper;