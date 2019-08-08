export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_INDIVIDUAL_TRIP':
      return action;
    default:
      return state;
  }
};