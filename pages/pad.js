import { useRouter } from "next/router"; import operators from "../../data/operators.json";

export default function Spotlight() { const router = useRouter(); const { slug } = router.query;

const operator = operators.find( (op) => op.name.toLowerCase().replace(/\s+/g, "-") === slug );

if (!operator) return <div className="p-6">Loading...</div>;

return ( <div className="max-w-2xl mx-auto p-6"> <button onClick={() => router.back()} className="text-sm text-blue-500 hover:underline mb-4" > ← Back </button>

<h1 className="text-3xl font-bold mb-2">{operator.name}</h1>
  <p className="text-lg text-gray-600 mb-4">{operator.role}</p>

  <div className="flex gap-2 flex-wrap mb-4">
    {operator.tags.map((tag, i) => (
      <span
        key={i}
        className="bg-gray-200 text-sm px-2 py-1 rounded"
      >
        {tag}
      </span>
    ))}
  </div>

  {operator.bio && <p className="text-gray-800 mb-4">{operator.bio}</p>}

  {operator.email && (
    <a
      href={`mailto:${operator.email}`}
      className="inline-block mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
    >
      Contact
    </a>
  )}
</div>

); }

