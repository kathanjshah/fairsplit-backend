import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Destructure environment variables for the database connection
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT = 5432, // Default port if not provided
  POSTGRES_HOST = 'localhost', // Default host if not provided
} = process.env;

// Set up PostgreSQL connection using individual parameters
const sequelize = new Sequelize({
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  dialect: "postgres",
  logging: false, // Disable SQL logging (optional)
});

// Function to test DB connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export { sequelize, connectDB };
