import cloudinary from "../config/cloudinary.js";
import Content from "../models/Content.js";
import fs from "fs";

// 🔹 Upload content
export const uploadContent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    let uploadResult;

    // 🔥 Video (large)
    if (req.file.mimetype.startsWith("video")) {
          uploadResult = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "stress-management",
      chunk_size: 6000000, // 6MB chunks
    });

    } else {
      // 🔥 Audio / PDF
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
        folder: "stress-management",
      });
    }

    // 🚨 CRITICAL SAFETY CHECK (THIS FIXES YOUR ERROR)
    if (!uploadResult || !uploadResult.secure_url || !uploadResult.public_id) {
      throw new Error("Cloudinary upload failed: URL or ID missing");
    }

    const content = await Content.create({
      title: req.body.title,
      description: req.body.description,
      mediaType: req.body.mediaType,
      category: req.body.category,
      guided: req.body.guided === "true",
      cloudinaryUrl: uploadResult.secure_url,
      cloudinaryId: uploadResult.public_id,
    });

    // 🔹 remove temp file (safe)
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(201).json({
      success: true,
      message: "Content uploaded successfully",
      content,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal server error during upload",
    });
  }
};

// 🔹 Delete content
export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    // 🔥 Delete from Cloudinary
    await cloudinary.uploader.destroy(content.cloudinaryId, {
      resource_type: content.mediaType === "video" ? "video" : "auto",
    });

    // 🔥 Delete from MongoDB
    await Content.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
