import { combineReducers } from 'redux';
import select from './select';
import selectedResources from './selectedResources';
import allResources from './allResources';
import allCategories from './allCategories';

const rootReducer = combineReducers({
	allResources,
	allCategories,
	select,
	selectedResources
});

export default rootReducer;
