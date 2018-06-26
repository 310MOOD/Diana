import { combineReducers } from "redux";
import { createSelector } from "reselect";
import account, { selectors as accountSelectors } from "./account";

const rootReducer = combineReducers({ account });

export const rootSelectors = createSelector(
  state => state,
  state => ({
    getAccountSelectors: () => accountSelectors(state.account)
  })
);

export default rootReducer;
