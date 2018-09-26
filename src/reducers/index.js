import { combineReducers } from "redux";
import { createSelector } from "reselect";
import account, { selectors as accountSelectors } from "./account";
import products, { selectors as productSelectors } from "./products";
import list, { selectors as listSelectors } from "./list";
import cart, { selectors as cartSelectors } from "./cart";

const rootReducer = combineReducers({ account, products, list, cart });

const createRootSelectors = createSelector(
  state => state,
  state => ({
    getAccountSelectors: () => accountSelectors(state.account),
    getProductSelectors: () => productSelectors(state.products),
    getListSelectors: () => listSelectors(state.list),
    getCartSelectors: () => cartSelectors(state.cart)
  })
);

export const selectors = createSelector(
  state => state,
  state => {
    const rootSelectors = createRootSelectors(state);

    const derivedSelectors = {
      getItemById: id => {
        return rootSelectors.getProductSelectors().getItemById(id);
      },
      getSelectedItems: () => {
        const { getItemById } = rootSelectors.getProductSelectors();
        const { getSelectedItemIds } = rootSelectors.getListSelectors();

        return getSelectedItemIds().map(id => getItemById(id));
      },
      getTotalPriceForAnItem: (itemId, count) => {
        const { getItemById } = rootSelectors.getProductSelectors();

        return count * getItemById(itemId).price;
      }
    };

    return { ...rootSelectors, ...derivedSelectors };
  }
);

export default rootReducer;
