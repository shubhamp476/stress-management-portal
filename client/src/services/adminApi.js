import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/admin",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  console.log("ADMIN TOKEN SENT:", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
