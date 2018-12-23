import { navigateTo, goBack } from 'framework7-redux';

export const openPanelLeft = () => navigateTo('/panel-left/');
export const closePanelLeft = () => goBack();
export const goToClientRecords = () => navigateTo('/clients/');
export const goToProceeds = () => navigateTo('/proceeds/');
export const goNotifySettings = () => navigateTo('/notify-settings/');
export const goToClientRecordOrder = () => navigateTo('/order/');


export const goToClientRecordsFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft());
    dispatch(goToClientRecords()); 
  };
};

export const goToProceedsFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft());
    dispatch(goToProceeds()); 
  };
};

export const goNotifySettingsFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft());
    dispatch(goNotifySettings()); 
  };
};