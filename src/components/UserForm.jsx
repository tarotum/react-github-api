import React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ fromValue, inputHandler, submitHandler }) => (
  <form onSubmit={submitHandler}>
    <input type="search" value={fromValue} onChange={inputHandler} placeholder="location..." />
    <button type="submit">Get users</button>
  </form>
);

UserForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  fromValue: PropTypes.string.isRequired,
};

export default UserForm;
