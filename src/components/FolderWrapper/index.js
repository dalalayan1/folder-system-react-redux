import React, { Component } from 'react';
import Folder from '../Folder';

class FolderWrapper extends Component {

    handleFolderClick = () => {

    }

    render() {

        const { folderList } = this.props;
    
        return (
          <div className="folder-wrapper">
            { folderList.map((eachFolderName, index)=> (
                <Folder name = { eachFolderName } onClick = { this.handleFolderClick } />
            ))}
          </div>
        );
      }
}

export default FolderWrapper;