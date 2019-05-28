import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import GET_USERS_BY_LOC from "../queries/Users.graphql";
import GET_LOCATION from "../queries/GetLocation.graphql";
import User from "./User";

const UsersList = styled.div`
  overflow-y: auto;
  height: 70vh;
`;

const UserList = () => {
  return (
    <UsersList>
      <Query query={GET_LOCATION}>
        {localResponce => {
          return (
            <Query
              query={GET_USERS_BY_LOC}
              variables={{
                location: `location:${localResponce.data.location}`
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>;
                if (error) return global.console.log(error);
                const {
                  search: { nodes }
                } = data;

                return nodes.map(user => <User key={user.id} user={user} />);
              }}
            </Query>
          );
        }}
      </Query>
    </UsersList>
  );
};

export default UserList;
