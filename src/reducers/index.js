import { combineReducers } from "redux";
import account, { selectors as accountSelectors } from "./account";

const rootReducer = combineReducers({ account });

export const rootSelectors = () => {};

export default rootReducer;
