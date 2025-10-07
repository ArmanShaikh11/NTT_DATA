import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import registerRouter from "./routes/register.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/register", registerRouter);

// MongoDB Connection
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
if (!mongoUri) {
  console.warn(
    "MONGO_URI not found in environment. Create a .env file with MONGO_URI=your_atlas_connection_string"
  );
}

async function start() {
  try {
    if (mongoUri) {
      await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 15000,
      });
      console.log("Connected to MongoDB Atlas");
    } else {
      console.warn(
        "Server will start without DB connection due to missing MONGO_URI."
      );
    }

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
