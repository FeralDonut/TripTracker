export default (state = '', action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return action.id
    case 'PUBLISH_ENTRY':
      return '';
    case 'SELECT_ENTRY':
      return action.id
    case 'UPDATE_ENTRY':
      return '';
    case 'DESELECT_ENTRY':
      return '';
    default:
      return state;
  }
 
};