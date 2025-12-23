import express from "express";
import auth from "../middleware/auth.js";
import { submitStressTest } from "../controllers/stressController.js";
import StressHistory from "../models/StressHistory.js";

const router = express.Router();

/**
 * Submit stress test
 */
router.post("/test", submitStressTest);

/**
 * Get logged-in user's stress history
 */
router.get("/history", auth, async (req, res) => {
  try {
    const history = await StressTest.find({ user: req.userId })
      .sort({ createdAt: 1 });

    res.json(history);
  } catch (err) {
    res.status(500).json({ message: "Failed to load history" });
  }
});

/**
 * Clear user's stress history (optional future feature)
 */
router.delete("/history", auth, async (req, res) => {
  try {
    await StressTest.deleteMany({ user: req.userId });
    res.json({ message: "History cleared" });
  } catch (err) {
    res.status(500).json({ message: "Failed to clear history" });
  }
});

export default router;
