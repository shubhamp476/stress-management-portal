export default function Journal() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      <textarea
        className="w-full h-40 border p-3 rounded"
        placeholder="Write your thoughts..."
      />
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}
