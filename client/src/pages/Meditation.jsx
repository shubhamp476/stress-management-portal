import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function Meditation() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get("/Meditation")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧠 Meditation</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map(item => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow p-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  item.guided
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {item.guided ? "Guided" : "Non-Guided"}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              {item.description}
            </p>

            {/* Media */}
            {item.mediaType === "video" ? (
              <video
                controls
                className="w-full rounded-lg h-56 object-cover"
              >
                <source
                  src={item.cloudinaryUrl}
                  type="video/mp4"
                />
              </video>
            ) : (
              <audio controls className="w-full">
                <source
                  src={item.cloudinaryUrl}
                  type="audio/mpeg"
                />
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
