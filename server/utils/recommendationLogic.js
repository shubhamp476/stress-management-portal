export const getRecommendations = (level) => {
  if (level === "Low") {
    return [
      "Maintain balance with 5 minutes of mindful breathing",
      "Light stretching or a short walk recommended",
      "Continue journaling daily"
    ];
  }

  if (level === "Moderate") {
    return [
      "Try 10 minutes of guided meditation",
      "Practice 4-7-8 breathing exercise",
      "Reduce screen time before sleep"
    ];
  }

  return [
    "Immediate deep breathing (box breathing for 3 minutes)",
    "Listen to calming music or nature sounds",
    "Take a short break and avoid stressful tasks",
    "Consider guided body-scan meditation"
  ];
};
