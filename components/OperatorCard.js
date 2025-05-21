export default function OperatorCard({ name, role, tags }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-xl font-bold">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700">
        Request Shadow
      </button>
    </div>
  );
}
