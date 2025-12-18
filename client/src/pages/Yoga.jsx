export default function Yoga() {
  const levels = [
    {
      title: "Beginner Yoga",
      desc: "Simple poses for flexibility and calm breathing"
    },
    {
      title: "Intermediate Yoga",
      desc: "Improve strength, balance and focus"
    },
    {
      title: "Advanced Yoga",
      desc: "Deep stretches and professional-level poses"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Yoga Sessions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <h2 className="text-xl font-semibold mb-2">
              {level.title}
            </h2>
            <p className="text-gray-500 mb-4">{level.desc}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
