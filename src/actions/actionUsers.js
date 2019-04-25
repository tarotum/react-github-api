import { GET_USERS } from '../constants';
import api from '../utils/api';

const getUsers = users => ({
  type: GET_USERS,
  payload: users.items,
});

export default {
  fetchUsers: location => async dispatch => {
    try {
      const { data } = await api.getUsers(location);
      dispatch(getUsers(data));
    } catch (error) {
      console.log('error request');
    }

    return 'done';
  },
};
