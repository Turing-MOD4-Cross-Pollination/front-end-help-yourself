const allResources = (state = [], action) => {
  switch (action.type) {
    case 'ALL_RESOURCES':
      return action.resources;

    default:
      return state;
  }
};

export default allResources;
