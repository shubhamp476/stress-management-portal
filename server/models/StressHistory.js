import mongoose from "mongoose";

const stressHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    answers: {
      type: [Number],
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      enum: ["Low", "Moderate", "High"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("StressHistory", stressHistorySchema);
