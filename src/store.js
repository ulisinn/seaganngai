/**
 * Created by ulrichsinn on 04/19/2017.
 */

import { applyMiddleware, compose, createStore } from 'redux';
// import createLogger from 'redux-logger';
// import DevTools from './containers/DevTools';
import { rootReducer } from './reducers/index';
import { getRemoteData } from './actions/index';
import thunk from 'redux-thunk';


export const REMOTE_LOAD_PENDING = 'REMOTE_LOAD_PENDING';
export const REMOTE_LOAD_SUCCESS = 'REMOTE_LOAD_SUCCESS';
export const REMOTE_LOAD_ERROR = 'REMOTE_LOAD_ERROR';
export const PREPARE_DATA = 'PREPARE_DATA';
export const REMOTE_DATA_READY = 'REMOTE_DATA_READY';

export const INIT_PORTFOLIO = 'INIT_PORTFOLIO';

let url = 'http://www.addtothenoise.com/seaganngai/data.json';
url = '../mock/data.json';

// const logger = createLogger();
const enhancer = compose(
  // applyMiddleware(logger, thunk),
  applyMiddleware(thunk),
  // DevTools.instrument()
);

const store = createStore(
  rootReducer,
  {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);

store.dispatch(getRemoteData(url));

export default store;