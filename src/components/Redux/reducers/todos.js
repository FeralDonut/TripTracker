export default (state=[], action) => {
  switch (action.type){
    case 'PUBLISH_TODO':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
        }
      ];
    case 'DELETE_TODO':
      return state.filter( todo => todo.id !== action.id)
    default:
      return state;
  }
}