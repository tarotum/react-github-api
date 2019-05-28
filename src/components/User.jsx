/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const UserWrapper = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  background-color: transparent;
  transition: background-color 0.5s;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: rgba(255, 165, 0, 0.5);
  }
`;

const Image = styled.img`
  display: flex;
  margin-right: 1em;
  widht: 3em;
  height: 3em;
`;

const H4 = styled.h4`
  margin: 0;
  line-height: 1;
  font-size: 1.2em;
`;

const User = ({ user }) => (
  <UserWrapper href={user.url} title={user.login}>
    <Image src={user.avatarUrl} alt={user.login} />
    <H4>{user.login}</H4>
  </UserWrapper>
);

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    avatarUrl: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default User;
