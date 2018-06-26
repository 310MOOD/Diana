import { ACTIONS } from "../constants";

//payload - str - phone number
export const registerUser = ({ phoneNumber }) => ({
  type: ACTIONS.REGISTER_USER,
  phoneNumber
});
