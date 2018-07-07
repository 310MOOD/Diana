import { ACTIONS } from "../constants";
import { requestFakeDataAPI } from "../APIs/request_fake_data";

export const requestFakeData = () => dispatch => {
  dispatch({ type: ACTIONS.REQUEST_FAKE_DATA });

  return requestFakeDataAPI()
    .then(data => {
      dispatch(requestFakeDataSucceed(data));
    })
    .catch(error => dispatch(requestFakeDataFailed(error)));
};

const requestFakeDataSucceed = items => ({
  type: ACTIONS.REQUEST_FAKE_DATA_SUCCEED,
  items
});

const requestFakeDataFailed = error => ({
  type: ACTIONS.REQUEST_FAKE_DATA_FAILED,
  error
});

export const changeSeletedCategory = ({ newType }) => ({
  type: ACTIONS.CHANGE_SELECTED_CATEGORY,
  newType
});
