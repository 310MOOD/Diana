import { ACTIONS } from "../constants";

const initialState = {
  phone: "",
  cartId: ""
};

const account = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.REGISTER_USER:
      return { ...state, phone: action.phoneNumber };
    default:
      return state;
  }
};

export default account;

export const selectors = (state = initialState) => ({
  getUserPhoneNumber: () => state.phone
});
