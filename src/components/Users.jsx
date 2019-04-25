import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Users = ({ users, isLoading, error }) => {
  if (error !== '') {
    return <p>{error}</p>;
  }
  if (isLoading && !users.length) {
    return <p>Loading...</p>;
  }
  if (users.length === 0) {
    return <p>Nothing found</p>;
  }
  return (
    <div className="user-list">
      {users.map(item => (
        <User key={item.id} user={item} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default Users;
