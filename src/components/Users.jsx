import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import User from "./User";

const UsersList = styled.div`
  overflow-y: auto;
  height: 70vh;
`;

const Users = ({ users, isLoading, error }) => {
  if (error !== "") {
    return <p>{error}</p>;
  }
  if (isLoading && !users.length) {
    return <p>Loading...</p>;
  }
  if (users.length === 0) {
    return <p>Nothing found</p>;
  }
  return (
    <UsersList>
      {users.map(item => (
        <User key={item.id} user={item} />
      ))}
    </UsersList>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default Users;
