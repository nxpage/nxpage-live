export default function FilterTabs({ active, setActive }) {
  const tabs = ["All", "Board Access", "High Access"];
  return (
    <div className="flex gap-4 mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-full ${active === tab ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}