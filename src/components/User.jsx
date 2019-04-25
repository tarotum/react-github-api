import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login }) => (
  <div>
User -
    {login}
  </div>
);

User.propTypes = {
  login: PropTypes.string,
};

User.defaultProps = {
  login: 'User login',
};

export default User;
