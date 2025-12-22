import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  mediaType: {
    type: String,
    enum: ["audio", "video", "pdf"],
    required: true,
  },

  category: {
    type: String,
    enum: ["ASMR", "Yoga", "Meditation", "Book"],
    required: true,
  },

  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: null,
  },

  guided: {
    type: Boolean,
    default: null,
  },

  cloudinaryUrl: {
    type: String,
    required: true,
  },

  cloudinaryId: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Content", contentSchema);
