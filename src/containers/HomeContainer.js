import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import HomePage from '../pages/HomePage';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
