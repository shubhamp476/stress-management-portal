import mongoose from "mongoose";

const stressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  level: {
    type: String,
    enum: ["Low", "Moderate", "High"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Stress = mongoose.model("Stress", stressSchema);
export default Stress;
