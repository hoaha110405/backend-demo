import express from "express";
import dotenv from "dotenv";
import authRouter from "./auth/routes/auth.routes";
import { connectDB } from "./auth/config/database";

dotenv.config();

const app = express();

// Middleware để parse JSON
app.use(express.json());

// Routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await connectDB();
});
