export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return {
        id: action.id,
        description: undefined,
      };
    case 'EDIT_PENDING_TODO':
      return {
        id: action.todo.id ,
        description: action.todo.description !== undefined ? action.todo.description : state.description,
      };
    case 'PUBLISH_TODO':
      return {
      };
    case 'DELETE_TODO':
      if (action.id === state.id){
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
};