import express from "express";
import createApolloServer from "./src/server.js";
import { connectDB } from "./src/config/db.js";
const app = express();

const startServer = async () => {
  const models = await connectDB();
  await createApolloServer(app, models); // ✅ Start Apollo before listening
  app.listen(4000, () => {
    console.log("🚀 Server running on http://localhost:4000/graphql");
  });
};

startServer();
