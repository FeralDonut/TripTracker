export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ENTRY':
    return {
      id: action.id,
      title: action.title,
      date: action.date,
      description: action.description,
    }
    case 'EDIT_ACTIVE_ENTRY':
      return {
        id: action.journalEntry.id,
        title: action.journalEntry.title !== undefined ? (action.journalEntry.title) : (state.title),
        date: action.journalEntry.date !== undefined ? (action.journalEntry.date) : (state.date),
        description: action.journalEntry.description !== undefined ? (action.journalEntry.description) : (state.description),
      };
    default:
      return state;
    }
  };