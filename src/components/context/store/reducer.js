import ACTIONS from "./action";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_COLOR:
      return { color: action.color };
    default:
      return state;
  }
};
