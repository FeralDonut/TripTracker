export default (state=[], action) => {
  switch (action.type){
    case 'PUBLISH_EATERY':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
        }
      ];
    case 'DELETE_EATERY':
      return state.filter( eatery => eatery.id !== action.id)
    default:
      return state;
  }
}