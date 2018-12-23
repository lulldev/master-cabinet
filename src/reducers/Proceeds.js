const initialState = {
  proceeds: null,
  isLoadingProceeds: false,
  isLoadingProceedsComplete: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PROCEEDS':
      return {
        ...state,
        isLoadingProceeds: true,
      };
    case 'RECEIVE_PROCEEDS':
      return {
        ...state,
        isLoadingProceeds: false,
        isLoadingProceedsComplete: true,
        proceeds: action.proceeds,
      };
    case 'ERROR_PROCEEDS':
      return {
        ...state,
        error: action.error,
        isLoadingProceeds: false,
        isLoadingProceedsComplete: false,
        proceeds: null,
      };
    default:
      return state;
  }
};
