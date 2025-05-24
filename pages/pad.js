import Link from "next/link";

export default function Pad() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">NXPAGE Command Pad</h1>

      <div className="space-y-3">
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
      <a className="block p-4 border rounded hover:bg-gray-50 transition">
        {title}
      </a>
    </Link>
  );
}