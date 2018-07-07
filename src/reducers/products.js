import { ACTIONS, CATEGORIES } from "../constants";

const initialState = {
  items: [],
  selectedItems: [],
  activeItem: {}
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.REQUEST_FAKE_DATA_SUCCEED:
      return { selectedItems: [...action.items], items: [...action.items] };
    case ACTIONS.CHANGE_SELECTED_CATEGORY:
      const { newType } = action;

      if (newType === CATEGORIES.ALL) {
        return { ...state, selectedItems: state.items };
      }

      return {
        ...state,
        selectedItems: state.items.filter(item => item.type === action.newType)
      };
    case ACTIONS.CHANGE_ACTIVE_ITEM:
      return { ...state, activeItem: action.newActiveItem };
    default:
      return state;
  }
};

export default products;

export const selectors = (state = {}) => ({
  getItems: () => state.items,
  getselectedItems: () => state.selectedItems,
  getActiveItem: () => state.activeItem
});
