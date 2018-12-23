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

export const stateKernel = new Framework7StateKernel();

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer,
    login: loginReducer,
    form: formReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

syncFramework7WithStore(store, stateKernel);
