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
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col items-center space-y-6 mb-8">
        <img
          src="/nxpage-logo-trimmed.png"
          alt="NXPAGE Logo"
          className="h-12 w-auto"
        />
      </div>

      <SearchBar />
      <FilterTabs active={active} setActive={setActive} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {operators
          .filter((op) => active === "All" || op.tags.includes(active))
          .map((op, index) => (
            <OperatorCard key={index} {...op} />
          ))}
      </div>
    </div>
  );
}