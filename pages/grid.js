import operators from "../data/operators.json";
import Link from "next/link";

export default function PublicGrid() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Operator Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {operators.map((op, i) => (
          <Link key={i} href={`/spotlight/${op.username}`}>
            <a className="block border rounded-lg p-4 hover:shadow-lg transition text-center">
              {op.image && (
                <img
                  src={op.image}
                  alt={`${op.name} profile`}
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-3"
                />
              )}
              <h2 className="font-semibold text-lg">{op.name}</h2>
              <p className="text-sm text-gray-600">{op.role}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {op.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 px-2 py-1 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}