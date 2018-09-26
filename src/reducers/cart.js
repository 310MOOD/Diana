import { ACTIONS, CART_STATUS, PRODUCT_STATUS } from "../constants";

const initialState = { items: [], status: CART_STATUS.SHOPPING };

const DEFAULT_ITEM_STATUS = PRODUCT_STATUS.ADDED;
const DEFAULT_COUNT = 1;

//    {
//       items: [{
//         id,
//         size,
//         color,
//         count,
//         status
//       }],
//       status: ""
//    }

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_CART: {
      const { id, size, color } = action;
      const newItem = {
        id,
        size,
        color,
        count: DEFAULT_COUNT,
        status: DEFAULT_ITEM_STATUS
      };

      return { ...state, items: [...state.items, newItem] };
    }
    default:
      return state;
  }
};

export default cart;

export const selectors = (state = initialState) => ({
  getCartItems: () => state.items,
  getCartStatus: () => state.status
});
