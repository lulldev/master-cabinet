import _ from 'lodash';

export const getClientRecords = (state) => {
  return _.has(state.clientRecords.clientRecords, 'response')
    && state.clientRecords.clientRecords.response;
};

export const isClientRecordsLoading = (state) => {
  return state.clientRecords.isLoadingClientRecords;
};

export const isClientRecordsLoadingComplete = (state) => {
  return state.clientRecords.isLoadingClientRecordsComplete;
};
