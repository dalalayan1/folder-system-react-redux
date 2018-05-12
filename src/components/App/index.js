


import React, { Component } from "react";
import DirectoryLink from "../DirectoryLink";
import FolderWrapper from "../FolderWrapper";
import CreateFolderModal from "../CreateFolderModal";
import "./index.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showFolderModal: false
        }
    }

  componentDidMount() {
    
  }

  showModal = (evt) => {
    evt.preventDefault();
    this.setState({
      showFolderModal: !this.state.showFolderModal
    });
  }

  createFolder = (evt, name) => {
    evt.preventDefault();
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

  handleDirectoryClick = (evt, name) => {
    evt.preventDefault();
    this.props.modifyDirectoryList(name);
  }

  componentWillReceiveProps(newProps) {
    
  }

  render() {

    const { msg, directory, directoryList = [], folderList = [] } = this.props.appReducer;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Folder System</h1>
          <h2 className="App-title status">{ msg }</h2>
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
            <div className="folder-system">
                <FolderWrapper
                  folderList = { folderList }
                  onClick = { this.changeDirectory }
                />
            </div>
        </div>
        <button onClick = { this.showModal }>+ NEW FOLDER</button>
        { this.state.showFolderModal &&
          <CreateFolderModal
            onClick = { this.createFolder }
          />
        }
      </div>
    );
  }
}

export default App;
