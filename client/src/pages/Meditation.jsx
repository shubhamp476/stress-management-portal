export default function Meditation() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Meditation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Guided Meditation */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Guided Meditation
          </h2>
          <p className="text-gray-500 mb-4">
            Voice-guided sessions for relaxation and focus
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Start Guided Session
          </button>
        </div>

        {/* Non-Guided Meditation */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Non-Guided Meditation
          </h2>
          <p className="text-gray-500 mb-4">
            Silent meditation with calming background sounds
          </p>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded">
            Start Silent Session
          </button>
        </div>
      </div>
    </div>
  );
}
