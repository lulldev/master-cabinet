import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import NotifySettings from '../pages/NotifySettings';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(NotifySettings);
