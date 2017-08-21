import { combineReducers } from 'redux';
import loadRemoteContent from './loadRemoteContentReducer';

export const rootReducer = combineReducers({
  loadRemoteContent,
});
