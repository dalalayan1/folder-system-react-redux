


import React, { Component } from 'react';
import FolderWrapper from '../FolderWrapper';
import CreateFolderModal from '../CreateFolderModal';
import './index.css';

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
    const folderName = document.querySelectorAll('.create-folder-input')[0].value;
    folderName && this.props.addFolder(folderName);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.appReducer.length !== this.props.appReducer.length) {
      return true;
    }
  }

  render() {

    const { folderList = [] } = this.props.appReducer;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Folder System</h1>
        </header>
        <div>

        </div>
        <div className='wrapper'>
            <div className='folder-system'>
                <FolderWrapper folderList = { folderList }/>
            </div>
        </div>
        <button onClick = { this.showModal }>+ NEW FOLDER</button>
        { this.state.showFolderModal &&
          <CreateFolderModal onClick = { this.createFolder } />
        }
      </div>
    );
  }
}

export default App;
