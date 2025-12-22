import express from "express";
import Content from "../models/Content.js";

const router = express.Router();

// GET content by category
router.get("/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const data = await Content.find({ category }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
