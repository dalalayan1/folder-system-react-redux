
import { connect } from 'react-redux';

import App from '../components/App';
import { bindActionCreators } from 'redux';
import { getAppDetails, addFolder , changeDirectory, modifyDirectoryList, removeItem} from '../actions';


function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
        getAppDetails: bindActionCreators(getAppDetails, dispatch),
        addFolder: bindActionCreators(addFolder, dispatch),
        changeDirectory: bindActionCreators(changeDirectory, dispatch),
        modifyDirectoryList: bindActionCreators(modifyDirectoryList, dispatch),
        removeFolderWrapper: bindActionCreators(removeItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
