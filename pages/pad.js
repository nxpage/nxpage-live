import { useState } from "react";
import Link from "next/link";
import operators from "../data/operators.json";
import FilterTabsPad from "../components/FilterTabsPad";

export default function Pad() {
  const allTags = [...new Set(operators.flatMap(op => op.tags))];
  const [active, setActive] = useState("All");

  const filtered = operators.filter(op =>
    active === "All" ? true : op.tags.includes(active)
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <img
            src="/nxpage-logo-trimmed-small.png"
            alt="NXPAGE Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <span className="text-sm font-medium text-gray-500">Spotlight Grid</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Operator Pad</h1>

      <FilterTabsPad active={active} setActive={setActive} tags={allTags} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((op, index) => (
          <Link key={index} href={`/spotlight/${op.username}`}>
            <a className="border rounded-lg p-4 hover:shadow transition text-center">
              {op.image && (
                <img
                  src={op.image}
                  alt={op.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                />
              )}
              <h2 className="font-semibold text-lg">{op.name}</h2>
              <p className="text-sm text-gray-500">{op.role}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}