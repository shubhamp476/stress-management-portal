import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function Yoga() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/Yoga").then(res => setVideos(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🧘 Yoga Sessions</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <div key={video._id} className="bg-white rounded-xl shadow overflow-hidden">
            <video controls className="w-full h-56 object-cover">
              <source src={video.cloudinaryUrl} type="video/mp4" />
            </video>

            <div className="p-4">
              <h2 className="font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-500">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
