import React from 'react';
import styled from 'styled-components';

import UsersContainer from './containers/UsersContainer';

const AppWrapper = styled.div`
  max-width: 970px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
`;

const App = () => (
  <AppWrapper>
    <UsersContainer />
  </AppWrapper>
);

export default App;
