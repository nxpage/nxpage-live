// pages/grid.js
import { useEffect, useState } from "react";
import OperatorCard from "../components/OperatorCard";
import Link from "next/link";

export default function GridPage() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    fetch("/data/operators.json")
      .then((res) => res.json())
      .then((data) => setOperators(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/nxpage-logo-trimmed-small.png"
          alt="NXPAGE Logo"
          className="h-8 w-auto object-contain"
        />
        <Link href="/">
          <a className="text-indigo-600 text-sm font-medium hover:underline">
            ← Back to Main
          </a>
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-clash">
        Operator Grid
      </h1>

      <p className="text-gray-600 mb-4">
        Browse public profiles of active operators on NXPAGE.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {operators.map((op, index) => (
          <Link key={index} href={`/spotlight/${op.username}`}>
            <a>
              <OperatorCard {...op} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}