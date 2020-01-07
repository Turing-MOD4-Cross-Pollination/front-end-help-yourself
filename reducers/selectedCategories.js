const selectedCategories = (state = [], action) => {
	switch (action.type) {
		case 'CATEGORY':
			if (state.includes(action.category)) {
				console.log(state.filter(element => element !== action.category));
				return state.filter(element => element !== action.category);
			} else {
				console.log([...state, action.category]);
				return [action.category, ...state];
			}
		default:
			return state;
	}
};

export default selectedCategories;
