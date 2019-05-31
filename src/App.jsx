import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { withApollo } from "react-apollo";

import UserFrom from "./components/UserForm";
import UserList from "./components/UserList";
import Errors from "./components/Errors";

import GET_USERS_BY_LOC from "./queries/Users.graphql";

const AppWrapper = styled.div`
  max-width: 445px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
  margin-top: 10vh;
`;

const Info = styled.div`
  color: green;
`;

const App = ({ client }) => {
  const [token, setToken] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const logOut = () => {
    setErrors([]);
    setToken("");
    setLocation("");
    setUsers([]);
  };
  const fetchUsers = async () => {
    if (token) {
      try {
        const query = await client.query({
          query: GET_USERS_BY_LOC,
          context: {
            headers: {
              Authorization: `Bearer ${token}`
            }
          },
          variables: {
            location: `location:${location}`
          }
        });
        setErrors([]);
        setUsers(query.data.search.nodes);
      } catch (error) {
        setErrors([...errors, error.message]);
        setToken("");
        setLocation("");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [location]);

  return (
    <AppWrapper>
      <UserFrom
        token={token}
        errors={errors}
        setToken={value => setToken(value)}
        setLocation={value => setLocation(value)}
      />

      <Info>
        {!token &&
          "First you need to specify github personal token with user:read rights."}
        {token && (
          <>
            <div>
              Your token is:
              {token}
            </div>
            <button type="button" onClick={() => logOut()}>
              Remove Token
            </button>
          </>
        )}
      </Info>

      {errors.length > 0 && <Errors errors={errors} />}
      {location && users.length !== 0 && <UserList users={users} />}
    </AppWrapper>
  );
};

App.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(App);
