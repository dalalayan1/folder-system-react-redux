


import React, { Component } from 'react';
import FolderWrapper from '../FolderWrapper';
import './index.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

  componentDidMount() {
  }


  render() {

    const { todo = [], inprogress = [], done = [] } = this.props.appReducer;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Folder System</h1>
        </header>
        <div>

        </div>
        <div className='wrapper'>
            <div className='folder-system'>
                <FolderWrapper folderList = { ["1","2","3"] }/>
            </div>
        </div> 
      </div>
    );
  }
}

export default App;
