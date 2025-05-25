// pages/index.js
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import OperatorCard from "../components/OperatorCard";
import Link from "next/link";

export default function Home() {
  const [active, setActive] = useState("All");
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
        <div className="flex gap-4 text-sm text-indigo-600 font-medium">
          <Link href="/connect">Connect</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/grid">Grid</Link>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-clash">
        Meet the Operators
      </h1>

      <SearchBar />
      <FilterTabs active={active} setActive={setActive} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {operators
          .filter((op) => active === "All" || op.tags.includes(active))
          .map((op, index) => (
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