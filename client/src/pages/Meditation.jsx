import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function Meditation() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 🔹 Only videos + Meditation category
    API.get("/Meditation?mediaType=video").then(res => {
      setVideos(res.data);
    });
  }, []);

  return (
    <div className="w-full">
      {/* 🔹 HERO / BANNER */}
      <div
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2120&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ❌ NO BLUE OVERLAY */}
        <div className="relative z-10 text-center px-6 bg-black/30 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🧘‍♀️ Guided Meditation
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Slow down your mind. Focus your breath. Find stillness within.
          </p>
        </div>
      </div>

      {/* 🔹 VIDEOS SECTION (BLUE STARTS HERE) */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Meditation Videos
        </h2>

        {videos.length === 0 ? (
          <p className="text-white text-center opacity-80">
            No meditation videos uploaded yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <div
                key={video._id}
                className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02]"
              >
                <video controls className="w-full h-56 object-cover">
                  <source src={video.cloudinaryUrl} type="video/mp4" />
                </video>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {video.description}
                  </p>

                  {video.guided && (
                    <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Guided
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
