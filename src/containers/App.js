
import { connect } from 'react-redux';

import App from '../components/App';
import { bindActionCreators } from 'redux';
import { getAppDetails, removeItem, updateList } from '../actions';


function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          getAppDetails: bindActionCreators(getAppDetails, dispatch),
          updateList: bindActionCreators(updateList, dispatch),
          removeFolderWrapper: bindActionCreators(removeItem, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
