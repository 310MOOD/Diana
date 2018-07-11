import { combineReducers } from "redux";
import { createSelector } from "reselect";
import account, { selectors as accountSelectors } from "./account";
import products, { selectors as productSelectors } from "./products";
import list, { selectors as listSelectors } from "./list";

const rootReducer = combineReducers({ account, products, list });

const createRootSelectors = createSelector(
  state => state,
  state => ({
    getAccountSelectors: () => accountSelectors(state.account),
    getProductSelectors: () => productSelectors(state.products),
    getListSelectors: () => listSelectors(state.list)
  })
);

export const selectors = createSelector(
  state => state,
  state => {
    const rootSelectors = createRootSelectors(state);

    const derivedSelectors = {
      getSelectedItems: () => {
        const { getItemById } = rootSelectors.getProductSelectors();
        const { getSelectedItemIds } = rootSelectors.getListSelectors();

        return getSelectedItemIds().map(id => getItemById(id));
      }
    };

    return { ...rootSelectors, ...derivedSelectors };
  }
);

export default rootReducer;
