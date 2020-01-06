const selectResources = (state = [], action) => {
	switch (action.type) {
		case 'RESOURCE':
			if (state.contains(action.resource)) {
				return state.filter(element => element !== action.resource);
			} else {
				return [...state, action.resource];
			}
		default:
			return state;
	}
};

export default selectResources;
