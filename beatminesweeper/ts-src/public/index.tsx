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
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { GlobalStoreProvider } from "GlobalStore";
import { GenericScore } from "./components/Leaderboard/leaderboard-types";

const link = '/graphql';

const httpLink = new HttpLink({
  uri: link,
  credentials: "include",
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
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <GlobalStoreProvider>
        <BrowserRouter>
          <Home ssrTopTimes={window.__INITIAL__DATA__.ssrTopTimes} />
        </BrowserRouter>
      </GlobalStoreProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("minesweeper-root")
);
