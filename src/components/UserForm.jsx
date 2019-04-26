import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const From = styled.form`
  display: flex;
  margin-top: 10vh;
  margin-bottom: 5vh;
`;
const Input = styled.input`
  flex-grow: 1;
  font-size: 2em;
  padding: 0.3em 0.5em;
  border: 1px solid orange;
  border-right: none;
  width: 100%;
`;
const Button = styled.button`
  font-size: 1.3em;
  border: none;
  background-color: orange;
  padding: 0.3em 0.5em;
  cursor: pointer;
  display: flex;
`;

const Icon = styled.svg`
  width: 30px;
  height: 30px;
`;

const UserForm = ({ fromValue, inputHandler, submitHandler }) => (
  <Fragment>
    <From onSubmit={submitHandler}>
      <Input type="search" value={fromValue} onChange={inputHandler} placeholder="location..." />
      <Button type="submit">
        <Icon xmlns="http://www.w3.org/2000/svg">
          <g fill="#000">
            <path d="M29.18 25.2l-6.89-6.88a13.25 13.25 0 0 1-3.97 3.97l6.88 6.89a2.81 2.81 0 1 0 3.98-3.98zM22.5 11.25a11.25 11.25 0 1 0-22.5 0 11.25 11.25 0 0 0 22.5 0zm-11.25 8.44a8.45 8.45 0 0 1 0-16.88 8.45 8.45 0 0 1 0 16.88z" />
            <path d="M4.69 11.25h1.87a4.7 4.7 0 0 1 4.69-4.69V4.7a6.57 6.57 0 0 0-6.56 6.56z" />
          </g>
        </Icon>
      </Button>
    </From>
  </Fragment>
);

UserForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  fromValue: PropTypes.string.isRequired,
};

export default UserForm;
