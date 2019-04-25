import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Users = ({ users }) => (
  <div>
    {users.map(item => (
      <User key={item.id} login={item.login} />
    ))}
  </div>
);

Users.propTypes = {
  users: PropTypes.object.isRequired,
};

export default Users;
