import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Error = styled.div`
  color: red;
`;

const Errors = ({ errors }) => {
  return (
    <Error>
      {errors.map(error => (
        <div key={error.length}>{error}</div>
      ))}
    </Error>
  );
};

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Errors;
