import { combineReducers } from 'redux';
import select from './select';
import selectedResources from './selectedResources'

const rootReducer = combineReducers({
  select,
  selectedResources

});

export default rootReducer;
