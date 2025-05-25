export default function FilterTabsPad({ active, setActive, tags }) {
  const allTags = ["All", ...tags];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {allTags.map((tag, i) => (
        <button
          key={i}
          onClick={() => setActive(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
            active === tag
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}