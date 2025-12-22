import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// public pages
import Dashboard from "./pages/Dashboard";
import ASMR from "./pages/ASMR";
import Yoga from "./pages/Yoga";
import Meditation from "./pages/Meditation";
import Login from "./pages/Login";

// admin pages (AS THEY ALREADY EXIST)
import AdminLogin from "./admin/AdminLogin";
import AdminUpload from "./admin/AdminUpload";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/asmr" element={<ASMR />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/upload" element={<AdminUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
