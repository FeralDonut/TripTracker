export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ENTRY':
    return {
      id: action.id,
      decription: action.description,
    }
    case 'EDIT_ACTIVE_ENTRY':
      return {
        id: action.task.id,
        title: action.task.description !== undefined ? (action.task.description) : (state.description),
      };
    default:
      return state;
    }
  };