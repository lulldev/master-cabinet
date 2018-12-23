import { connect } from 'react-redux'
import {
  closePanelLeft,
  goToFormPageFromLeftPanel,
} from '../actions/PanelLeftActions';
import PanelLeft from '../components/LeftMenu';

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToForm: () => dispatch(goToFormPageFromLeftPanel()),
  };
};

export default connect(null, mapDispatchToProps)(PanelLeft);
