import dotenv from "dotenv";

import connectDB from "./config/db";
import { fetchAndSaveBalance } from "./services/reeService";

dotenv.config();

const start = async (): Promise<void> => {
  console.log("🚀 Starting application...");
  await connectDB();
  console.log("🎉 App initialized successfully.");
};

const testRee = async () => {
  try {
    await fetchAndSaveBalance("2023-01-01T00:00", "2023-01-31T23:59", "day");
    console.log("🎉 REE ingestion test OK");
  } catch (e) {
    console.error("❌ REE ingestion test FAILED", e);
  }
};

start();
testRee();
