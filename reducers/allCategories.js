const allCategories = (state = [], action) => {
	switch (action.type) {
		case 'ALL_CATEGORIES':
			state = action.resources.reduce((acc, resource) => {
				if (!acc.includes(resource.category) && resource.category) {
					acc.push(resource.category);
				}
				return acc;
			}, []);
			return state;
		default:
			return state;
	}
};

export default allCategories;
