import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { initializeModels } from "../models/index.js";
import { setupAssociations } from "../models/associations.js";

// Load environment variables
dotenv.config();

const POSTGRES_PORT = process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5432;

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST = "localhost",
} = process.env;

// Initialize Sequelize
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  dialect: "postgres",
  logging: false,
});

// Function to test and establish the database connection
const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log("✅ PostgreSQL Connected!");

      // Initialize models
      const models = initializeModels(sequelize);

      // Apply associations
      setupAssociations(models);

      // Sync database
      await sequelize.sync({ alter: true });
      console.log("✅ Database synced!");

      return;
    } catch (error) {
      console.error(`❌ Database connection failed: ${error.message}`);
      retries -= 1;
      console.log(`🔄 Retrying... Attempts left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  console.error("❌ All connection attempts failed. Exiting...");
  process.exit(1);
};

export { sequelize, connectDB };
