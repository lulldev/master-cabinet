import { connect } from 'react-redux'
import { openPanelLeft, closePanelLeft } from '../actions/PanelLeftActions';
import HomePage from '../pages/HomePage';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    onClosePanelLeft: () => dispatch(closePanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
