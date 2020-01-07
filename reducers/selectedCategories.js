const selectedCategories = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORY':
      if (state.includes(action.category)) {
        return state.filter((element) => element !== action.category);
      }
      return [action.category, ...state];

    default:
      return state;
  }
};

export default selectedCategories;
