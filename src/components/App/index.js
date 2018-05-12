


import React, { Component } from "react";
import DirectoryLink from "../DirectoryLink";
import FolderWrapper from "../FolderWrapper";
import CreateFolderModal from "../CreateFolderModal";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showFolderModal: false
        }
    }

  componentDidMount() {
    
  }

  showModal = (e) => {
    e.preventDefault();
    this.setState({
      showFolderModal: !this.state.showFolderModal
    });
  }

  createFolder = (e, name) => {
    e.preventDefault();
    const folderName = document.querySelectorAll(".create-folder-input")[0].value;
    document.querySelectorAll(".create-folder-input")[0].value = '';
    folderName && this.props.addFolder(folderName);
    this.setState({
      showFolderModal: !this.state.showFolderModal
    })
  }

  changeDirectory = (directoryName) => {
    this.props.changeDirectory(directoryName);
  }

  handleDirectoryClick = (e, name) => {
    e.preventDefault();
    this.props.modifyDirectoryList(name);
  }

  closeModal = (e) => {
    if ( e.target === document.querySelectorAll('.create-folder-modal-wrapper')[0] ) {
      this.setState({
        showFolderModal: false
      });
    }
  }

  closeModalButton = (e) => {
    e.preventDefault();
    this.setState({
      showFolderModal: false
    });
  }

  handleDeleteFolder = (name) => {
    this.props.removeFolder(name);
  }

  componentWillReceiveProps(newProps) {
    
  }

  render() {

    const { msg, directory, directoryList = [], folderList = [] } = this.props.appReducer;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Folder System</h1>
          <h4 className="app-info">{ msg }</h4>
        </header>
        <div className = "directory-wrapper">
          { directoryList.map((eachDirectory, index)=> (
            <DirectoryLink
              key = { index }
              name = { eachDirectory }
              onClick = { this.handleDirectoryClick }
              isLast = { index + 1 === directoryList.length ? true : false }
            />
          ))}
        </div>
        <div className="wrapper">
          <FolderWrapper
            folderList = { folderList }
            onClick = { this.changeDirectory }
            handleDeleteFolder = { this.handleDeleteFolder }
          />
        </div>
        <button  className = 'add-folder-cta' onClick = { this.showModal }>+ NEW FOLDER</button>
        { this.state.showFolderModal &&
          <CreateFolderModal
            onClick = { this.createFolder }
            closeModal = { this.closeModal }
            closeModalButton = { this.closeModalButton }
          />
        }
      </div>
    );
  }
}

export default App;
