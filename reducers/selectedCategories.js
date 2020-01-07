const selectedCategories = (state = [], action) => {
	switch (action.type) {
		case 'CATEGORY':
			if (state.includes(action.category)) {
				return state.filter(element => element !== action.category);
			} else {
				return [...state, action.category];
			}
		default:
			return state;
	}
};

export default selectedCategories;
