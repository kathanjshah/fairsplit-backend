import { connectDB } from "./config/db.js";

const testDatabaseConnection = async () => {
  try {
    await connectDB();
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error(`❌ Database connection failed: ${error.message}`);
  }
};

// Run the test
testDatabaseConnection();
