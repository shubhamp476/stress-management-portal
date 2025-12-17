export const calculateStress = (answers) => {
  const score = answers.reduce((sum, val) => sum + val, 0);

  let level = "Low";
  if (score > 20 && score <= 40) level = "Moderate";
  if (score > 40) level = "High";

  return { score, level };
};
