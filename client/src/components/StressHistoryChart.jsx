import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function StressHistoryChart() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5001/api/stress/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHistory(res.data);
    };
    fetchHistory();
  }, []);

  if (history.length === 0) {
    return (
      <div className="bg-white/40 backdrop-blur p-6 rounded-xl">
        <p className="text-center text-gray-600">
          No stress history yet. Take a test 🙂
        </p>
      </div>
    );
  }

  const data = {
    labels: history.map((h) =>
      new Date(h.createdAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Stress Score",
        data: history.map((h) => h.score),
        fill: true,
        backgroundColor: "rgba(59,130,246,0.25)",
        borderColor: "#2563EB",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Your Stress History
      </h2>
      <Line data={data} />
    </div>
  );
}
