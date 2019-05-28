import React from "react";
import styled from "styled-components";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";

import GET_USERS_BY_LOC from "../queries/Users.graphql";
import GET_LOCATION from "../queries/GetLocation.graphql";
import User from "./User";

const UsersList = styled.div`
  overflow-y: auto;
  height: 70vh;
`;

const UserList = ({
  getUsersByLocation: { loading, error, search, refetch }
}) => {
  if (loading) {
    return (
      <UsersList>
        <div>Loading...</div>
      </UsersList>
    );
  }
  if (error) {
    return (
      <UsersList>
        <button type="button" onClick={() => refetch()}>
          Reload
        </button>
      </UsersList>
    );
  }
  if (search.nodes.length === 0) {
    return (
      <UsersList>
        <div>Nothing found</div>
      </UsersList>
    );
  }

  return (
    <UsersList>
      {search.nodes.map(user => (
        <User key={user.id} user={user} />
      ))}
    </UsersList>
  );
};

UserList.propTypes = {
  getUsersByLocation: PropTypes.func.isRequired
};

export default compose(
  graphql(GET_LOCATION, { name: "getLocation" }),
  graphql(GET_USERS_BY_LOC, {
    name: "getUsersByLocation",
    options: ({ getLocation: { location } }) => ({
      variables: {
        location: `location:${location}`
      }
    })
  })
)(UserList);
