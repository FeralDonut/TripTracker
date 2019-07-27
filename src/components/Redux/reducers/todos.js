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
    default:
      return state;
  }
}