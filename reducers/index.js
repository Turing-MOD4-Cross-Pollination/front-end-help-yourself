import { combineReducers } from 'redux';
import selectedCategories from './selectedCategories';
import allResources from './allResources';
import allCategories from './allCategories';
import allMeetings from './allMeetings';

const rootReducer = combineReducers({
  allResources,
  allCategories,
  selectedCategories,
  allMeetings,
});

export default rootReducer;
