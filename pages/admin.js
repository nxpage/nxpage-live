// pages/admin.js
import { useState } from "react";
import Head from "next/head";

const mockSubmissions = [
  {
    name: "Kairo",
    role: "Impact Designer",
    tags: ["#QuietStorm", "#GridMover"],
    bio: "I create brand visuals that carry memory and momentum.",
    email: "kairo@example.com"
  },
  {
    name: "Nyah",
    role: "Voice Presence Coach",
    tags: ["#FastHands", "#SilentOps"],
    bio: "Teaching creators how to own a room without speaking too loud.",
    email: "nyah@example.com"
  }
];

export default function Admin() {
  const [submissions, setSubmissions] = useState(mockSubmissions);

  const handleApprove = (index) => {
    const approved = submissions[index];
    console.log("Approved:", approved);
    setSubmissions(submissions.filter((_, i) => i !== index));
  };

  const handleReject = (index) => {
    setSubmissions(submissions.filter((_, i) => i !== index));
  };

  return (
    <>
      <Head>
        <title>Admin Panel | NXPAGE</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Operator Submission Review</h1>
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions pending.</p>
        ) : (
          submissions.map((op, i) => (
            <div key={i} className="border p-4 rounded mb-4 shadow-sm bg-white">
              <h2 className="font-semibold text-xl">{op.name}</h2>
              <p className="text-sm text-gray-600">{op.role}</p>
              <p className="text-gray-800 mt-2 mb-2">{op.bio}</p>
              <p className="text-sm text-gray-500 mb-2">{op.tags.join(" ")}</p>
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