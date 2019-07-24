export default (state=[], action) => {
  switch (action.type){
    case 'PUBLISH_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
        }
      ];
    default:
      return state;
  }
}