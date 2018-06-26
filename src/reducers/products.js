import { ACTIONS } from "../constants";

const initialState = {
  items: []
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.REQUEST_FAKE_DATA_SUCCEED:
      return { ...state, items: [...action.items] };
    default:
      return state;
  }
};

export default products;

export const selectors = (state = {}) => ({
  getItems: () => state.items
});
