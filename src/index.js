import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // DB connection
//import createApolloServer from "./server.js"; // Apollo Server setup

dotenv.config();

const app = express();

// Connect to the PostgreSQL database
connectDB();

// Create and apply Apollo Server to the Express app
//createApolloServer(app);

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});