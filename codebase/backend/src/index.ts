import dotenv from "dotenv";

import Balance from "./models/Balance";

dotenv.config();

import connectDB from "./config/db";

const start = async (): Promise<void> => {
  console.log("🚀 Starting application...");
  await connectDB();
  console.log("🎉 App initialized successfully.");
};

start();

// const test = async () => {
//   const now = new Date();
//   await Balance.create({
//     datetime: now,
//     generation: 1000,
//     demand: 950,
//     netInterchanges: 50,
//   });
//   const found = await Balance.findOne({ datetime: now });
//   console.log("Inserted & read back:", found);
// };

// test().catch(console.error);
