import API from "../../services/api";
import {
  getHouseFetchAction,
  getHouseSuccessAction,
  getHouseFailureAction,
} from "./actions";

export const getHouses = ({ page }) => {
  return (dispatch) => {
    const limit = 32;
    dispatch(getHouseFetchAction());
    return API.get(`?pagination[offset]=${page * limit}`)
      .then((res) => {
        dispatch(getHouseSuccessAction({...res.data, page}));
      })
      .catch((e) => {
        dispatch(getHouseFailureAction(e.message));
      });
  };
};
