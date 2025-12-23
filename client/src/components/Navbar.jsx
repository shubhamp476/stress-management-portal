import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");

    navigate("/"); 
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">
        Stress Management
      </h1>

      <div className="flex gap-4 items-center">
        <a href="/dashboard">Dashboard</a>
        <a href="/asmr">ASMR</a>
        <a href="/yoga">Yoga</a>
        <a href="/meditation">Meditation</a>

        {!userToken && !adminToken && (
          <>
            <a href="/login" className="text-blue-600">Login</a>
            <a href="/register" className="text-green-600">Register</a>
          </>
        )}

        {(userToken || adminToken) && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
