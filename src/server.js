import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema.js"; // Your GraphQL schema
import resolvers from "./resolvers.js"; // Your resolvers

const createApolloServer = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Optionally add authentication logic here if needed (e.g., JWT)
      return {};
    },
  });

  // Start Apollo Server
  server.start().then(() => {
    server.applyMiddleware({ app });
    console.log(`Apollo Server ready at http://localhost:4000${server.graphqlPath}`);
  });

  return server;
};

export default createApolloServer;
