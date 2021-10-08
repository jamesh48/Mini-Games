import React from "react";
import axios from "axios";
import express from "express";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import fetch from "cross-fetch";
import { StaticRouter } from "react-router";
import { renderToNodeStream } from "react-dom/server";
import { htmlStart, htmlEnd } from "./template";
import { GlobalStoreProvider } from "GlobalStore";
import { Home } from "TSComponents/Home/Home";



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/graphql",
    fetch,
    fetchOptions: {
      credentials: "include",
    },
  }),
});

const minesweeperRouter = express.Router();

minesweeperRouter.get("*", async (req, res) => {
  const context = {};
  let resultScores;
  try {
    const results = await axios.post("http://localhost:4000/graphql", {
      headers: {
        "Content-Type": "application/json",
      },
      query: `query GetBeginnerScores {
                allBeginnerScores {
                  id
                  username
                  time
                  createdAt
                  updatedAt
                }
              }`,
    });

    resultScores = results.data.data.allBeginnerScores;
  } catch (err) {
    console.log(err.message);
  }

  const minesweeperStream = renderToNodeStream(
    <ApolloProvider client={client}>
      <GlobalStoreProvider>
        <StaticRouter location={req.url} context={context}>
          <Home />
        </StaticRouter>
      </GlobalStoreProvider>
    </ApolloProvider>
  );

  res.write(htmlStart(!!process.env.NODE_ENV, process.env.Cloudfront, resultScores));
  minesweeperStream.pipe(res, { end: false });
  minesweeperStream.on("end", () => {
    res.write(htmlEnd(!!process.env.NODE_ENV, process.env.Cloudfront));
    res.end();
  });
});

export default minesweeperRouter;
