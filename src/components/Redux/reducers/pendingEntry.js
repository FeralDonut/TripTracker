export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
    return {
        id: action.id,
        title: '',
        date: undefined,
        description: undefined,
      };
    case 'EDIT_PENDING_ENTRY':
      return {
        id: action.journalEntry.id ,
        title: action.journalEntry.title !== undefined ? (action.journalEntry.title) : (state.title),
        date: action.journalEntry.date !== undefined ? (action.journalEntry.date) : (state.date),
        description: action.journalEntry.description !== undefined ? action.journalEntry.description : state.description,
      };
    case 'PUBLISH_ENTRY':
      return {
      };
    case 'DELETE_ENTRY':
      if (action.id === state.id){
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
};