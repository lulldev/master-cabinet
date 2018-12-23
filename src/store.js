import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {
  Framework7StateKernel,
  framework7Reducer,
  syncFramework7WithStore,
} from 'framework7-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import loginReducer from './reducers/LoginReducer';
import formReducer from './reducers/FormReducer';
import proceedsReducer from './reducers/Proceeds';
import clientRecordsReducer from './reducers/ClientRecords';

export const stateKernel = new Framework7StateKernel();

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer,
    login: loginReducer,
    form: formReducer,
    proceeds: proceedsReducer,
    clientRecords: clientRecordsReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

syncFramework7WithStore(store, stateKernel);
