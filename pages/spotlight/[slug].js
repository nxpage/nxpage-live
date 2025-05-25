import { useRouter } from "next/router";

const operatorData = {
  raye: {
    name: "Raye",
    role: "Visual Strategist",
    tags: ["#ClientEnergy", "#StreetAura"],
    intro: "Strategic visual ops who sees brand energy before it lands."
  },
  ellis: {
    name: "Ellis",
    role: "Creative Mentor",
    tags: ["#SilentOps", "#DesignOps"],
    intro: "Quiet executioner of elite UI flows and presence training."
  },
  emma: {
    name: "Emma",
    role: "Rhythm Coach",
    tags: ["#FastHands", "#AuraTactician"],
    intro: "Brings beat precision to creative chaos — tempo tuned."
  }
};

export default function Spotlight() {
  const router = useRouter();
  const { slug } = router.query;
  const op = operatorData[slug];

  if (!op) return <div className="p-6">404 — Operator Not Found</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{op.name}</h1>
      <p className="text-gray-500 mb-4">{op.role}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {op.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg text-gray-700">{op.intro}</p>
    </div>
  );
}