import { ApolloServer } from "apollo-server-express";
import express from "express";
import {typeDefs} from "./schema/typeDefs/index.js"; // Your GraphQL schema
import {resolvers} from "./schema/resolvers/index.js"; // Your resolvers

const createApolloServer = async (app, models) => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      models,
      req
    }) // Optional auth logic
  });

  await server.start(); // ✅ Start the server properly before applying middleware
  server.applyMiddleware({ app });

  console.log(`🚀 Apollo Server ready at http://localhost:4000${server.graphqlPath}`);
  
  return server;
};

export default createApolloServer;
