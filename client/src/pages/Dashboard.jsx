import { Link } from "react-router-dom";


export default function Dashboard() {
  const token = localStorage.getItem("token");

const handleProtectedClick = (path) => {
  if (!token) {
    navigate("/login");
  } else {
    navigate(path);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6">
      
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back 🌿
        </h1>
        <p className="text-gray-600 mt-1 italic">
          “Almost everything will work again if you unplug it for a few minutes… including you.”
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Stress Level */}
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Current Stress Level</h3>
          <p className="text-4xl font-bold text-teal-600 mt-2">Moderate</p>
          <div className="mt-4 h-2 bg-gray-200 rounded">
            <div className="h-2 w-2/3 bg-teal-500 rounded"></div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Mindfulness Streak</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">7 Days 🔥</p>
          <p className="text-sm text-gray-500 mt-2">
            Keep going, consistency reduces stress.
          </p>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Last Activity</h3>
          <p className="text-lg font-semibold mt-2">Guided Meditation</p>
          <p className="text-sm text-gray-500">Today • 10 min</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Quick Relaxation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        
        <Link to="/asmr" className="group">
          <div className="bg-white p-6 rounded-2xl shadow hover:bg-blue-100 transition">
            <p className="text-3xl">🎧</p>
            <h3 className="font-semibold mt-2">ASMR</h3>
            <p className="text-sm text-gray-500">Relaxing sounds</p>
          </div>
        </Link>

        <Link to="/yoga">
          <div className="bg-white p-6 rounded-2xl shadow hover:bg-green-100 transition">
            <p className="text-3xl">🧘‍♂️</p>
            <h3 className="font-semibold mt-2">Yoga</h3>
            <p className="text-sm text-gray-500">Stretch & breathe</p>
          </div>
        </Link>

        <Link to="/meditation">
          <div className="bg-white p-6 rounded-2xl shadow hover:bg-purple-100 transition">
            <p className="text-3xl">🕯️</p>
            <h3 className="font-semibold mt-2">Meditation</h3>
            <p className="text-sm text-gray-500">Calm your mind</p>
          </div>
        </Link>

        <Link to="/stress-test">
          <div className="bg-white p-6 rounded-2xl shadow hover:bg-red-100 transition">
            <p className="text-3xl">📊</p>
            <h3 className="font-semibold mt-2">Stress Test</h3>
            <p className="text-sm text-gray-500">Check your level</p>
          </div>
        </Link>
      </div>

      {/* FOOTER QUOTE */}
      <div className="text-center text-gray-500 italic">
        Take a deep breath — you’re doing better than you think 💙
      </div>
    </div>
    
  );
}
