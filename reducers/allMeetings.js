const allMeetings = (state = [], action) => {
  switch (action.type) {
    case 'ALL_MEETINGS':
      state = action.resources;

    default:
      return state;
  }
};

export default allMeetings;
