import { Routes, Route } from "react-router-dom";

// USER PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ASMR from "./pages/ASMR";
import Yoga from "./pages/Yoga";
import Meditation from "./pages/Meditation";
import StressTest from "./pages/StressTest";

// ADMIN FILES (FROM src/admin)
import AdminLogin from "./admin/AdminLogin";
import AdminUpload from "./admin/AdminUpload";
import AdminRoute from "./admin/AdminRoute"; // ✅ FIXED PATH

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-400">
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* USER FEATURES */}
        <Route path="/asmr" element={<ASMR />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/stress-test" element={<StressTest />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/upload"
          element={
            <AdminRoute>
              <AdminUpload />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}
