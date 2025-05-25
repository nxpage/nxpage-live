import { useRouter } from "next/router";
import operators from "../../data/operators.json";

export default function SpotlightPage() {
  const router = useRouter();
  const { slug } = router.query;

  const operator = operators.find(
    (op) => op.username.toLowerCase() === slug?.toLowerCase()
  );

  if (!operator) return <div className="p-6 text-center">Operator not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">{operator.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{operator.role}</p>

      {operator.image && (
        <img
          src={operator.image}
          alt={`${operator.name} Spotlight`}
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg"
        />
      )}

      <div className="mb-4 flex justify-center flex-wrap gap-2">
        {operator.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg text-gray-800 leading-relaxed">{operator.bio}</p>

      <div className="mt-8">
        <a href="/" className="text-purple-600 hover:underline text-sm">
          ← Back to Grid
        </a>
      </div>
    </div>
  );
}