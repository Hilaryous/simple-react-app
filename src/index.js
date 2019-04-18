import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import createApollo from './createApollo'
import { ApolloProvider } from 'react-apollo'

const client = createApollo()

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
