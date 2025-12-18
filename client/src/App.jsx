import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Dashboard />;
  }

  return <Login />;
}


