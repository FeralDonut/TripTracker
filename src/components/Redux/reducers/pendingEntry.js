export default (state = {}, action) => {
  console.log("pendingEntryreducers", action)
  switch (action.type) {
    case 'ADD_ENTRY':
    return {
        id: action.id,
        description: undefined,
      };
    case 'EDIT_PENDING_ENTRY':
      return {
        id: action.journalEntry.id ,
        description: action.journalEntry.description !== undefined ? action.journalEntry.description : state.description,
      };
    case 'PUBLISH_ENTRY':
      return {
      };
    case 'DELETE_ENTRY_LIST':
      if (action.id === state.id){
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
};