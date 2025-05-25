import { useRouter } from "next/router";
import operators from "../../data/operators.json";

export default function Spotlight() {
  const { query } = useRouter();
  const operator = operators.find((op) => op.username === query.slug);

  if (!operator) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Operator Not Found</h1>
        <p>We couldn’t locate that profile. Try returning to the home grid.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{operator.name}</h1>
      <p className="text-gray-600 mb-4">{operator.role}</p>
      <div className="flex gap-2 mb-4 flex-wrap">
        {operator.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <p className="text-gray-800">{operator.bio}</p>
    </div>
  );
}