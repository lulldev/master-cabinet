import _ from 'lodash';

export const getProceeds = (state) => {
  return _.has(state.proceeds.proceeds, 'response')
    && state.proceeds.proceeds.response.Proceeds;
};

export const getSubscriptions = (state) => {
  return _.has(state.proceeds.proceeds, 'response')
    && state.proceeds.proceeds.response.Subscriptions;
};

export const isProceedsLoading = (state) => {
  return state.proceeds.isLoadingProceeds;
};

export const isProceedsLoadingComplete = (state) => {
  return state.proceeds.isLoadingProceedsComplete;
};
