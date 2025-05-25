// pages/pad.js
import Link from "next/link";
import operators from "../data/operators.json";

export default function Pad() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Operator Spotlights</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {operators.map((op, i) => (
          <Link key={i} href={`/spotlight/${op.username}`}>
            <a className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 text-center">
              {op.image && (
                <img
                  src={op.image}
                  alt={op.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h2 className="text-lg font-semibold">{op.name}</h2>
              <p className="text-sm text-gray-600">{op.role}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {op.tags?.slice(0, 3).map((tag, t) => (
                  <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-800">
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