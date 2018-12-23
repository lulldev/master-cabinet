import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import { loadProceeds } from '../actions/Proceeds';
import { 
  getProceeds,
  isProceedsLoading,
  isProceedsLoadingComplete,
  getSubscriptions,
 } from '../selectors/Proceeds';

import Proceeds from '../pages/Proceeds';

const mapStateToProps = (state) => {
  return {
    proceeds: getProceeds(state),
    subscription: getSubscriptions(state),
    isLoading: isProceedsLoading(state),
    isLoadingComplete: isProceedsLoadingComplete(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    loadProceeds: (date) => dispatch(loadProceeds(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Proceeds);
