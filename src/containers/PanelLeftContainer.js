import { connect } from 'react-redux'
import {
  closePanelLeft,
} from '../actions/PanelLeftActions';
import PanelLeft from '../components/LeftMenu';
import {
  goToClientRecordsFromLeftPanel,
  goToProceedsFromLeftPanel,
  goNotifySettingsFromLeftPanel,
} from '../actions/PanelLeftActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToClientRecords: () => dispatch(goToClientRecordsFromLeftPanel()),
    onGoToProceeds: () => dispatch(goToProceedsFromLeftPanel()),
    onGoToNotifySettings: () => dispatch(goNotifySettingsFromLeftPanel()),
  };
};

export default connect(null, mapDispatchToProps)(PanelLeft);
