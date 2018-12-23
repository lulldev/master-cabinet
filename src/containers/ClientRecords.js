import { connect } from 'react-redux'
import { goBack } from 'framework7-redux';
import { openPanelLeft, goToClientRecordOrder } from '../actions/PanelLeftActions';
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
    onGoBack: () => goBack(),
    onGoToClientRecordOrder: () => dispatch(goToClientRecordOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientRecords);
