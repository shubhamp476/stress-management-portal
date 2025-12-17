import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUserRecommendations } from "../controllers/recommendationController.js";

const router = express.Router();

router.get("/", authMiddleware, getUserRecommendations);

export default router;
