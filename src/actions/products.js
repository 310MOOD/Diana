import { ACTIONS } from "../constants";
import { requestFakeDataAPI } from "../APIs/request_fake_data";
import { selectors } from "../reducers";

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

export const changeSeletedCategory = ({ newCategory }) => (
  dispatch,
  getState
) => {
  const { getProductSelectors } = selectors(getState());
  const { getItemIds, getCategoryById } = getProductSelectors();
  return dispatch({
    type: ACTIONS.CHANGE_SELECTED_CATEGORY,
    allItemIdsWithCategory: getItemIds().map(id => ({
      id,
      category: getCategoryById(id)
    })),
    newCategory
  });
};

export const changeActiveItem = ({ itemId }) => ({
  type: ACTIONS.CHANGE_ACTIVE_ITEM,
  newActiveItemId: itemId
});
