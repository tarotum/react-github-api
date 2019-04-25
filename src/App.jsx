import React from 'react';
import styled from 'styled-components';

import Users from './containers/UsersContainer';

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default () => (
  <div>
    <Users />
    <Button>Render</Button>
  </div>
);
