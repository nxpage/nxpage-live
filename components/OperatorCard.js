import Link from "next/link";

export default function OperatorCard({ name, role, tags }) {
  const isGold = tags.includes("#StreetAura") || tags.includes("#ClientEnergy");
  const slug = name.toLowerCase();

  return (
    <Link href={`/spotlight/${slug}`}>
      <div className="border p-4 rounded shadow-sm hover:shadow-md transition cursor-pointer">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">{tag}</span>
          ))}
          {isGold && <span className="bg-yellow-400 text-xs text-white px-2 py-1 rounded-full">Gold Host</span>}
        </div>
      </div>
    </Link>
  );
}