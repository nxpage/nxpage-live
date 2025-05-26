import fs from "fs";
import path from "path";
import Head from "next/head";
import { useState } from "react";

export async function getServerSideProps() {
  const subPath = path.join(process.cwd(), "data", "submissions.json");
  const opPath = path.join(process.cwd(), "data", "operators.json");

  const submissions = JSON.parse(fs.readFileSync(subPath, "utf8"));
  const operators = JSON.parse(fs.readFileSync(opPath, "utf8"));

  return { props: { submissions, operators } };
}

export default function Admin({ submissions, operators }) {
  const [data, setData] = useState(submissions);

  const handleApprove = async (index) => {
    const approved = data[index];
    const updatedOps = [
      ...operators,
      {
        name: approved.name,
        username: approved.name.toLowerCase().replace(/\s+/g, ""),
        role: approved.role,
        tags: approved.tags.split(",").map((t) => t.trim()),
        bio: approved.bio
      }
    ];
    const updatedSubs = data.filter((_, i) => i !== index);

    const opPath = "/api/save-operators";
    const subPath = "/api/save-submissions";

    await fetch(opPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedOps)
    });

    await fetch(subPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSubs)
    });

    setData(updatedSubs);
  };

  const handleReject = async (index) => {
    const updated = data.filter((_, i) => i !== index);
    await fetch("/api/save-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    });
    setData(updated);
  };

  return (
    <>
      <Head>
        <title>Admin Panel | NXPAGE</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Operator Submission Review</h1>
        {data.length === 0 ? (
          <p className="text-gray-500">No submissions pending.</p>
        ) : (
          data.map((op, i) => (
            <div key={i} className="border p-4 rounded mb-4 shadow-sm bg-white">
              <h2 className="font-semibold text-xl">{op.name}</h2>
              <p className="text-sm text-gray-600">{op.role}</p>
              <p className="text-gray-800 mt-2 mb-2">{op.bio}</p>
              <p className="text-sm text-gray-500 mb-2">{op.tags}</p>
              <div className="space-x-2">
                <button
                  onClick={() => handleApprove(i)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(i)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}