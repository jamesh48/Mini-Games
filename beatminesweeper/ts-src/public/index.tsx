import React from "react";
import ReactDOM from "react-dom";
import "TSComponents/main-styles/reset.scss";
import { Home } from "TSComponents/Home/Home";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import { GlobalStoreProvider } from "GlobalStore";
import { GenericScore } from "./components/Leaderboard/leaderboard-types";

console.log(process.env.NODE_ENV);

const link = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://beatminesweeper.app/graphql';

const httpLink = new HttpLink({
  uri: link,
  fetchOptions: {
    credentials: "include",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

declare const window: Window &
  typeof globalThis & {
    __INITIAL__DATA__: {
      ssrTopTimes: GenericScore[];
    };
  };


ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <GlobalStoreProvider>
      <BrowserRouter>
        <Home ssrTopTimes={window.__INITIAL__DATA__.ssrTopTimes} />
      </BrowserRouter>
    </GlobalStoreProvider>
  </ApolloProvider>,
  document.getElementById("minesweeper-root")
);
