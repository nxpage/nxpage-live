// pages/spotlight/[slug].js
import { useRouter } from "next/router";

const spotlightMock = {
  name: "Raye",
  role: "Visual Strategist",
  tags: ["#ClientEnergy", "#StreetAura"],
  bio: "I design presence — moments you can feel. From pitch to billboard, I ghost the frame.",
  spotlightText: "Every grid needs an anchor. I became the storm they hired to hold the screen."
};

export default function SpotlightProfile() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{spotlightMock.name}</h1>
      <p className="text-purple-700 font-medium">{spotlightMock.role}</p>
      <div className="flex gap-2 flex-wrap my-2">
        {spotlightMock.tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-700 mt-4">{spotlightMock.bio}</p>
      <blockquote className="mt-6 italic border-l-4 border-purple-600 pl-4 text-purple-900">
        “{spotlightMock.spotlightText}”
      </blockquote>
    </div>
  );
}