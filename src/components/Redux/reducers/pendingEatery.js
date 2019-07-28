export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EATERY':
    return {
        id: action.id,
        description: undefined,
      };
    case 'EDIT_PENDING_EATERY':
      return {
        id: action.eatery.id ,
        description: action.eatery.description !== undefined ? action.eatery.description : state.description,
      };
    case 'EATERY':
      return {
      };
    case 'DELETE_EATERY':
      if (action.id === state.id){
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
};