import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import stressRoutes from "./routes/stressRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";



dotenv.config();       
connectDB();           

const app = express(); 
app.use(express.json());

// 👇 routes AFTER app initialization
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/stress", stressRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.get("/", (req, res) => {
  res.send("Stress Management Backend Running 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
