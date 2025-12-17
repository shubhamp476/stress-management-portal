import Stress from "../models/Stress.js";
import { calculateStress } from "../utils/stressLogic.js";

export const submitStressTest = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || answers.length === 0) {
      return res.status(400).json({ message: "Answers are required" });
    }

    const result = calculateStress(answers);

    const stress = await Stress.create({
      userId: req.user,
      score: result.score,
      level: result.level
    });

    res.status(201).json({
      message: "Stress test submitted",
      stress
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
