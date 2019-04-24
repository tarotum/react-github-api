import { GET_USERS } from '../constants';
import api from '../utils/api';

const userAction = {
  getUsers: users => ({
    type: GET_USERS,
    payload: users.items
  }),
  fetchUsers: location => dispatch => {
    api.getUsers(location).then(({ data }) => {
      dispatch(userAction.getUsers(data));
    });
  }
};

export default userAction;
