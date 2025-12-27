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
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6833347d0ee103c04d640e1d/687e85f0cec4a9ee46544867_TMA-stress-relief-cover.webp')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stress Management Portal 🌿
        </h1>

        <p className="mb-8 italic text-lg">
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
    </div>
  );
}
