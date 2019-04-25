import { REQUEST_USERS, RECEIVE_USERS, FAILED_REQEST } from '../constants';
import { getUsers } from '../utils/api';

export default {
  requestUsers: () => ({
    type: REQUEST_USERS,
  }),
  failedRequest: error => ({
    type: FAILED_REQEST,
    error,
  }),
  receiveUsers: location => async dispatch => {
    try {
      const { data } = await getUsers(location);
      dispatch({
        type: RECEIVE_USERS,
        payload: data.items,
      });
    } catch (error) {
      dispatch({
        type: FAILED_REQEST,
        error: 'Network error',
      });
    }
  },
};
