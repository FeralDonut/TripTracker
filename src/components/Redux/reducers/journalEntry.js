export default (state=[], action) => {
  switch (action.type){
    case 'PUBLISH_ENTRY':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          date: action.date,
          description: action.description,
        }
      ];
      case 'UPDATE_ENTRY':
          return state.map( entry => {
            if (entry.id === action.id) {
              return {
                id: action.id,
                title: action.title !== undefined ? action.title : entry.title,
                date: action.date  !== undefined ? action.date : entry.date,
                description: action.description  !== undefined ? action.description : entry.description
              }
            }
            return entry;
          });
    case 'DELETE_ENTRY':
      return state.filter( entry => entry.id !== action.id)
    default:
      return state;
  }
}