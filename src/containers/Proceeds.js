import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import Proceeds from '../pages/Proceeds';
// import { openLogin } from '../actions/LoginActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(Proceeds);
