const allResources = (state = [], action) => {
  switch (action.type) {
    case 'ALL_RESOURCES':
      state = action.resources;
    default:
      return state;
  }
};

export default allResources;
