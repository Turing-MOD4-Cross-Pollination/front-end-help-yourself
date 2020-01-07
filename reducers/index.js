import { combineReducers } from 'redux';
import select from './select';
import selectedCategories from './selectedCategories';
import allResources from './allResources';
import allCategories from './allCategories';

const rootReducer = combineReducers({
	allResources,
	allCategories,
	select,
	selectedCategories
});

export default rootReducer;
