import Stress from "../models/Stress.js";
import { getRecommendations } from "../utils/recommendationLogic.js";

export const getUserRecommendations = async (req, res) => {
  try {
    // latest stress record
    const latestStress = await Stress.findOne({ userId: req.user })
      .sort({ createdAt: -1 });

    if (!latestStress) {
      return res.status(404).json({ message: "No stress data found" });
    }

    const recommendations = getRecommendations(latestStress.level);

    res.json({
      stressLevel: latestStress.level,
      recommendations
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
