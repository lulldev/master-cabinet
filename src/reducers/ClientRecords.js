const initialState = {
  clientRecords: null,
  isLoadingClientRecords: false,
  isLoadingClientRecordsComplete: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_CLIENT_RECORDS':
      return {
        ...state,
        isLoadingClientRecords: true,
      };
    case 'RECEIVE_CLIENT_RECORDS':
      return {
        ...state,
        isLoadingClientRecords: false,
        isLoadingClientRecordsComplete: true,
        clientRecords: action.clientRecords,
      };
    case 'ERROR_CLIENT_RECORDS':
      return {
        ...state,
        error: action.error,
        isLoadingClientRecords: false,
        isLoadingClientRecordsComplete: false,
        clientRecords: null,
      };
    default:
      return state;
  }
};
