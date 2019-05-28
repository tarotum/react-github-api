import React from "react";
import styled from "styled-components";

import UserFrom from "./components/UserForm";
import UserList from "./components/UserList";

const AppWrapper = styled.div`
  max-width: 445px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
`;

const App = () => (
  <AppWrapper>
    <UserFrom />
    <UserList />
  </AppWrapper>
);

export default App;
