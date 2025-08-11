// src/server.ts
import express from "express";
import { connectDB } from "./config/database";
import authRouter from "./routes/auth"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", authRouter)

app.listen(PORT, async () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
  await connectDB(); 
  // kết nối DB
});
