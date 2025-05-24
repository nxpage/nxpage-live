import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import OperatorCard from "../components/OperatorCard";

export default function Home() {
  const [active, setActive] = useState("All");
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    fetch("/data/operators.json")
      .then((res) => res.json())
      .then((data) => setOperators(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src="/nxpage-logo-trimmed-small.png"
        alt="NXPAGE Logo"
        className="h-auto max-w-[120px] object-contain mb-6"
      />
      <div className="flex gap-4 text-sm text-blue-600 mb-4">
        <a href="/connect">Connect</a>
        <a href="/submit">Submit</a>
        <a href="/admin">Admin</a>
      </div>
      <SearchBar />
      <FilterTabs active={active} setActive={setActive} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {operators
          .filter((op) => active === "All" || op.tags.includes(active))
          .map((op, index) => (
            <OperatorCard key={index} {...op} />
          ))}
      </div>
    </div>
  );
}