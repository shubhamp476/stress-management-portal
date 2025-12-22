import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        Stress Management
      </h1>

      <div className="space-x-6">
        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/asmr" className="hover:text-blue-600">
          ASMR
        </Link>
        <Link to="/yoga" className="hover:text-blue-600">
          Yoga
        </Link>
        <Link to="/meditation" className="hover:text-blue-600">
          Meditation
        </Link>
        <Link to="/admin/login">Admin Login</Link>
        <Link to="/admin/upload">Upload Content</Link>
        <Link to="/admin/content">Manage Content</Link>



        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
