import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function ASMR() {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    // 🔹 Only ASMR audios
    API.get("/ASMR?mediaType=audio").then(res => {
      setAudios(res.data);
    });
  }, []);

  return (
    <div className="w-full">
      {/* 🔹 HERO / BANNER */}
      <div
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ❌ NO BLUE OVERLAY */}
        <div className="relative z-10 text-center px-6 bg-black/30 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎧 ASMR Relaxation
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Gentle sounds to calm your mind, relax your body, and ease stress.
          </p>
        </div>
      </div>

      {/* 🔹 AUDIOS SECTION (BLUE STARTS HERE) */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          ASMR Audio Sessions
        </h2>

        {audios.length === 0 ? (
          <p className="text-white text-center opacity-80">
            No ASMR audios uploaded yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audios.map(audio => (
              <div
                key={audio._id}
                className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-5 transition hover:scale-[1.02]"
              >
                <h3 className="font-semibold text-lg mb-1">
                  {audio.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  {audio.description}
                </p>

                <audio controls className="w-full">
                  <source src={audio.cloudinaryUrl} type="audio/mpeg" />
                </audio>

                {audio.guided && (
                  <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    Guided
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
