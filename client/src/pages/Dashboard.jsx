import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stressLevel, setStressLevel] = useState("Loading...");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/api/recommendations");
        setStressLevel(res.data.stressLevel);
        setRecommendations(res.data.recommendations || []);
      } catch (error) {
        console.error("Dashboard error", error);
        setStressLevel("Error");
      }
    };

    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const levelColor =
    stressLevel === "Low"
      ? "text-green-600"
      : stressLevel === "Moderate"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className="min-h-screen bg-blue-50">
      {/* HEADER */}
      <div className="flex justify-between items-center bg-white px-8 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          Stress Management Portal
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-8 space-y-8">
        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Current Stress Level</h3>
            <p className={`text-3xl font-bold mt-2 ${levelColor}`}>
              {stressLevel}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Status</h3>
            <p className="text-xl font-semibold mt-2">
              {stressLevel === "Low"
                ? "You're doing great 😊"
                : stressLevel === "Moderate"
                ? "Take some breaks ⚠️"
                : "High stress detected 🚨"}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Last Check</h3>
            <p className="text-xl font-semibold mt-2">
              Today
            </p>
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            AI Recommendations
          </h2>

          {recommendations.length === 0 ? (
            <p>No recommendations yet</p>
          ) : (
            <ul className="list-disc ml-6 space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          )}
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold mb-2">Take Stress Test</h3>
            <p className="text-sm text-gray-500 mb-3">
              Check your current stress level
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Start Test
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold mb-2">Relaxation</h3>
            <p className="text-sm text-gray-500 mb-3">
              Try breathing & mindfulness
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Relax
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold mb-2">Journal</h3>
            <p className="text-sm text-gray-500 mb-3">
              Write your thoughts
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded">
              Open Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
