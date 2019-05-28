/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import ApolloCliet from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";

import "./index.css";

const defaultState = {
  location: "Odessa"
};

const client = new ApolloCliet({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer c4c5692c4a84a45ccb83541266906fe0f3e481c4"
  },
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
