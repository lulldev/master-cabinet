import { connect } from 'react-redux'
import { openPanelLeft } from '../actions/PanelLeftActions';
import { loadClientRecords } from '../actions/ClientRecords';
import { 
  getClientRecords,
  isClientRecordsLoading,
  isClientRecordsLoadingComplete,
 } from '../selectors/ClientRecords';
import ClientRecords from '../pages/ClientRecords';

const mapStateToProps = (state) => {
  return {
    clientRecords: getClientRecords(state),
    isLoading: isClientRecordsLoading(state),
    isLoadingComplete: isClientRecordsLoadingComplete(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    loadClientRecords: () => dispatch(loadClientRecords()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientRecords);
