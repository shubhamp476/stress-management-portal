import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function Yoga() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/Yoga").then(res => setVideos(res.data));
  }, []);

  return (
    <div className="min-h-screen">

      {/* 🔹 HERO / BANNER */}
      <div
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0  "></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🧘 Yoga for Inner Peace
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Breathe deeply. Move gently. Let go of stress.
          </p>
        </div>
      </div>

      {/* 🔹 VIDEO SECTION */}
      <div className="p-6 mt-0 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div
              key={video._id}
              className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden"
            >
              <video controls className="w-full h-56 object-cover">
                <source src={video.cloudinaryUrl} type="video/mp4" />
              </video>

              <div className="p-4">
                <h2 className="font-semibold text-lg">{video.title}</h2>
                <p className="text-sm text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
