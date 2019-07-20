export default (state = {activeTab: "attractions"}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.tabName
      };
    default:
      return state;
  }
};