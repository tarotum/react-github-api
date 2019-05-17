import { REQUEST_USERS, RECEIVE_USERS, FAILED_REQEST } from "../constants";

const initialState = {
  isLoading: false,
  items: [],
  error: ""
};

const users = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case REQUEST_USERS:
      return {
        isLoading: true,
        items: state.items,
        error: ""
      };
    case RECEIVE_USERS:
      return {
        isLoading: false,
        items: payload,
        error: ""
      };
    case FAILED_REQEST:
      return {
        isLoading: false,
        items: [],
        error
      };
    default:
      return state;
  }
};

export default users;
