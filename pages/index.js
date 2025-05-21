import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import OperatorCard from "../components/OperatorCard";

export default function Home() {
  const [active, setActive] = useState("All");
  const operators = [
    { name: "Raye", role: "Visual Strategist", tags: ["#ClientEnergy", "#StreetAura"] },
    { name: "Ellis", role: "Creative Mentor", tags: ["#SilentOps", "#DesignOps"] }
  ];

  return (
    <div>
      {/* Logo Header */}
      <div className="w-full flex items-center justify-start px-6 py-4">
        <img
          src="/nxpage-logo-trimmed.png"
          alt="NXPAGE Logo"
          className="h-6 max-w-[100px] object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <SearchBar />
        <FilterTabs active={active} setActive={setActive} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operators.map((op, index) => (
            <OperatorCard key={index} {...op} />
          ))}
        </div>
      </div>
    </div>
  );
}