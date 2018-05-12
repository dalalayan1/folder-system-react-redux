
import { connect } from 'react-redux';

import App from '../components/App';
import { bindActionCreators } from 'redux';
import { getAppDetails, addFolder , removeItem} from '../actions';


function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
        getAppDetails: bindActionCreators(getAppDetails, dispatch),
        addFolder: bindActionCreators(addFolder, dispatch),
        removeFolderWrapper: bindActionCreators(removeItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
