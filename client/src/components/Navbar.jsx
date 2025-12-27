import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 shadow-lg px-6 py-3">

          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide text-white">
            🌿 StressCare
          </h1>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/asmr" className="nav-link">ASMR</Link>
            <Link to="/yoga" className="nav-link">Yoga</Link>
            <Link to="/meditation" className="nav-link">Meditation</Link>
            <Link to="/stress-test" className="nav-link">Stress Test</Link>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
