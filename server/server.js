import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import stressRoutes from "./routes/stressRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* 🔥 CORS FIX (MOST IMPORTANT) */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/stress", stressRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.get("/", (req, res) => {
  res.send("Stress Management Backend Running 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
