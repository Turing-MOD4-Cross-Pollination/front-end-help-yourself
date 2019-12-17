const select = (state = [], action) => {
  switch (action.type) {
    case 'OBJECT':
      return action.favorites;
    default:
      return state;
  }
};

export default select;