import { combineReducers } from 'redux';
import selectedCategories from './selectedCategories';
import allResources from './allResources';
import allCategories from './allCategories';

const rootReducer = combineReducers({
	allResources,
	allCategories,
	selectedCategories
});

export default rootReducer;
