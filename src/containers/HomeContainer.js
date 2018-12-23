import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import HomePage from '../pages/HomePage';
// import { openLogin } from '../actions/LoginActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
