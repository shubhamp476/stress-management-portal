export default function RecommendationBox({ level }) {
  const recommendations = {
    High: [
      "Try guided meditation",
      "Listen to calming ASMR",
      "Avoid screens for 30 minutes",
    ],
    Moderate: [
      "Light yoga",
      "Breathing exercises",
    ],
    Low: ["Keep your routine 😊"],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-2">
        AI Recommendations
      </h2>
      <ul className="list-disc pl-5">
        {(recommendations[level] ||
          ["Take stress test to get suggestions"]).map(
          (r, i) => (
            <li key={i}>{r}</li>
          )
        )}
      </ul>
    </div>
  );
}
