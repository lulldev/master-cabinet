import { createStore, combineReducers } from 'redaction';
import reducers from './reducers';

const initialState = {}

const store = createStore({
  reducers: {
    ...combineReducers(reducers),
  },
  initialState,
})


export default store
