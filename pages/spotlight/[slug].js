import { useRouter } from "next/router";
import operators from "../../data/operators.json";

export default function SpotlightPage() {
  const router = useRouter();
  const { slug } = router.query;

  const operator = operators.find(
    (op) => op.name.toLowerCase() === slug?.toLowerCase()
  );

  if (!operator) return <div className="p-6 text-center">Operator not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{operator.name}</h1>
      <p className="text-xl text-gray-700 mb-4">{operator.role}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {operator.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-800 leading-relaxed">{operator.bio}</p>

      <div className="mt-8">
        <a
          href="/"
          className="text-purple-600 hover:underline text-sm"
        >
          ← Back to Grid
        </a>
      </div>
    </div>
  );
}