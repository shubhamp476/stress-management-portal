export default function ASMR() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6">ASMR & Relaxation</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Rain Sounds",
          "Ocean Waves",
          "Forest Ambience",
          "White Noise",
          "Soft Music",
          "Wind Chimes"
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <h3 className="font-semibold mb-2">{item}</h3>
            <p className="text-sm text-gray-500 mb-4">
              Relax your mind with calming sounds
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
