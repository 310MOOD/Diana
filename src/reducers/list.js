import { ACTIONS, CATEGORIES } from "../constants";
import { _map } from "../utility";

const initialState = {
  selectedItemIds: [],
  activeItemId: ""
};

const list = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.REQUEST_FAKE_DATA_SUCCEED:
      const selectedItemIds = _map(action.items, "id");
      return { ...state, selectedItemIds };
    case ACTIONS.CHANGE_SELECTED_CATEGORY:
      const { newCategory, allItemIdsWithCategory } = action;

      return {
        ...state,
        selectedItemIds: allItemIdsWithCategory
          .filter(
            item =>
              newCategory === CATEGORIES.ALL || item.category === newCategory
          )
          .map(item => item.id)
      };
    case ACTIONS.CHANGE_ACTIVE_ITEM:
      return { ...state, activeItemId: action.newActiveItemId };
    default:
      return state;
  }
};

export default list;

export const selectors = (state = initialState) => ({
  getSelectedItemIds: () => state.selectedItemIds,
  getActiveItemId: () => state.activeItemId
});
