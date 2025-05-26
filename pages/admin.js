import fs from "fs";
import path from "path";
import Head from "next/head";
import { useState } from "react";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "submissions.json");
  const data = fs.readFileSync(filePath, "utf8");
  const submissions = JSON.parse(data);

  return { props: { submissions } };
}

export default function Admin({ submissions }) {
  const [reviewed, setReviewed] = useState([]);

  const handleAction = (index, action) => {
    const reviewedName = submissions[index].name;
    setReviewed([...reviewed, { index, action, name: reviewedName }]);
  };

  return (
    <>
      <Head>
        <title>Admin Panel | NXPAGE</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Operator Submission Review</h1>
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions available.</p>
        ) : (
          submissions.map((op, i) => {
            const review = reviewed.find((r) => r.index === i);
            return (
              <div
                key={i}
                className={`border p-4 rounded mb-4 shadow-sm bg-white ${
                  review?.action === "approved"
                    ? "border-green-500"
                    : review?.action === "rejected"
                    ? "border-red-500"
                    : ""
                }`}
              >
                <h2 className="font-semibold text-xl">{op.name}</h2>
                <p className="text-sm text-gray-600">{op.role}</p>
                <p className="text-gray-800 mt-2 mb-2">{op.bio}</p>
                <p className="text-sm text-gray-500 mb-2">{op.tags}</p>
                {!review ? (
                  <div className="space-x-2">
                    <button
                      onClick={() => handleAction(i, "approved")}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(i, "rejected")}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <p className="text-sm mt-2 text-gray-500 italic">
                    {review.name} has been {review.action}.
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}