export default (state = [], action) => {
  switch (action.type) {
    case "PUBLISH_PACKING_LIST":
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          count: action.count
        }
      ];
    case "DELETE_PACKING_LIST":
      return state.filter(packingItems => packingItems.id !== action.id);
    default:
      return state;
  }
};
