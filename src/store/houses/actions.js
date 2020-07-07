import { actionCreator } from "../actionCreator";
import {
  GET_HOUSES_FETCH,
  GET_HOUSES_SUCCESS,
  GET_HOUSES_FAILURE,
} from "./constants";

export const getHouseFetchAction = () => actionCreator(GET_HOUSES_FETCH);
export const getHouseSuccessAction = (payload) =>
  actionCreator(GET_HOUSES_SUCCESS, payload);
export const getHouseFailureAction = (err) => actionCreator(GET_HOUSES_FAILURE, err);
