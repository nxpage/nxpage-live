export default function OperatorCard({ name, role, tags, image, tier }) {
  let tierSymbol = "£";
  if (tier === "mid") tierSymbol = "££";
  else if (tier === "top") tierSymbol = "£££";
  else if (tier === "elite") tierSymbol = "££££";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition cursor-pointer">
      {image && (
        <img
          src={image}
          alt={`${name}'s Spotlight`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-lg font-semibold text-gray-800 font-clash">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {role} <span className="text-indigo-500 ml-1">{tierSymbol}</span>
      </p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}