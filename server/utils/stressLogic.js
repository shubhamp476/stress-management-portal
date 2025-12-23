export const calculateStress = (answers = []) => {
  if (!Array.isArray(answers) || answers.length === 0) {
    return { score: 0, level: "Unknown" };
  }

  const score = answers.reduce(
    (sum, val) => sum + Number(val || 0),
    0
  );

  let level = "Low";
  if (score >= 15 && score < 30) level = "Moderate";
  else if (score >= 30) level = "High";

  return { score, level };
};
