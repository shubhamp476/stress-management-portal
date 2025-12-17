import express from "express";
import { submitStressTest } from "../controllers/stressController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitStressTest);

export default router;
