export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PACKING_LIST":
      return {
        id: action.id,
        description: undefined,
        count: undefined
      };
    case "EDIT_PENDING_PACKING_LIST":
      return {
        id: action.packingItems.id,
        description:
          action.packingItems.description !== undefined
            ? action.packingItems.description
            : state.description,
        count:
          action.packingItems.count !== undefined
            ? action.packingItems.count
            : state.count
      };
    case "PUBLISH_PACKING_LIST":
      return {};
    case "DELTE_PACKING_LIST":
      if (action.id === state.id) {
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
};