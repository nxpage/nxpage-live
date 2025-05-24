import Link from "next/link";

export default function Pad() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">NXPAGE Command Pad</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Operator Grid" href="/" />
        <Section title="Submit Profile" href="/submit" />
        <Section title="Connect Requests" href="/connect" />
        <Section title="Admin Review" href="/admin" />
        <Section title="Spotlight Access" href="/spotlight/raye" />
      </div>
    </div>
  );
}

function Section({ title, href }) {
  return (
    <Link href={href}>
      <a className="block bg-white shadow-sm rounded-lg border px-5 py-4 text-gray-700 hover:bg-gray-100 transition">
        {title}
      </a>
    </Link>
  );
}