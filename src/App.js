import React from 'react';
import styled from 'styled-components';

import Users from './containers/Users';

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default () => {
  return (
    <div>
      <Users />
      <Button>Render</Button>
    </div>
  );
};
