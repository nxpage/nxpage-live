import { useRouter } from "next/router";
import Head from "next/head";
import operators from "../../data/operators.json";

export default function Spotlight() {
  const router = useRouter();
  const { slug } = router.query;

  const operator = operators.find(
    (op) =>
      op.username?.toLowerCase() === slug?.toLowerCase() ||
      op.name?.toLowerCase().replace(/\s+/g, "-") === slug?.toLowerCase()
  );

  if (!operator) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Head>
        <title>{operator.name} | NXPAGE</title>
        <meta name="description" content={operator.bio} />
        <meta property="og:title" content={`${operator.name} | NXPAGE`} />
        <meta property="og:description" content={operator.bio} />
        <meta property="og:image" content={operator.image || "/nxpage-logo-trimmed-small.png"} />
      </Head>

      <div className="max-w-2xl mx-auto p-6 animate-fade-in">
        <button
          onClick={() => router.back()}
          className="text-sm text-indigo-600 hover:underline mb-6"
        >
          ← Back
        </button>

        {operator.image && (
          <img
            src={operator.image}
            alt={`${operator.name} spotlight`}
            className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg"
          />
        )}

        <h1 className="text-4xl font-bold mb-2 text-center">{operator.name}</h1>
        <p className="text-lg text-gray-600 mb-4 text-center">{operator.role}</p>

        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {operator.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-800 mb-6 text-center leading-relaxed">
          {operator.bio}
        </p>

        {(operator.email || operator.twitter || operator.linkedin) && (
          <div className="flex justify-center gap-4 mt-6">
            {operator.email && (
              <a
                href={`mailto:${operator.email}`}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-sm"
              >
                Email
              </a>
            )}
            {operator.twitter && (
              <a
                href={`https://twitter.com/${operator.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                Twitter
              </a>
            )}
            {operator.linkedin && (
              <a
                href={operator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition text-sm"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}