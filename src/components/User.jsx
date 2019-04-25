/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user">
    <a href={user.html_url}>
      <img width="50" height="50" src={user.avatar_url} alt={user.login} />
    </a>
    <a href={user.html_url}>
      <h4>{user.login}</h4>
    </a>
  </div>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default User;
