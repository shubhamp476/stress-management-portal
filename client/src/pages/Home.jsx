import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goProtected = (path) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-400 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">
        Stress Management Portal 🌿
      </h1>
      <p className="mb-8 italic">
        Take care of your mind and body
      </p>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => goProtected("/asmr")} className="btn">
          🎧 ASMR
        </button>
        <button onClick={() => goProtected("/yoga")} className="btn">
          🧘 Yoga
        </button>
        <button onClick={() => goProtected("/meditation")} className="btn">
          🕯️ Meditation
        </button>
        <button onClick={() => goProtected("/stress-test")} className="btn">
          📊 Stress Test
        </button>
      </div>
    </div>
  );
}
