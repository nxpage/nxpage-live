// pages/pad.js
import Link from "next/link";

export default function Pad() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">NXPAGE Command Pad</h1>

      <div className="space-x-4 mb-4 text-indigo-600 font-medium text-sm">
        <Link href="/"><a>Home</a></Link>
        <Link href="/connect"><a>Connect</a></Link>
        <Link href="/submit"><a>Submit</a></Link>
        <Link href="/admin"><a>Admin</a></Link>
        <Link href="/spotlight/raye"><a>Spotlight Access</a></Link>
      </div>

      <div className="text-gray-700 text-sm">
        <p className="mb-2">
          Use the links above to navigate between major system control points.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Submit or edit operator profiles</li>
          <li>Access shadow session requests</li>
          <li>Review and approve new operator entries</li>
          <li>Jump into spotlight or discovery grid directly</li>
        </ul>
      </div>
    </div>
  );
}