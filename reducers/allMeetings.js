const allMeetings = (state = [], action) => {
  switch (action.type) {
    case 'ALL_MEETINGS':
      return action.resources;

    default:
      return state;
  }
};

export default allMeetings;
