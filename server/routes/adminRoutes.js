import express from "express";
import { uploadContent, deleteContent } from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/multer.js";
import Content from "../models/Content.js";

const router = express.Router();

/**
 * GET all uploaded content (Admin only)
 * GET /api/admin/content
 */
router.get("/content", adminAuth, async (req, res) => {
  try {
    const data = await Content.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Upload content (Audio / Video / PDF)
 * POST /api/admin/upload
 */
router.post(
  "/upload",
  adminAuth,
  upload.single("file"),
  uploadContent
);

/**
 * Delete content (Cloudinary + MongoDB)
 * DELETE /api/admin/content/:id
 */
router.delete("/content/:id", adminAuth, deleteContent);

export default router;
