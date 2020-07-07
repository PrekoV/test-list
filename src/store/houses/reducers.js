import {
  GET_HOUSES_FETCH,
  GET_HOUSES_SUCCESS,
  GET_HOUSES_FAILURE,
} from "./constants";

const initState = {
  houses: [],
  loading: false,
  err: "",
  page: 0,
  total: 0,
};

export const getHousesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_HOUSES_FETCH:
      return { ...state, loading: true, err: "" };
    case GET_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.payload.items,
        loading: false,
        err: "",
        page: action.payload.page,
        total: action.payload.pagination.total
      };
    case GET_HOUSES_FAILURE:
      return { ...state, loading: false, err: action.err };
    default:
      return { ...state };
  }
};
