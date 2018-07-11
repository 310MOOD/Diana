import { ACTIONS, CATEGORIES } from "../constants";
import { _converToObjectByKey, _getObjectValues } from "../utility";

const initialState = {};

// id :
//   {
//     name:
//     description:
//     sizes:
//     price:
//     colors:
//     imgSrc:
//     category:
//   }

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.REQUEST_FAKE_DATA_SUCCEED:
      return _converToObjectByKey(action.items, "id");
    default:
      return state;
  }
};

export default products;

export const selectors = (state = initialState) => ({
  hasProduct: () => Object.keys(state).length > 0,
  getItemIds: () => _getObjectValues(state).map(item => item.id),
  getItemById: id => state[id],
  getCategoryById: id => state[id].category
});
