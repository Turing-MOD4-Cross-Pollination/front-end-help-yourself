import { combineReducers } from 'redux';
import select from './select';
import selectedResources from './selectedResources'
import allResources from './allResources'

const rootReducer = combineReducers({
  allResources,
  select,
  selectedResources

});

export default rootReducer;
