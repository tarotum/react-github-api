import { GET_USERS } from '../constants';

const users = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return payload;
    default:
      return state;
  }
};

export default users;
