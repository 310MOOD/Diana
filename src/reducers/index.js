import { combineReducers } from "redux";
import { createSelector } from "reselect";
import account, { selectors as accountSelectors } from "./account";
import products, { selectors as productSelectors } from "./products";

const rootReducer = combineReducers({ account, products });

export const rootSelectors = createSelector(
  state => state,
  state => ({
    getAccountSelectors: () => accountSelectors(state.account),
    getProductSelectors: () => productSelectors(state.products)
  })
);

export default rootReducer;
