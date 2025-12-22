import { useState } from "react";
import API from "../services/adminApi";




export default function AdminUpload() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    mediaType: "audio",
    category: "Meditation",
    guided: false,
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("UPLOAD BUTTON CLICKED");
  console.log("FILE SELECTED:", file);
  console.log("FORM DATA:", form);

  if (!file) {
    console.log("❌ FILE NULL");
    return alert("Please select a file");
  }

  const data = new FormData();
  Object.keys(form).forEach((key) => {
    data.append(key, form[key]);
  });
  data.append("file", file);

  console.log("FORMDATA READY");

  try {
    setLoading(true);
    const res = await API.post("/upload", data);
    console.log("UPLOAD RESPONSE:", res.data);

    setMsg("✅ Upload successful");
    setForm({
      title: "",
      description: "",
      mediaType: "audio",
      category: "Meditation",
      guided: false,
    });
    setFile(null);
  } catch (err) {
  console.error("UPLOAD ERROR FULL:", err);

  let errorMsg = "Upload failed";

  if (err.response) {
    // backend ne response bheja
    errorMsg =
      err.response.data?.message ||
      err.response.data?.error ||
      `Server error (${err.response.status})`;
  } else if (err.request) {
    // request gayi, response nahi aaya
    errorMsg = "No response from server";
  } else {
    // axios setup error
    errorMsg = err.message;
  }

  setMsg(`❌ ${errorMsg}`);
}

 finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Admin Upload Content
        </h2>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <select
          name="mediaType"
          value={form.mediaType}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="pdf">PDF</option>
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        >
          <option>Meditation</option>
          <option>Yoga</option>
          <option>ASMR</option>
          <option>Book</option>
        </select>

        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            name="guided"
            checked={form.guided}
            onChange={handleChange}
          />
          Guided Content
        </label>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {msg && <p className="text-center mt-3">{msg}</p>}
      </form>
    </div>
  );
}
