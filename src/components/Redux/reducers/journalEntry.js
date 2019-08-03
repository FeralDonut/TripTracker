export default (state=[], action) => {
  switch (action.type){
    case 'PUBLISH_ENTRY':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
        }
      ];
    case 'DELETE_ENTRY':
      return state.filter( entry => entry.id !== action.id)
    default:
      return state;
  }
}