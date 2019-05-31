/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import ApolloCliet from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";

import "./index.css";

const defaultState = {
  location: "Odessa",
  key: ""
};

const client = new ApolloCliet({
  uri: "https://api.github.com/graphql",

  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
