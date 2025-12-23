import StressHistory from "../models/StressHistory.js";
import { calculateStress } from "../utils/stressLogic.js";

export const submitStressTest = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || answers.length !== 10) {
      return res.status(400).json({ message: "Invalid answers" });
    }

    const { score, level } = calculateStress(answers);

    const record = await StressHistory.create({
      user: req.userId,
      answers,
      score,
      level,
    });

    res.status(201).json({
      score,
      level,
      createdAt: record.createdAt,
    });
  } catch (err) {
    console.error("STRESS TEST ERROR:", err);
    res.status(500).json({ message: "Failed to submit test" });
  }
};
