import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

import User from "./User";

const UsersList = styled.div`
  overflow-y: auto;
  height: 70vh;
  margin-top: 3vh;
`;

const UserList = ({ users }) => {
  return (
    <UsersList>
      {users.length > 0 ? (
        users.map(user => <User key={user.id} user={user} />)
      ) : (
        <div>Nothing found</div>
      )}
    </UsersList>
  );
};

UserList.propTypes = {
  users: PropTypes.array
};

UserList.defaultProps = {
  users: []
};

export default UserList;
