import { connect } from 'react-redux'
import { goBack, navigateTo } from 'framework7-redux';
import { openPanelLeft } from '../actions/PanelLeftActions';
import ClientRecordOrder from '../pages/ClientRecordOrder';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
  };
};

export default connect(null, mapDispatchToProps)(ClientRecordOrder);
