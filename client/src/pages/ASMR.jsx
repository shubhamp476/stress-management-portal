import { useEffect, useState } from "react";
import API from "../services/contentApi";

export default function ASMR() {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    API.get("/ASMR").then(res => setAudios(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎧 ASMR Relaxation</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {audios.map(item => (
          <div key={item._id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {item.description}
            </p>

            <audio controls className="w-full">
              <source src={item.cloudinaryUrl} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
