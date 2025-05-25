import { useRouter } from "next/router";
import operators from "../../data/operators.json";

export default function SpotlightPage() {
  const router = useRouter();
  const { slug } = router.query;

  const operator = operators.find(
    (op) => op.username?.toLowerCase() === slug?.toLowerCase()
  );

  if (!operator) return <div className="p-6 text-center">Operator not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-lg">
        <h2 className="text-sm tracking-widest text-gray-400 mb-2">SPOTLIGHT</h2>
        <h1 className="text-4xl font-bold mb-1">{operator.name}</h1>
        <p className="text-lg text-gray-300 mb-6">{operator.role}</p>

        {operator.image && (
          <img
            src={operator.image}
            alt={`${operator.name}'s profile`}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-gray-700"
          />
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {operator.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-gray-600 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-200 mb-10 leading-relaxed">{operator.bio}</p>

        <a
          href="/"
          className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          View Grid →
        </a>
      </div>
    </div>
  );
}